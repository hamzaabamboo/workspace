import { onError } from "apollo-link-error";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
  }
});
