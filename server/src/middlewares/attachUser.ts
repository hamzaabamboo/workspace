import { IMiddleware } from "graphql-middleware";
import { Context } from "../types";
import { getUser } from "../utils";
import { GraphQLResolveInfo } from "graphql";

export const attachUser: IMiddleware = async (
  resolve,
  parent,
  args,
  ctx: Context,
  info
) => {
  ctx.user = (i?: GraphQLResolveInfo) => getUser(ctx, i);

  return resolve();
};
