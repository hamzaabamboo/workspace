import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
  Long: any,
  DateTime: any,
};



export type AggregateBoard = {
  __typename?: 'AggregateBoard',
  count: Scalars['Int'],
};

export type AggregateCard = {
  __typename?: 'AggregateCard',
  count: Scalars['Int'],
};

export type AggregateClipboard = {
  __typename?: 'AggregateClipboard',
  count: Scalars['Int'],
};

export type AggregateFile = {
  __typename?: 'AggregateFile',
  count: Scalars['Int'],
};

export type AggregateUser = {
  __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type AuthPayload = {
  __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BatchPayload = {
  __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type Board = {
  __typename?: 'Board',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  creator: User,
  member?: Maybe<Array<User>>,
  isPublic: Scalars['Boolean'],
  cards?: Maybe<Array<Card>>,
};


export type BoardMemberArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type BoardCardsArgs = {
  where?: Maybe<CardWhereInput>,
  orderBy?: Maybe<CardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type BoardConnection = {
  __typename?: 'BoardConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<BoardEdge>>,
  aggregate: AggregateBoard,
};

export type BoardCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  slug: Scalars['String'],
  creator: UserCreateOneWithoutCreatedBoardsInput,
  member?: Maybe<UserCreateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardCreateManyWithoutParentInput>,
};

export type BoardCreateManyWithoutCreatorInput = {
  create?: Maybe<Array<BoardCreateWithoutCreatorInput>>,
  connect?: Maybe<Array<BoardWhereUniqueInput>>,
};

export type BoardCreateManyWithoutMemberInput = {
  create?: Maybe<Array<BoardCreateWithoutMemberInput>>,
  connect?: Maybe<Array<BoardWhereUniqueInput>>,
};

export type BoardCreateOneWithoutCardsInput = {
  create?: Maybe<BoardCreateWithoutCardsInput>,
  connect?: Maybe<BoardWhereUniqueInput>,
};

export type BoardCreateWithoutCardsInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  slug: Scalars['String'],
  creator: UserCreateOneWithoutCreatedBoardsInput,
  member?: Maybe<UserCreateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
};

export type BoardCreateWithoutCreatorInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  slug: Scalars['String'],
  member?: Maybe<UserCreateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardCreateManyWithoutParentInput>,
};

export type BoardCreateWithoutMemberInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  slug: Scalars['String'],
  creator: UserCreateOneWithoutCreatedBoardsInput,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardCreateManyWithoutParentInput>,
};

export type BoardEdge = {
  __typename?: 'BoardEdge',
  node: Board,
  cursor: Scalars['String'],
};

export type BoardInput = {
  title: Scalars['String'],
  isPublic: Scalars['Boolean'],
};

export enum BoardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC'
}

export type BoardPreviousValues = {
  __typename?: 'BoardPreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  isPublic: Scalars['Boolean'],
};

export type BoardScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<BoardScalarWhereInput>>,
  OR?: Maybe<Array<BoardScalarWhereInput>>,
  NOT?: Maybe<Array<BoardScalarWhereInput>>,
};

export type BoardSubscriptionPayload = {
  __typename?: 'BoardSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Board>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<BoardPreviousValues>,
};

export type BoardSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<BoardWhereInput>,
  AND?: Maybe<Array<BoardSubscriptionWhereInput>>,
  OR?: Maybe<Array<BoardSubscriptionWhereInput>>,
  NOT?: Maybe<Array<BoardSubscriptionWhereInput>>,
};

export type BoardUpdateInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedBoardsInput>,
  member?: Maybe<UserUpdateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardUpdateManyWithoutParentInput>,
};

export type BoardUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
};

export type BoardUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
};

export type BoardUpdateManyWithoutCreatorInput = {
  create?: Maybe<Array<BoardCreateWithoutCreatorInput>>,
  delete?: Maybe<Array<BoardWhereUniqueInput>>,
  connect?: Maybe<Array<BoardWhereUniqueInput>>,
  set?: Maybe<Array<BoardWhereUniqueInput>>,
  disconnect?: Maybe<Array<BoardWhereUniqueInput>>,
  update?: Maybe<Array<BoardUpdateWithWhereUniqueWithoutCreatorInput>>,
  upsert?: Maybe<Array<BoardUpsertWithWhereUniqueWithoutCreatorInput>>,
  deleteMany?: Maybe<Array<BoardScalarWhereInput>>,
  updateMany?: Maybe<Array<BoardUpdateManyWithWhereNestedInput>>,
};

export type BoardUpdateManyWithoutMemberInput = {
  create?: Maybe<Array<BoardCreateWithoutMemberInput>>,
  delete?: Maybe<Array<BoardWhereUniqueInput>>,
  connect?: Maybe<Array<BoardWhereUniqueInput>>,
  set?: Maybe<Array<BoardWhereUniqueInput>>,
  disconnect?: Maybe<Array<BoardWhereUniqueInput>>,
  update?: Maybe<Array<BoardUpdateWithWhereUniqueWithoutMemberInput>>,
  upsert?: Maybe<Array<BoardUpsertWithWhereUniqueWithoutMemberInput>>,
  deleteMany?: Maybe<Array<BoardScalarWhereInput>>,
  updateMany?: Maybe<Array<BoardUpdateManyWithWhereNestedInput>>,
};

export type BoardUpdateManyWithWhereNestedInput = {
  where: BoardScalarWhereInput,
  data: BoardUpdateManyDataInput,
};

