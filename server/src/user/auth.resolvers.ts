import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../types";
import { Resolvers } from "../resolver.types";
import { User } from "../generated/prisma";

const user: Resolvers = {
  Query: {
    async currentUser(parent, args, ctx, info) {
      return ctx.user(info);
    }
  },
  Mutation: {
    async signup(parent, { email, password }, ctx) {
      if (await ctx.db.exists.User({ email })) {
        throw new Error(`${email} has already been registered`);
      }
      const hashed = await bcrypt.hash(password, 10);
      const user = await ctx.db.mutation.createUser({
        data: {
          email,
          password: hashed,
          role: "NORMAL"
        }
      });
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    },

    async login(parent, { email, password }, ctx, info) {
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    }
  },
  AuthPayload: {
    async user(parent, args, context, info) {
      const user = <User>parent.user;
      if (user.id) {
        return context.db.query.user({ where: { id: user.id } }, info);
      }
      return parent.user;
    }
  }
};

export default user;
