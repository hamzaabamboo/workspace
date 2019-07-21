import { isEmpty, omitBy, merge } from "lodash";
import { fileLoader } from "merge-graphql-schemas";
import { join } from "path";
import { getResolvers } from "./container";
import { Resolvers } from "./generated/resolver.types";

export const mergeResolvers = (mergingResolvers: any[]) => {
  const reducedResolver = mergingResolvers.reduce(
    (prev: Resolvers, current) => {
      const toMerge: Resolvers =
        current instanceof Function ? getResolvers(current) : current;

      return merge(prev, toMerge);
    },
    {}
  );

  return omitBy(reducedResolver, isEmpty);
};

const resolversArray = fileLoader(join(__dirname, "./**/*.resolvers.*"));

export const resolvers = mergeResolvers(resolversArray);
