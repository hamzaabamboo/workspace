import { Context } from "../types";
import { Resolvers } from "../resolver.types";

const testResolver: Resolvers<Context> = {
  Query: {
    hello: (parent, args, ctx, info) => {
      return "world";
    }
  }
};

export default testResolver;
