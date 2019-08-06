import { isEmpty, omitBy, merge } from "lodash";
import { fileLoader } from "merge-graphql-schemas";
import { join } from "path";
import { getResolvers } from "./container";
import { Resolvers } from "./resolver.types";
import { PartialResolver } from "./types";

export const mergeResolvers = (mergingResolvers: any[]) => {
  const reducedResolver = mergingResolvers.reduce(
    (prev: PartialResolver, current) => {
      const toMerge: PartialResolver =
        current instanceof Function ? getResolvers(current) : current;

      return merge(prev, toMerge);
    },
    {}
  );

  return omitBy(reducedResolver, isEmpty) as any;
};

const resolversArray = fileLoader(join(__dirname, "./**/*.resolvers.*"));

export const resolvers = mergeResolvers(resolversArray);
