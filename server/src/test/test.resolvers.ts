import { Resolvers } from "../resolver.types";
import { PartialResolver } from "../types";

class Test {
  resolvers(): PartialResolver {
    return {
      Query: {
        hello: () => "worlds"
      }
    };
  }
}

export default Test;
