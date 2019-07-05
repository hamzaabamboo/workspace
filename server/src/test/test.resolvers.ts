import { Context } from "../types";

const testResolver = {
  Query: {
    hello: (parent, args, ctx: Context, info) => {
      return "world";
    }
  }
};

export default testResolver;
