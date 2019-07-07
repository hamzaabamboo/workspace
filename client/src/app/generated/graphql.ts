import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
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

export type Board = Node & {
  __typename?: "Board";
  id: Scalars["ID"];
  title: Scalars["String"];
  slug: Scalars["String"];
};

export type BoardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BoardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BoardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BoardWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
};

export type Card = Node & {
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CardWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars["String"]>;
  public?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  public_not?: Maybe<Scalars["Boolean"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  archived_not?: Maybe<Scalars["Boolean"]>;
  creator?: Maybe<UserWhereInput>;
  parent?: Maybe<BoardWhereInput>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
};

export type Clipboard = Node & {
  __typename?: "Clipboard";
  id: Scalars["ID"];
  creator: User;
  content: Scalars["String"];
  archived: Scalars["Boolean"];
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FileWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  type?: Maybe<FileType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<FileType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<FileType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<FileType>>;
  path?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  path_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  path_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  path_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  path_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  path_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  path_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  path_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  path_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  path_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  path_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  path_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  path_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  path_not_ends_with?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  filename_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  filename_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  filename_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  filename_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  filename_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  filename_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  filename_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  filename_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  filename_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  filename_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  filename_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  filename_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  filename_not_ends_with?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  mimetype_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimetype_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  mimetype_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  mimetype_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  mimetype_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  mimetype_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  mimetype_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimetype_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimetype_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimetype_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  mimetype_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimetype_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  mimetype_not_ends_with?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  encoding_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  encoding_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  encoding_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  encoding_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  encoding_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  encoding_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  encoding_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  encoding_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  encoding_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  encoding_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  encoding_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  encoding_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  encoding_not_ends_with?: Maybe<Scalars["String"]>;
  card?: Maybe<CardWhereInput>;
};

export type Mutation = {
  __typename?: "Mutation";
  makeCard: Card;
  editCard: Card;
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

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  getCards: Array<Maybe<Card>>;
  hello?: Maybe<Scalars["String"]>;
  currentUser: User;
};

export type Subscription = {
  __typename?: "Subscription";
  cards: Array<Maybe<Card>>;
};

export type User = Node & {
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars["String"]>;
  role?: Maybe<UserRole>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>;
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<UserRole>>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<UserRole>>;
  profileImage?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  profileImage_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  profileImage_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  profileImage_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  profileImage_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  profileImage_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  profileImage_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  profileImage_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  profileImage_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  profileImage_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  profileImage_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  profileImage_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  profileImage_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  profileImage_not_ends_with?: Maybe<Scalars["String"]>;
};
export type CardContentFragment = { __typename?: "Card" } & Pick<
  Card,
  "title" | "content" | "slug"
> & { files: Maybe<Array<{ __typename?: "File" } & Pick<File, "filename">>> };

export type GetCardsQueryVariables = {};

export type GetCardsQuery = { __typename?: "Query" } & {
  getCards: Array<
    Maybe<
      { __typename?: "Card" } & Pick<Card, "id" | "public" | "archived"> &
        CardContentFragment
    >
  >;
};

export type MakeCardMutationVariables = {
  data?: Maybe<CardInput>;
};

export type MakeCardMutation = { __typename?: "Mutation" } & {
  makeCard: { __typename?: "Card" } & Pick<Card, "id">;
};

export type HelloQueryVariables = {};

export type HelloQuery = { __typename?: "Query" } & Pick<Query, "hello">;
export const CardContentFragmentDoc = gql`
  fragment CardContent on Card {
    title
    content
    slug
    files {
      filename
    }
  }
`;
export const GetCardsDocument = gql`
  query getCards {
    getCards {
      id
      ...CardContent
      public
      archived
    }
  }
  ${CardContentFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class GetCardsGQL extends Apollo.Query<
  GetCardsQuery,
  GetCardsQueryVariables
> {
  document = GetCardsDocument;
}
export const MakeCardDocument = gql`
  mutation makeCard($data: CardInput) {
    makeCard(data: $data) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class MakeCardGQL extends Apollo.Mutation<
  MakeCardMutation,
  MakeCardMutationVariables
> {
  document = MakeCardDocument;
}
export const HelloDocument = gql`
  query Hello {
    hello
  }
`;

@Injectable({
  providedIn: "root"
})
export class HelloGQL extends Apollo.Query<HelloQuery, HelloQueryVariables> {
  document = HelloDocument;
}
export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "INTERFACE",
        name: "Node",
        possibleTypes: [
          {
            name: "Card"
          },
          {
            name: "User"
          },
          {
            name: "Board"
          },
          {
            name: "Clipboard"
          }
        ]
      }
    ]
  }
};

export default result;