export type BoardUpdateOneWithoutCardsInput = {
  create?: Maybe<BoardCreateWithoutCardsInput>,
  update?: Maybe<BoardUpdateWithoutCardsDataInput>,
  upsert?: Maybe<BoardUpsertWithoutCardsInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<BoardWhereUniqueInput>,
};

export type BoardUpdateWithoutCardsDataInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedBoardsInput>,
  member?: Maybe<UserUpdateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
};

export type BoardUpdateWithoutCreatorDataInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  member?: Maybe<UserUpdateManyWithoutJoinedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardUpdateManyWithoutParentInput>,
};

export type BoardUpdateWithoutMemberDataInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedBoardsInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  cards?: Maybe<CardUpdateManyWithoutParentInput>,
};

export type BoardUpdateWithWhereUniqueWithoutCreatorInput = {
  where: BoardWhereUniqueInput,
  data: BoardUpdateWithoutCreatorDataInput,
};

export type BoardUpdateWithWhereUniqueWithoutMemberInput = {
  where: BoardWhereUniqueInput,
  data: BoardUpdateWithoutMemberDataInput,
};

export type BoardUpsertWithoutCardsInput = {
  update: BoardUpdateWithoutCardsDataInput,
  create: BoardCreateWithoutCardsInput,
};

export type BoardUpsertWithWhereUniqueWithoutCreatorInput = {
  where: BoardWhereUniqueInput,
  update: BoardUpdateWithoutCreatorDataInput,
  create: BoardCreateWithoutCreatorInput,
};

export type BoardUpsertWithWhereUniqueWithoutMemberInput = {
  where: BoardWhereUniqueInput,
  update: BoardUpdateWithoutMemberDataInput,
  create: BoardCreateWithoutMemberInput,
};

export type BoardWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  creator?: Maybe<UserWhereInput>,
  member_every?: Maybe<UserWhereInput>,
  member_some?: Maybe<UserWhereInput>,
  member_none?: Maybe<UserWhereInput>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  cards_every?: Maybe<CardWhereInput>,
  cards_some?: Maybe<CardWhereInput>,
  cards_none?: Maybe<CardWhereInput>,
  AND?: Maybe<Array<BoardWhereInput>>,
  OR?: Maybe<Array<BoardWhereInput>>,
  NOT?: Maybe<Array<BoardWhereInput>>,
};

export type BoardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Card = {
  __typename?: 'Card',
  id: Scalars['ID'],
  creator: User,
  parent?: Maybe<Board>,
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic: Scalars['Boolean'],
  archived: Scalars['Boolean'],
  files?: Maybe<Array<File>>,
};


export type CardFilesArgs = {
  where?: Maybe<FileWhereInput>,
  orderBy?: Maybe<FileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CardConnection = {
  __typename?: 'CardConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<CardEdge>>,
  aggregate: AggregateCard,
};

export type CardCreateInput = {
  id?: Maybe<Scalars['ID']>,
  creator: UserCreateOneWithoutCreatedCardsInput,
  parent?: Maybe<BoardCreateOneWithoutCardsInput>,
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileCreateManyWithoutCardInput>,
};

export type CardCreateManyWithoutCreatorInput = {
  create?: Maybe<Array<CardCreateWithoutCreatorInput>>,
  connect?: Maybe<Array<CardWhereUniqueInput>>,
};

export type CardCreateManyWithoutParentInput = {
  create?: Maybe<Array<CardCreateWithoutParentInput>>,
  connect?: Maybe<Array<CardWhereUniqueInput>>,
};

export type CardCreateOneWithoutFilesInput = {
  create?: Maybe<CardCreateWithoutFilesInput>,
  connect?: Maybe<CardWhereUniqueInput>,
};

export type CardCreateWithoutCreatorInput = {
  id?: Maybe<Scalars['ID']>,
  parent?: Maybe<BoardCreateOneWithoutCardsInput>,
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileCreateManyWithoutCardInput>,
};

export type CardCreateWithoutFilesInput = {
  id?: Maybe<Scalars['ID']>,
  creator: UserCreateOneWithoutCreatedCardsInput,
  parent?: Maybe<BoardCreateOneWithoutCardsInput>,
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type CardCreateWithoutParentInput = {
  id?: Maybe<Scalars['ID']>,
  creator: UserCreateOneWithoutCreatedCardsInput,
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileCreateManyWithoutCardInput>,
};

export type CardEdge = {
  __typename?: 'CardEdge',
  node: Card,
  cursor: Scalars['String'],
};

export type CardInput = {
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  files?: Maybe<Array<Maybe<Scalars['Upload']>>>,
  isPublic?: Maybe<Scalars['Boolean']>,
};

export enum CardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC'
}

export type CardPreviousValues = {
  __typename?: 'CardPreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  isPublic: Scalars['Boolean'],
  archived: Scalars['Boolean'],
};

export type CardScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  archived_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<CardScalarWhereInput>>,
  OR?: Maybe<Array<CardScalarWhereInput>>,
  NOT?: Maybe<Array<CardScalarWhereInput>>,
};

export type CardSubscriptionPayload = {
  __typename?: 'CardSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Card>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CardPreviousValues>,
};

export type CardSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CardWhereInput>,
  AND?: Maybe<Array<CardSubscriptionWhereInput>>,
  OR?: Maybe<Array<CardSubscriptionWhereInput>>,
  NOT?: Maybe<Array<CardSubscriptionWhereInput>>,
};

