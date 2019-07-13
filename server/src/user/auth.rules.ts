import { Context } from "../types";
import { rule } from "graphql-shield";
import { getUserId, getUser } from "../utils";

// Rules
export const isAuthenticated = rule()(
  async (parent, args, ctx: Context, info) => {
    return !!ctx.user();
  }
);
