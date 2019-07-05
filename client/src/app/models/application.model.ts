import { Participant } from "./particiapnt.model";
import { RegistrationStatus } from "./types.model";

export interface Application {
  id: string;
  mobile: string;
  email: string;
  refcode: string;
  slip: string;
  status: RegistrationStatus;
  remarks?: string;
  participants: Participant[];
}
