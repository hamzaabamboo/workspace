import { Prisma } from "./generated/prisma";
import { Resolvers, User } from "./resolver.types";
import { Request } from "express";

// tslint:disable-next-line:interface-name
export interface Context {
  db: Prisma;
  connection: any;
  request: Request;
  user?: User;
}

// tslint:disable-next-line:interface-name
export interface TokenPayload {
  userId: string;
}

export type ResultWrapper<T> = T | Promise<T>;

export interface ClassResolvers {
  resolvers(): Resolvers;
}