export type CardUpdateInput = {
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedCardsInput>,
  parent?: Maybe<BoardUpdateOneWithoutCardsInput>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileUpdateManyWithoutCardInput>,
};

export type CardUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type CardUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type CardUpdateManyWithoutCreatorInput = {
  create?: Maybe<Array<CardCreateWithoutCreatorInput>>,
  delete?: Maybe<Array<CardWhereUniqueInput>>,
  connect?: Maybe<Array<CardWhereUniqueInput>>,
  set?: Maybe<Array<CardWhereUniqueInput>>,
  disconnect?: Maybe<Array<CardWhereUniqueInput>>,
  update?: Maybe<Array<CardUpdateWithWhereUniqueWithoutCreatorInput>>,
  upsert?: Maybe<Array<CardUpsertWithWhereUniqueWithoutCreatorInput>>,
  deleteMany?: Maybe<Array<CardScalarWhereInput>>,
  updateMany?: Maybe<Array<CardUpdateManyWithWhereNestedInput>>,
};

export type CardUpdateManyWithoutParentInput = {
  create?: Maybe<Array<CardCreateWithoutParentInput>>,
  delete?: Maybe<Array<CardWhereUniqueInput>>,
  connect?: Maybe<Array<CardWhereUniqueInput>>,
  set?: Maybe<Array<CardWhereUniqueInput>>,
  disconnect?: Maybe<Array<CardWhereUniqueInput>>,
  update?: Maybe<Array<CardUpdateWithWhereUniqueWithoutParentInput>>,
  upsert?: Maybe<Array<CardUpsertWithWhereUniqueWithoutParentInput>>,
  deleteMany?: Maybe<Array<CardScalarWhereInput>>,
  updateMany?: Maybe<Array<CardUpdateManyWithWhereNestedInput>>,
};

export type CardUpdateManyWithWhereNestedInput = {
  where: CardScalarWhereInput,
  data: CardUpdateManyDataInput,
};

export type CardUpdateOneRequiredWithoutFilesInput = {
  create?: Maybe<CardCreateWithoutFilesInput>,
  update?: Maybe<CardUpdateWithoutFilesDataInput>,
  upsert?: Maybe<CardUpsertWithoutFilesInput>,
  connect?: Maybe<CardWhereUniqueInput>,
};

export type CardUpdateWithoutCreatorDataInput = {
  parent?: Maybe<BoardUpdateOneWithoutCardsInput>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileUpdateManyWithoutCardInput>,
};

export type CardUpdateWithoutFilesDataInput = {
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedCardsInput>,
  parent?: Maybe<BoardUpdateOneWithoutCardsInput>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type CardUpdateWithoutParentDataInput = {
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedCardsInput>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  files?: Maybe<FileUpdateManyWithoutCardInput>,
};

export type CardUpdateWithWhereUniqueWithoutCreatorInput = {
  where: CardWhereUniqueInput,
  data: CardUpdateWithoutCreatorDataInput,
};

export type CardUpdateWithWhereUniqueWithoutParentInput = {
  where: CardWhereUniqueInput,
  data: CardUpdateWithoutParentDataInput,
};

export type CardUpsertWithoutFilesInput = {
  update: CardUpdateWithoutFilesDataInput,
  create: CardCreateWithoutFilesInput,
};

export type CardUpsertWithWhereUniqueWithoutCreatorInput = {
  where: CardWhereUniqueInput,
  update: CardUpdateWithoutCreatorDataInput,
  create: CardCreateWithoutCreatorInput,
};

export type CardUpsertWithWhereUniqueWithoutParentInput = {
  where: CardWhereUniqueInput,
  update: CardUpdateWithoutParentDataInput,
  create: CardCreateWithoutParentInput,
};

export type CardWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  creator?: Maybe<UserWhereInput>,
  parent?: Maybe<BoardWhereInput>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  archived_not?: Maybe<Scalars['Boolean']>,
  files_every?: Maybe<FileWhereInput>,
  files_some?: Maybe<FileWhereInput>,
  files_none?: Maybe<FileWhereInput>,
  AND?: Maybe<Array<CardWhereInput>>,
  OR?: Maybe<Array<CardWhereInput>>,
  NOT?: Maybe<Array<CardWhereInput>>,
};

export type CardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  slug?: Maybe<Scalars['String']>,
};

export type Clipboard = {
  __typename?: 'Clipboard',
  id: Scalars['ID'],
  creator: User,
  content: Scalars['String'],
  archived: Scalars['Boolean'],
};

export type ClipboardConnection = {
  __typename?: 'ClipboardConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ClipboardEdge>>,
  aggregate: AggregateClipboard,
};

export type ClipboardCreateInput = {
  id?: Maybe<Scalars['ID']>,
  creator: UserCreateOneWithoutCreatedClipboardsInput,
  content: Scalars['String'],
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardCreateManyWithoutCreatorInput = {
  create?: Maybe<Array<ClipboardCreateWithoutCreatorInput>>,
  connect?: Maybe<Array<ClipboardWhereUniqueInput>>,
};

export type ClipboardCreateWithoutCreatorInput = {
  id?: Maybe<Scalars['ID']>,
  content: Scalars['String'],
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardEdge = {
  __typename?: 'ClipboardEdge',
  node: Clipboard,
  cursor: Scalars['String'],
};

export type ClipboardInput = {
  content: Scalars['String'],
};

export enum ClipboardOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC'
}

export type ClipboardPreviousValues = {
  __typename?: 'ClipboardPreviousValues',
  id: Scalars['ID'],
  content: Scalars['String'],
  archived: Scalars['Boolean'],
};

export type ClipboardScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
  archived_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<ClipboardScalarWhereInput>>,
  OR?: Maybe<Array<ClipboardScalarWhereInput>>,
  NOT?: Maybe<Array<ClipboardScalarWhereInput>>,
};

