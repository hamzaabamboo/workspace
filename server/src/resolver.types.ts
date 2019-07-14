import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { Card, User, UserRole } from "./generated/prisma";
import { Clipboard } from "./generated/prisma.ts";
import { Context } from "./types";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  DateTime: any;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"];
  user: User;
};

export type Board = {
  __typename?: "Board";
  id: Scalars["ID"];
  title: Scalars["String"];
  slug: Scalars["String"];
};

export type BoardWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Scalars["String"]>>;
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  slug_lt?: Maybe<Scalars["String"]>;
  slug_lte?: Maybe<Scalars["String"]>;
  slug_gt?: Maybe<Scalars["String"]>;
  slug_gte?: Maybe<Scalars["String"]>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  slug_starts_with?: Maybe<Scalars["String"]>;
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  slug_ends_with?: Maybe<Scalars["String"]>;
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<BoardWhereInput>>;
  OR?: Maybe<Array<BoardWhereInput>>;
  NOT?: Maybe<Array<BoardWhereInput>>;
};

export type Card = {
  __typename?: "Card";
  id: Scalars["ID"];
  creator: User;
  parent?: Maybe<Board>;
  title: Scalars["String"];
  slug: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  public: Scalars["Boolean"];
  archived: Scalars["Boolean"];
  files?: Maybe<Array<File>>;
};

export type CardFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CardInput = {
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

export type CardMetaInput = {
  __typename?: "CardMetaInput";
  public?: Maybe<Scalars["Boolean"]>;
  archived?: Maybe<Scalars["Boolean"]>;
};

export type CardWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  creator?: Maybe<UserWhereInput>;
  parent?: Maybe<BoardWhereInput>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Scalars["String"]>>;
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  slug_lt?: Maybe<Scalars["String"]>;
  slug_lte?: Maybe<Scalars["String"]>;
  slug_gt?: Maybe<Scalars["String"]>;
  slug_gte?: Maybe<Scalars["String"]>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  slug_starts_with?: Maybe<Scalars["String"]>;
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  slug_ends_with?: Maybe<Scalars["String"]>;
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  public?: Maybe<Scalars["Boolean"]>;
  public_not?: Maybe<Scalars["Boolean"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  archived_not?: Maybe<Scalars["Boolean"]>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<CardWhereInput>>;
  OR?: Maybe<Array<CardWhereInput>>;
  NOT?: Maybe<Array<CardWhereInput>>;
};

export type Clipboard = {
  __typename?: "Clipboard";
  id: Scalars["ID"];
  creator: User;
  content: Scalars["String"];
  archived: Scalars["Boolean"];
};

export type ClipboardInput = {
  content: Scalars["String"];
};

export type File = {
  __typename?: "File";
  filename: Scalars["String"];
  mimetype: Scalars["String"];
  encoding: Scalars["String"];
};

export enum FileOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  PathAsc = "path_ASC",
  PathDesc = "path_DESC",
  FilenameAsc = "filename_ASC",
  FilenameDesc = "filename_DESC",
  MimetypeAsc = "mimetype_ASC",
  MimetypeDesc = "mimetype_DESC",
  EncodingAsc = "encoding_ASC",
  EncodingDesc = "encoding_DESC"
}

export enum FileType {
  Image = "IMAGE",
  Document = "DOCUMENT",
  Other = "OTHER"
}

