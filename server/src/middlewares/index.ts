import { attachUser } from "./attachUser";
import { permissions } from "./permissions";

export const middlewares = [attachUser, permissions];
