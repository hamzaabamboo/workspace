import { Context } from "../types";
const testResolver = {
  Query: {
    hello: (parent, args, ctx, info) => {
      return "world";
    }
  }
};

export default testResolver;