export type FileWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  card?: Maybe<CardWhereInput>;
  type?: Maybe<FileType>;
  type_not?: Maybe<FileType>;
  type_in?: Maybe<Array<FileType>>;
  type_not_in?: Maybe<Array<FileType>>;
  path?: Maybe<Scalars["String"]>;
  path_not?: Maybe<Scalars["String"]>;
  path_in?: Maybe<Array<Scalars["String"]>>;
  path_not_in?: Maybe<Array<Scalars["String"]>>;
  path_lt?: Maybe<Scalars["String"]>;
  path_lte?: Maybe<Scalars["String"]>;
  path_gt?: Maybe<Scalars["String"]>;
  path_gte?: Maybe<Scalars["String"]>;
  path_contains?: Maybe<Scalars["String"]>;
  path_not_contains?: Maybe<Scalars["String"]>;
  path_starts_with?: Maybe<Scalars["String"]>;
  path_not_starts_with?: Maybe<Scalars["String"]>;
  path_ends_with?: Maybe<Scalars["String"]>;
  path_not_ends_with?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  filename_not?: Maybe<Scalars["String"]>;
  filename_in?: Maybe<Array<Scalars["String"]>>;
  filename_not_in?: Maybe<Array<Scalars["String"]>>;
  filename_lt?: Maybe<Scalars["String"]>;
  filename_lte?: Maybe<Scalars["String"]>;
  filename_gt?: Maybe<Scalars["String"]>;
  filename_gte?: Maybe<Scalars["String"]>;
  filename_contains?: Maybe<Scalars["String"]>;
  filename_not_contains?: Maybe<Scalars["String"]>;
  filename_starts_with?: Maybe<Scalars["String"]>;
  filename_not_starts_with?: Maybe<Scalars["String"]>;
  filename_ends_with?: Maybe<Scalars["String"]>;
  filename_not_ends_with?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  mimetype_not?: Maybe<Scalars["String"]>;
  mimetype_in?: Maybe<Array<Scalars["String"]>>;
  mimetype_not_in?: Maybe<Array<Scalars["String"]>>;
  mimetype_lt?: Maybe<Scalars["String"]>;
  mimetype_lte?: Maybe<Scalars["String"]>;
  mimetype_gt?: Maybe<Scalars["String"]>;
  mimetype_gte?: Maybe<Scalars["String"]>;
  mimetype_contains?: Maybe<Scalars["String"]>;
  mimetype_not_contains?: Maybe<Scalars["String"]>;
  mimetype_starts_with?: Maybe<Scalars["String"]>;
  mimetype_not_starts_with?: Maybe<Scalars["String"]>;
  mimetype_ends_with?: Maybe<Scalars["String"]>;
  mimetype_not_ends_with?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  encoding_not?: Maybe<Scalars["String"]>;
  encoding_in?: Maybe<Array<Scalars["String"]>>;
  encoding_not_in?: Maybe<Array<Scalars["String"]>>;
  encoding_lt?: Maybe<Scalars["String"]>;
  encoding_lte?: Maybe<Scalars["String"]>;
  encoding_gt?: Maybe<Scalars["String"]>;
  encoding_gte?: Maybe<Scalars["String"]>;
  encoding_contains?: Maybe<Scalars["String"]>;
  encoding_not_contains?: Maybe<Scalars["String"]>;
  encoding_starts_with?: Maybe<Scalars["String"]>;
  encoding_not_starts_with?: Maybe<Scalars["String"]>;
  encoding_ends_with?: Maybe<Scalars["String"]>;
  encoding_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
};

export type Mutation = {
  __typename?: "Mutation";
  makeCard: Card;
  editCard: Card;
  makeClipboard: Clipboard;
  deleteClipboard: Clipboard;
  login: AuthPayload;
  signup: AuthPayload;
};

export type MutationMakeCardArgs = {
  data?: Maybe<CardInput>;
  board?: Maybe<Scalars["ID"]>;
};

export type MutationEditCardArgs = {
  id: Scalars["ID"];
  data?: Maybe<CardInput>;
};

export type MutationMakeClipboardArgs = {
  data?: Maybe<ClipboardInput>;
};

