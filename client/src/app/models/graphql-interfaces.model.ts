import { ApolloError } from "apollo-client";

export interface ApolloQueryResult<T> {
  data: T;
  error: ApolloError;
}
