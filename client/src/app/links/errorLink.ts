import { onError } from "apollo-link-error";
import { AuthService } from "../common/services/auth.service";

export const errorLink = (authService: AuthService) =>
  onError(error => {
    const { graphQLErrors, networkError } = error;
    if (graphQLErrors) {
      graphQLErrors.forEach(e => {
        if (e.message === "Not authorized") {
          authService.logout();
        }
      });
    }
  });