export type MutationDeleteClipboardArgs = {
  id: Scalars["ID"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getCards: Array<Maybe<Card>>;
  getClipboards: Array<Maybe<Clipboard>>;
  hello?: Maybe<Scalars["String"]>;
  currentUser: User;
};

export type Subscription = {
  __typename?: "Subscription";
  cards: Array<Maybe<Card>>;
  clipboards: Array<Maybe<Clipboard>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
  profileImage?: Maybe<Scalars["String"]>;
};

export enum UserRole {
  Normal = "NORMAL",
  Admin = "ADMIN"
}

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  password_not?: Maybe<Scalars["String"]>;
  password_in?: Maybe<Array<Scalars["String"]>>;
  password_not_in?: Maybe<Array<Scalars["String"]>>;
  password_lt?: Maybe<Scalars["String"]>;
  password_lte?: Maybe<Scalars["String"]>;
  password_gt?: Maybe<Scalars["String"]>;
  password_gte?: Maybe<Scalars["String"]>;
  password_contains?: Maybe<Scalars["String"]>;
  password_not_contains?: Maybe<Scalars["String"]>;
  password_starts_with?: Maybe<Scalars["String"]>;
  password_not_starts_with?: Maybe<Scalars["String"]>;
  password_ends_with?: Maybe<Scalars["String"]>;
  password_not_ends_with?: Maybe<Scalars["String"]>;
  role?: Maybe<UserRole>;
  role_not?: Maybe<UserRole>;
  role_in?: Maybe<Array<UserRole>>;
  role_not_in?: Maybe<Array<UserRole>>;
  profileImage?: Maybe<Scalars["String"]>;
  profileImage_not?: Maybe<Scalars["String"]>;
  profileImage_in?: Maybe<Array<Scalars["String"]>>;
  profileImage_not_in?: Maybe<Array<Scalars["String"]>>;
  profileImage_lt?: Maybe<Scalars["String"]>;
  profileImage_lte?: Maybe<Scalars["String"]>;
  profileImage_gt?: Maybe<Scalars["String"]>;
  profileImage_gte?: Maybe<Scalars["String"]>;
  profileImage_contains?: Maybe<Scalars["String"]>;
  profileImage_not_contains?: Maybe<Scalars["String"]>;
  profileImage_starts_with?: Maybe<Scalars["String"]>;
  profileImage_not_starts_with?: Maybe<Scalars["String"]>;
  profileImage_ends_with?: Maybe<Scalars["String"]>;
  profileImage_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Card: ResolverTypeWrapper<Card>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UserRole: ResolverTypeWrapper<UserRole>;
  Board: ResolverTypeWrapper<Board>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  FileWhereInput: FileWhereInput;
  CardWhereInput: CardWhereInput;
  UserWhereInput: UserWhereInput;
  BoardWhereInput: BoardWhereInput;
  FileType: FileType;
  FileOrderByInput: FileOrderByInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  File: ResolverTypeWrapper<File>;
  Clipboard: ResolverTypeWrapper<Clipboard>;
  Mutation: ResolverTypeWrapper<{}>;
  CardInput: CardInput;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
  ClipboardInput: ClipboardInput;
  AuthPayload: ResolverTypeWrapper<
    Omit<AuthPayload, "user"> & { user: ResolversTypes["User"] }
  >;
  Subscription: ResolverTypeWrapper<{}>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  CardMetaInput: ResolverTypeWrapper<CardMetaInput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Card: Card;
  ID: Scalars["ID"];
  User: User;
  String: Scalars["String"];
  UserRole: UserRole;
  Board: Board;
  Boolean: Scalars["Boolean"];
  FileWhereInput: FileWhereInput;
  CardWhereInput: CardWhereInput;
  UserWhereInput: UserWhereInput;
  BoardWhereInput: BoardWhereInput;
  FileType: FileType;
  FileOrderByInput: FileOrderByInput;
  Int: Scalars["Int"];
  File: File;
  Clipboard: Clipboard;
  Mutation: {};
  CardInput: CardInput;
  Upload: Scalars["Upload"];
  ClipboardInput: ClipboardInput;
  AuthPayload: Omit<AuthPayload, "user"> & { user: ResolversTypes["User"] };
  Subscription: {};
  DateTime: Scalars["DateTime"];
  CardMetaInput: CardMetaInput;
};

export type AuthPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type BoardResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Board"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type CardResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Card"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes["Board"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  public?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  archived?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  files?: Resolver<
    Maybe<Array<ResolversTypes["File"]>>,
    ParentType,
    ContextType,
    CardFilesArgs
  >;
};

export type CardMetaInputResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["CardMetaInput"]
> = {
  public?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  archived?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
};

export type ClipboardResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Clipboard"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  archived?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type FileResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["File"]
> = {
  filename?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  makeCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    MutationMakeCardArgs
  >;
  editCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    MutationEditCardArgs
  >;
  makeClipboard?: Resolver<
    ResolversTypes["Clipboard"],
    ParentType,
    ContextType,
    MutationMakeClipboardArgs
  >;
  deleteClipboard?: Resolver<
    ResolversTypes["Clipboard"],
    ParentType,
    ContextType,
    MutationDeleteClipboardArgs
  >;
  login?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationLoginArgs
  >;
  signup?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationSignupArgs
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Query"]
> = {
  getCards?: Resolver<
    Array<Maybe<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  getClipboards?: Resolver<
    Array<Maybe<ResolversTypes["Clipboard"]>>,
    ParentType,
    ContextType
  >;
  hello?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  currentUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Subscription"]
> = {
  cards?: SubscriptionResolver<
    Array<Maybe<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  clipboards?: SubscriptionResolver<
    Array<Maybe<ResolversTypes["Clipboard"]>>,
    ParentType,
    ContextType
  >;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["UserRole"], ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Board?: BoardResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  CardMetaInput?: CardMetaInputResolvers<ContextType>;
  Clipboard?: ClipboardResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
