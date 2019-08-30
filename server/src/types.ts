import { IQuery, IMutation, ISubscription } from './graphql';
import { User } from './generated/prisma';
import { Request } from 'express';
import { GraphQLResolveInfo } from 'graphql';
import { ReadStream } from 'fs';

export type ResolverMap = Partial<
  IQuery & IMutation & ISubscription & { [key: string]: any }
>;
// tslint:disable-next-line:interface-name
export interface Ctx {
  connection: any;
  request: Request;
  user: (info?: GraphQLResolveInfo) => Promise<User>;
}

// tslint:disable-next-line:interface-name
export interface TokenPayload {
  userId: string;
}

export type Result<T> = T | Promise<T>;

export type FileUpload = Promise<{
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
}>;
