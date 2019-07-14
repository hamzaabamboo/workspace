import { from } from "apollo-link";
import { authLink } from "./authLink";
import { uploadLink } from "./uploadLink";
import { errorLink } from "./errorLink";

const links = dependencies => {
  const { authService } = dependencies;
  return from([authLink, errorLink(authService), uploadLink]);
};

export default links;
