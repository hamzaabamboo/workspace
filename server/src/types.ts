import { Prisma } from "./generated/prisma";

// tslint:disable-next-line:interface-name
export interface Context {
  db: Prisma;
  connection: any;
  request: any;
}

// tslint:disable-next-line:interface-name
export interface TokenPayload {
  userId: string;
}
