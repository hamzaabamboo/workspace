import { Prisma, User } from "./generated/prisma";
import {
  Resolvers,
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers
} from "./generated/resolver.types";
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
  resolvers(): Partial<PartialResolver>;
}

export interface PartialResolver {
  Query: Partial<QueryResolvers.Type>;
  Mutation: Partial<MutationResolvers.Type>;
  Subscription: Partial<SubscriptionResolvers.Type>;
}

export type FileUpload = Promise<{
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
}>;