export type ClipboardSubscriptionPayload = {
  __typename?: 'ClipboardSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Clipboard>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ClipboardPreviousValues>,
};

export type ClipboardSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ClipboardWhereInput>,
  AND?: Maybe<Array<ClipboardSubscriptionWhereInput>>,
  OR?: Maybe<Array<ClipboardSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ClipboardSubscriptionWhereInput>>,
};

export type ClipboardUpdateInput = {
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatedClipboardsInput>,
  content?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardUpdateManyWithoutCreatorInput = {
  create?: Maybe<Array<ClipboardCreateWithoutCreatorInput>>,
  delete?: Maybe<Array<ClipboardWhereUniqueInput>>,
  connect?: Maybe<Array<ClipboardWhereUniqueInput>>,
  set?: Maybe<Array<ClipboardWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClipboardWhereUniqueInput>>,
  update?: Maybe<Array<ClipboardUpdateWithWhereUniqueWithoutCreatorInput>>,
  upsert?: Maybe<Array<ClipboardUpsertWithWhereUniqueWithoutCreatorInput>>,
  deleteMany?: Maybe<Array<ClipboardScalarWhereInput>>,
  updateMany?: Maybe<Array<ClipboardUpdateManyWithWhereNestedInput>>,
};

export type ClipboardUpdateManyWithWhereNestedInput = {
  where: ClipboardScalarWhereInput,
  data: ClipboardUpdateManyDataInput,
};

export type ClipboardUpdateWithoutCreatorDataInput = {
  content?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
};

export type ClipboardUpdateWithWhereUniqueWithoutCreatorInput = {
  where: ClipboardWhereUniqueInput,
  data: ClipboardUpdateWithoutCreatorDataInput,
};

export type ClipboardUpsertWithWhereUniqueWithoutCreatorInput = {
  where: ClipboardWhereUniqueInput,
  update: ClipboardUpdateWithoutCreatorDataInput,
  create: ClipboardCreateWithoutCreatorInput,
};

export type ClipboardWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  creator?: Maybe<UserWhereInput>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Boolean']>,
  archived_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<ClipboardWhereInput>>,
  OR?: Maybe<Array<ClipboardWhereInput>>,
  NOT?: Maybe<Array<ClipboardWhereInput>>,
};

export type ClipboardWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type File = {
  __typename?: 'File',
  id: Scalars['ID'],
  card: Card,
  type?: Maybe<FileType>,
  filename: Scalars['String'],
};

export type FileConnection = {
  __typename?: 'FileConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<FileEdge>>,
  aggregate: AggregateFile,
};

export type FileCreateInput = {
  id?: Maybe<Scalars['ID']>,
  card: CardCreateOneWithoutFilesInput,
  type?: Maybe<FileType>,
  filename: Scalars['String'],
};

export type FileCreateManyWithoutCardInput = {
  create?: Maybe<Array<FileCreateWithoutCardInput>>,
  connect?: Maybe<Array<FileWhereUniqueInput>>,
};

export type FileCreateWithoutCardInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<FileType>,
  filename: Scalars['String'],
};

export type FileEdge = {
  __typename?: 'FileEdge',
  node: File,
  cursor: Scalars['String'],
};

export enum FileOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC'
}

export type FilePreviousValues = {
  __typename?: 'FilePreviousValues',
  id: Scalars['ID'],
  type?: Maybe<FileType>,
  filename: Scalars['String'],
};

export type FileScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  type?: Maybe<FileType>,
  type_not?: Maybe<FileType>,
  type_in?: Maybe<Array<FileType>>,
  type_not_in?: Maybe<Array<FileType>>,
  filename?: Maybe<Scalars['String']>,
  filename_not?: Maybe<Scalars['String']>,
  filename_in?: Maybe<Array<Scalars['String']>>,
  filename_not_in?: Maybe<Array<Scalars['String']>>,
  filename_lt?: Maybe<Scalars['String']>,
  filename_lte?: Maybe<Scalars['String']>,
  filename_gt?: Maybe<Scalars['String']>,
  filename_gte?: Maybe<Scalars['String']>,
  filename_contains?: Maybe<Scalars['String']>,
  filename_not_contains?: Maybe<Scalars['String']>,
  filename_starts_with?: Maybe<Scalars['String']>,
  filename_not_starts_with?: Maybe<Scalars['String']>,
  filename_ends_with?: Maybe<Scalars['String']>,
  filename_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FileScalarWhereInput>>,
  OR?: Maybe<Array<FileScalarWhereInput>>,
  NOT?: Maybe<Array<FileScalarWhereInput>>,
};

export type FileSubscriptionPayload = {
  __typename?: 'FileSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<File>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilePreviousValues>,
};

export type FileSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FileWhereInput>,
  AND?: Maybe<Array<FileSubscriptionWhereInput>>,
  OR?: Maybe<Array<FileSubscriptionWhereInput>>,
  NOT?: Maybe<Array<FileSubscriptionWhereInput>>,
};

export enum FileType {
  Image = 'IMAGE',
  Document = 'DOCUMENT',
  Other = 'OTHER'
}

