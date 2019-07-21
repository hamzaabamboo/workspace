import * as cards from "./card/card.models";
import * as auth from "./user/auth.models";

export interface AuthPayload {
  token: string;
}
export interface CardMetaInput {
  public: boolean | null;
  archived: boolean | null;
}

export default { ...cards, ...auth };
