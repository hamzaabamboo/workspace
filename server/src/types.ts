import { Prisma } from "./generated/prisma";
import { Resolvers, User } from "./resolver.types";
import { Request } from "express";
import { GraphQLResolveInfo } from "graphql";
import { ReadStream } from "fs";

// tslint:disable-next-line:interface-name
export interface Context {
  db: Prisma;
  connection: any;
  request: Request;
  user: (info?: GraphQLResolveInfo) => Promise<User>;
}

// tslint:disable-next-line:interface-name
export interface TokenPayload {
  userId: string;
}

export type ResultWrapper<T> = T | Promise<T>;

export interface ClassResolvers {
  resolvers(): Resolvers;
}

export type FileUpload = Promise<{
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
}>;