export type FileUpdateInput = {
  card?: Maybe<CardUpdateOneRequiredWithoutFilesInput>,
  type?: Maybe<FileType>,
  filename?: Maybe<Scalars['String']>,
};

export type FileUpdateManyDataInput = {
  type?: Maybe<FileType>,
  filename?: Maybe<Scalars['String']>,
};

export type FileUpdateManyMutationInput = {
  type?: Maybe<FileType>,
  filename?: Maybe<Scalars['String']>,
};

export type FileUpdateManyWithoutCardInput = {
  create?: Maybe<Array<FileCreateWithoutCardInput>>,
  delete?: Maybe<Array<FileWhereUniqueInput>>,
  connect?: Maybe<Array<FileWhereUniqueInput>>,
  set?: Maybe<Array<FileWhereUniqueInput>>,
  disconnect?: Maybe<Array<FileWhereUniqueInput>>,
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutCardInput>>,
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutCardInput>>,
  deleteMany?: Maybe<Array<FileScalarWhereInput>>,
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>,
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput,
  data: FileUpdateManyDataInput,
};

export type FileUpdateWithoutCardDataInput = {
  type?: Maybe<FileType>,
  filename?: Maybe<Scalars['String']>,
};

export type FileUpdateWithWhereUniqueWithoutCardInput = {
  where: FileWhereUniqueInput,
  data: FileUpdateWithoutCardDataInput,
};

export type FileUpsertWithWhereUniqueWithoutCardInput = {
  where: FileWhereUniqueInput,
  update: FileUpdateWithoutCardDataInput,
  create: FileCreateWithoutCardInput,
};

export type FileWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  card?: Maybe<CardWhereInput>,
  type?: Maybe<FileType>,
  type_not?: Maybe<FileType>,
  type_in?: Maybe<Array<FileType>>,
  type_not_in?: Maybe<Array<FileType>>,
  filename?: Maybe<Scalars['String']>,
  filename_not?: Maybe<Scalars['String']>,
  filename_in?: Maybe<Array<Scalars['String']>>,
  filename_not_in?: Maybe<Array<Scalars['String']>>,
  filename_lt?: Maybe<Scalars['String']>,
  filename_lte?: Maybe<Scalars['String']>,
  filename_gt?: Maybe<Scalars['String']>,
  filename_gte?: Maybe<Scalars['String']>,
  filename_contains?: Maybe<Scalars['String']>,
  filename_not_contains?: Maybe<Scalars['String']>,
  filename_starts_with?: Maybe<Scalars['String']>,
  filename_not_starts_with?: Maybe<Scalars['String']>,
  filename_ends_with?: Maybe<Scalars['String']>,
  filename_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FileWhereInput>>,
  OR?: Maybe<Array<FileWhereInput>>,
  NOT?: Maybe<Array<FileWhereInput>>,
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Mutation = {
  __typename?: 'Mutation',
  makeBoard: Board,
  editBoard: Board,
  makeCard: Card,
  editCard: Card,
  makeClipboard: Clipboard,
  removeClipboard: Clipboard,
  createBoard: Board,
  updateBoard?: Maybe<Board>,
  updateManyBoards: BatchPayload,
  upsertBoard: Board,
  deleteBoard?: Maybe<Board>,
  deleteManyBoards: BatchPayload,
  createCard: Card,
  updateCard?: Maybe<Card>,
  updateManyCards: BatchPayload,
  upsertCard: Card,
  deleteCard?: Maybe<Card>,
  deleteManyCards: BatchPayload,
  createClipboard: Clipboard,
  updateClipboard?: Maybe<Clipboard>,
  updateManyClipboards: BatchPayload,
  upsertClipboard: Clipboard,
  deleteClipboard?: Maybe<Clipboard>,
  deleteManyClipboards: BatchPayload,
  createFile: File,
  updateFile?: Maybe<File>,
  updateManyFiles: BatchPayload,
  upsertFile: File,
  deleteFile?: Maybe<File>,
  deleteManyFiles: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
  login: AuthPayload,
  signup: AuthPayload,
};


export type MutationMakeBoardArgs = {
  data: BoardInput
};


export type MutationEditBoardArgs = {
  id: Scalars['ID'],
  data: BoardInput
};


export type MutationMakeCardArgs = {
  data?: Maybe<CardInput>,
  board?: Maybe<Scalars['ID']>
};


export type MutationEditCardArgs = {
  id: Scalars['ID'],
  data?: Maybe<CardInput>
};


export type MutationMakeClipboardArgs = {
  data: ClipboardInput
};


export type MutationRemoveClipboardArgs = {
  id: Scalars['ID']
};


export type MutationCreateBoardArgs = {
  data: BoardCreateInput
};


export type MutationUpdateBoardArgs = {
  data: BoardUpdateInput,
  where: BoardWhereUniqueInput
};


export type MutationUpdateManyBoardsArgs = {
  data: BoardUpdateManyMutationInput,
  where?: Maybe<BoardWhereInput>
};


export type MutationUpsertBoardArgs = {
  where: BoardWhereUniqueInput,
  create: BoardCreateInput,
  update: BoardUpdateInput
};


export type MutationDeleteBoardArgs = {
  where: BoardWhereUniqueInput
};


export type MutationDeleteManyBoardsArgs = {
  where?: Maybe<BoardWhereInput>
};


export type MutationCreateCardArgs = {
  data: CardCreateInput
};


export type MutationUpdateCardArgs = {
  data: CardUpdateInput,
  where: CardWhereUniqueInput
};


