import { from } from "apollo-link";
import { authLink } from "./authLink";
import { uploadLink } from "./uploadLink";

const links = from([authLink, uploadLink]);

export default links;
