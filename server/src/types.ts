import { Prisma } from "./generated/prisma";
import { Resolvers } from "./resolver.types";

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

export type ResultWrapper<T> = T | Promise<T>;

export interface ClassResolvers {
  resolvers(): Resolvers;
}