export type MutationUpdateManyCardsArgs = {
  data: CardUpdateManyMutationInput,
  where?: Maybe<CardWhereInput>
};


export type MutationUpsertCardArgs = {
  where: CardWhereUniqueInput,
  create: CardCreateInput,
  update: CardUpdateInput
};


export type MutationDeleteCardArgs = {
  where: CardWhereUniqueInput
};


export type MutationDeleteManyCardsArgs = {
  where?: Maybe<CardWhereInput>
};


export type MutationCreateClipboardArgs = {
  data: ClipboardCreateInput
};


export type MutationUpdateClipboardArgs = {
  data: ClipboardUpdateInput,
  where: ClipboardWhereUniqueInput
};


export type MutationUpdateManyClipboardsArgs = {
  data: ClipboardUpdateManyMutationInput,
  where?: Maybe<ClipboardWhereInput>
};


export type MutationUpsertClipboardArgs = {
  where: ClipboardWhereUniqueInput,
  create: ClipboardCreateInput,
  update: ClipboardUpdateInput
};


export type MutationDeleteClipboardArgs = {
  where: ClipboardWhereUniqueInput
};


export type MutationDeleteManyClipboardsArgs = {
  where?: Maybe<ClipboardWhereInput>
};


export type MutationCreateFileArgs = {
  data: FileCreateInput
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput,
  where: FileWhereUniqueInput
};


export type MutationUpdateManyFilesArgs = {
  data: FileUpdateManyMutationInput,
  where?: Maybe<FileWhereInput>
};


export type MutationUpsertFileArgs = {
  where: FileWhereUniqueInput,
  create: FileCreateInput,
  update: FileUpdateInput
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput
};


export type MutationDeleteManyFilesArgs = {
  where?: Maybe<FileWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
  __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  getBoards: Array<Maybe<Board>>,
  getCards: Array<Maybe<Card>>,
  getClipboards: Array<Maybe<Clipboard>>,
  board?: Maybe<Board>,
  boards: Array<Maybe<Board>>,
  boardsConnection: BoardConnection,
  card?: Maybe<Card>,
  cards: Array<Maybe<Card>>,
  cardsConnection: CardConnection,
  clipboard?: Maybe<Clipboard>,
  clipboards: Array<Maybe<Clipboard>>,
  clipboardsConnection: ClipboardConnection,
  file?: Maybe<File>,
  files: Array<Maybe<File>>,
  filesConnection: FileConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
  currentUser: User,
};


export type QueryBoardArgs = {
  where: BoardWhereUniqueInput
};


