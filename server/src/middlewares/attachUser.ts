import { IMiddleware } from "graphql-middleware";
import { Context } from "../types";
import { getUser } from "../utils";

export const attachUser: IMiddleware = async (
  resolve,
  parent,
  args,
  ctx: Context,
  info
) => {
  try {
    const user = await getUser(ctx);
    ctx.user = user;
  } catch {}
  return resolve();
};
