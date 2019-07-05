import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";

export const authLink = new ApolloLink((operation, forward) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