export type QueryBoardsArgs = {
  where?: Maybe<BoardWhereInput>,
  orderBy?: Maybe<BoardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBoardsConnectionArgs = {
  where?: Maybe<BoardWhereInput>,
  orderBy?: Maybe<BoardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCardArgs = {
  where: CardWhereUniqueInput
};


export type QueryCardsArgs = {
  where?: Maybe<CardWhereInput>,
  orderBy?: Maybe<CardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCardsConnectionArgs = {
  where?: Maybe<CardWhereInput>,
  orderBy?: Maybe<CardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryClipboardArgs = {
  where: ClipboardWhereUniqueInput
};


export type QueryClipboardsArgs = {
  where?: Maybe<ClipboardWhereInput>,
  orderBy?: Maybe<ClipboardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryClipboardsConnectionArgs = {
  where?: Maybe<ClipboardWhereInput>,
  orderBy?: Maybe<ClipboardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput
};


export type QueryFilesArgs = {
  where?: Maybe<FileWhereInput>,
  orderBy?: Maybe<FileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFilesConnectionArgs = {
  where?: Maybe<FileWhereInput>,
  orderBy?: Maybe<FileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
  __typename?: 'Subscription',
  subscribeCards: Array<Maybe<CardSubscriptionPayload>>,
  subscribeClipboards: Array<Maybe<Clipboard>>,
  board?: Maybe<BoardSubscriptionPayload>,
  card?: Maybe<CardSubscriptionPayload>,
  clipboard?: Maybe<ClipboardSubscriptionPayload>,
  file?: Maybe<FileSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionBoardArgs = {
  where?: Maybe<BoardSubscriptionWhereInput>
};


export type SubscriptionCardArgs = {
  where?: Maybe<CardSubscriptionWhereInput>
};


export type SubscriptionClipboardArgs = {
  where?: Maybe<ClipboardSubscriptionWhereInput>
};


export type SubscriptionFileArgs = {
  where?: Maybe<FileSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<Array<Board>>,
  joinedBoards?: Maybe<Array<Board>>,
  createdCards?: Maybe<Array<Card>>,
  createdClipboards?: Maybe<Array<Clipboard>>,
};


export type UserCreatedBoardsArgs = {
  where?: Maybe<BoardWhereInput>,
  orderBy?: Maybe<BoardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserJoinedBoardsArgs = {
  where?: Maybe<BoardWhereInput>,
  orderBy?: Maybe<BoardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserCreatedCardsArgs = {
  where?: Maybe<CardWhereInput>,
  orderBy?: Maybe<CardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserCreatedClipboardsArgs = {
  where?: Maybe<ClipboardWhereInput>,
  orderBy?: Maybe<ClipboardOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
  __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardCreateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardCreateManyWithoutMemberInput>,
  createdCards?: Maybe<CardCreateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardCreateManyWithoutCreatorInput>,
};

export type UserCreateManyWithoutJoinedBoardsInput = {
  create?: Maybe<Array<UserCreateWithoutJoinedBoardsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneWithoutCreatedBoardsInput = {
  create?: Maybe<UserCreateWithoutCreatedBoardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutCreatedCardsInput = {
  create?: Maybe<UserCreateWithoutCreatedCardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutCreatedClipboardsInput = {
  create?: Maybe<UserCreateWithoutCreatedClipboardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutCreatedBoardsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  joinedBoards?: Maybe<BoardCreateManyWithoutMemberInput>,
  createdCards?: Maybe<CardCreateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardCreateManyWithoutCreatorInput>,
};

export type UserCreateWithoutCreatedCardsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardCreateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardCreateManyWithoutMemberInput>,
  createdClipboards?: Maybe<ClipboardCreateManyWithoutCreatorInput>,
};

export type UserCreateWithoutCreatedClipboardsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardCreateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardCreateManyWithoutMemberInput>,
  createdCards?: Maybe<CardCreateManyWithoutCreatorInput>,
};

export type UserCreateWithoutJoinedBoardsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardCreateManyWithoutCreatorInput>,
  createdCards?: Maybe<CardCreateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardCreateManyWithoutCreatorInput>,
};

export type UserEdge = {
  __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  ProfileImageAsc = 'profileImage_ASC',
  ProfileImageDesc = 'profileImage_DESC'
}

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  email: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
  profileImage?: Maybe<Scalars['String']>,
};

export enum UserRole {
  Normal = 'NORMAL',
  Admin = 'ADMIN'
}

export type UserScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  role_not?: Maybe<UserRole>,
  role_in?: Maybe<Array<UserRole>>,
  role_not_in?: Maybe<Array<UserRole>>,
  profileImage?: Maybe<Scalars['String']>,
  profileImage_not?: Maybe<Scalars['String']>,
  profileImage_in?: Maybe<Array<Scalars['String']>>,
  profileImage_not_in?: Maybe<Array<Scalars['String']>>,
  profileImage_lt?: Maybe<Scalars['String']>,
  profileImage_lte?: Maybe<Scalars['String']>,
  profileImage_gt?: Maybe<Scalars['String']>,
  profileImage_gte?: Maybe<Scalars['String']>,
  profileImage_contains?: Maybe<Scalars['String']>,
  profileImage_not_contains?: Maybe<Scalars['String']>,
  profileImage_starts_with?: Maybe<Scalars['String']>,
  profileImage_not_starts_with?: Maybe<Scalars['String']>,
  profileImage_ends_with?: Maybe<Scalars['String']>,
  profileImage_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
};

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardUpdateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardUpdateManyWithoutMemberInput>,
  createdCards?: Maybe<CardUpdateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardUpdateManyWithoutCreatorInput>,
};

export type UserUpdateManyDataInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
};

export type UserUpdateManyWithoutJoinedBoardsInput = {
  create?: Maybe<Array<UserCreateWithoutJoinedBoardsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutJoinedBoardsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutJoinedBoardsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredWithoutCreatedBoardsInput = {
  create?: Maybe<UserCreateWithoutCreatedBoardsInput>,
  update?: Maybe<UserUpdateWithoutCreatedBoardsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCreatedBoardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutCreatedCardsInput = {
  create?: Maybe<UserCreateWithoutCreatedCardsInput>,
  update?: Maybe<UserUpdateWithoutCreatedCardsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCreatedCardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutCreatedClipboardsInput = {
  create?: Maybe<UserCreateWithoutCreatedClipboardsInput>,
  update?: Maybe<UserUpdateWithoutCreatedClipboardsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCreatedClipboardsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateWithoutCreatedBoardsDataInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
  joinedBoards?: Maybe<BoardUpdateManyWithoutMemberInput>,
  createdCards?: Maybe<CardUpdateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardUpdateManyWithoutCreatorInput>,
};

export type UserUpdateWithoutCreatedCardsDataInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardUpdateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardUpdateManyWithoutMemberInput>,
  createdClipboards?: Maybe<ClipboardUpdateManyWithoutCreatorInput>,
};

export type UserUpdateWithoutCreatedClipboardsDataInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardUpdateManyWithoutCreatorInput>,
  joinedBoards?: Maybe<BoardUpdateManyWithoutMemberInput>,
  createdCards?: Maybe<CardUpdateManyWithoutCreatorInput>,
};

export type UserUpdateWithoutJoinedBoardsDataInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  profileImage?: Maybe<Scalars['String']>,
  createdBoards?: Maybe<BoardUpdateManyWithoutCreatorInput>,
  createdCards?: Maybe<CardUpdateManyWithoutCreatorInput>,
  createdClipboards?: Maybe<ClipboardUpdateManyWithoutCreatorInput>,
};

export type UserUpdateWithWhereUniqueWithoutJoinedBoardsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutJoinedBoardsDataInput,
};

export type UserUpsertWithoutCreatedBoardsInput = {
  update: UserUpdateWithoutCreatedBoardsDataInput,
  create: UserCreateWithoutCreatedBoardsInput,
};

export type UserUpsertWithoutCreatedCardsInput = {
  update: UserUpdateWithoutCreatedCardsDataInput,
  create: UserCreateWithoutCreatedCardsInput,
};

export type UserUpsertWithoutCreatedClipboardsInput = {
  update: UserUpdateWithoutCreatedClipboardsDataInput,
  create: UserCreateWithoutCreatedClipboardsInput,
};

export type UserUpsertWithWhereUniqueWithoutJoinedBoardsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutJoinedBoardsDataInput,
  create: UserCreateWithoutJoinedBoardsInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  role_not?: Maybe<UserRole>,
  role_in?: Maybe<Array<UserRole>>,
  role_not_in?: Maybe<Array<UserRole>>,
  profileImage?: Maybe<Scalars['String']>,
  profileImage_not?: Maybe<Scalars['String']>,
  profileImage_in?: Maybe<Array<Scalars['String']>>,
  profileImage_not_in?: Maybe<Array<Scalars['String']>>,
  profileImage_lt?: Maybe<Scalars['String']>,
  profileImage_lte?: Maybe<Scalars['String']>,
  profileImage_gt?: Maybe<Scalars['String']>,
  profileImage_gte?: Maybe<Scalars['String']>,
  profileImage_contains?: Maybe<Scalars['String']>,
  profileImage_not_contains?: Maybe<Scalars['String']>,
  profileImage_starts_with?: Maybe<Scalars['String']>,
  profileImage_not_starts_with?: Maybe<Scalars['String']>,
  profileImage_ends_with?: Maybe<Scalars['String']>,
  profileImage_not_ends_with?: Maybe<Scalars['String']>,
  createdBoards_every?: Maybe<BoardWhereInput>,
  createdBoards_some?: Maybe<BoardWhereInput>,
  createdBoards_none?: Maybe<BoardWhereInput>,
  joinedBoards_every?: Maybe<BoardWhereInput>,
  joinedBoards_some?: Maybe<BoardWhereInput>,
  joinedBoards_none?: Maybe<BoardWhereInput>,
  createdCards_every?: Maybe<CardWhereInput>,
  createdCards_some?: Maybe<CardWhereInput>,
  createdCards_none?: Maybe<CardWhereInput>,
  createdClipboards_every?: Maybe<ClipboardWhereInput>,
  createdClipboards_some?: Maybe<ClipboardWhereInput>,
  createdClipboards_none?: Maybe<ClipboardWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};
export type CardContentFragment = ({ __typename?: 'Card' } & Pick<Card, 'title' | 'content' | 'slug'> & { files: Maybe<Array<({ __typename?: 'File' } & Pick<File, 'filename'>)>> });

export type GetCardsQueryVariables = {};


export type GetCardsQuery = ({ __typename?: 'Query' } & { getCards: Array<Maybe<({ __typename?: 'Card' } & Pick<Card, 'id' | 'isPublic' | 'archived'> & CardContentFragment)>> });

export type MakeCardMutationVariables = {
  data?: Maybe<CardInput>
};


export type MakeCardMutation = ({ __typename?: 'Mutation' } & { makeCard: ({ __typename?: 'Card' } & Pick<Card, 'id'>) });

export type DeleteClipboardMutationVariables = {
  id: Scalars['ID']
};


export type DeleteClipboardMutation = ({ __typename?: 'Mutation' } & { deleteClipboard: Maybe<({ __typename?: 'Clipboard' } & Pick<Clipboard, 'id'>)> });

export type ClipboardDataFragment = ({ __typename?: 'Clipboard' } & Pick<Clipboard, 'id' | 'content'>);

export type CreateClipboardMutationVariables = {
  data: ClipboardInput
};


export type CreateClipboardMutation = ({ __typename?: 'Mutation' } & { makeClipboard: ({ __typename?: 'Clipboard' } & Pick<Clipboard, 'id' | 'content'>) });

export type GetClipboardsQueryVariables = {};


export type GetClipboardsQuery = ({ __typename?: 'Query' } & { getClipboards: Array<Maybe<({ __typename?: 'Clipboard' } & Pick<Clipboard, 'id' | 'content'>)>> });

export type LoginMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = ({ __typename?: 'Mutation' } & { login: ({ __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & { user: ({ __typename?: 'User' } & Pick<User, 'id'>) }) });
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
export const ClipboardDataFragmentDoc = gql`
    fragment ClipboardData on Clipboard {
  id
  content
}
    `;
export const GetCardsDocument = gql`
    query getCards {
  getCards {
    id
    ...CardContent
    isPublic
    archived
  }
}
    ${CardContentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCardsGQL extends Apollo.Query<GetCardsQuery, GetCardsQueryVariables> {
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
    providedIn: 'root'
  })
  export class MakeCardGQL extends Apollo.Mutation<MakeCardMutation, MakeCardMutationVariables> {
    document = MakeCardDocument;
    
  }
export const DeleteClipboardDocument = gql`
    mutation deleteClipboard($id: ID!) {
  deleteClipboard(where: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteClipboardGQL extends Apollo.Mutation<DeleteClipboardMutation, DeleteClipboardMutationVariables> {
    document = DeleteClipboardDocument;
    
  }
export const CreateClipboardDocument = gql`
    mutation createClipboard($data: ClipboardInput!) {
  makeClipboard(data: $data) {
    id
    content
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateClipboardGQL extends Apollo.Mutation<CreateClipboardMutation, CreateClipboardMutationVariables> {
    document = CreateClipboardDocument;
    
  }
export const GetClipboardsDocument = gql`
    query getClipboards {
  getClipboards {
    id
    content
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClipboardsGQL extends Apollo.Query<GetClipboardsQuery, GetClipboardsQueryVariables> {
    document = GetClipboardsDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(email: $username, password: $password) {
    token
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
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
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": []
      }
    ]
  }
};

      export default result;
    