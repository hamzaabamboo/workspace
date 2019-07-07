import { Resolvers } from "../resolver.types";

class Test {
  resolvers(): Resolvers {
    return {
      Query: {
        hello: () => "worlds"
      }
    };
  }
}

export default Test;
