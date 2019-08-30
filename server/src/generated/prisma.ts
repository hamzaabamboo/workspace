import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    boards: <T = Array<Board | null>>(args: { where?: BoardWhereInput | null, orderBy?: BoardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cards: <T = Array<Card | null>>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clipboards: <T = Array<Clipboard | null>>(args: { where?: ClipboardWhereInput | null, orderBy?: ClipboardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    board: <T = Board | null>(args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    card: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    clipboard: <T = Clipboard | null>(args: { where: ClipboardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    boardsConnection: <T = BoardConnection>(args: { where?: BoardWhereInput | null, orderBy?: BoardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cardsConnection: <T = CardConnection>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clipboardsConnection: <T = ClipboardConnection>(args: { where?: ClipboardWhereInput | null, orderBy?: ClipboardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createBoard: <T = Board>(args: { data: BoardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCard: <T = Card>(args: { data: CardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClipboard: <T = Clipboard>(args: { data: ClipboardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBoard: <T = Board | null>(args: { data: BoardUpdateInput, where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCard: <T = Card | null>(args: { data: CardUpdateInput, where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateClipboard: <T = Clipboard | null>(args: { data: ClipboardUpdateInput, where: ClipboardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBoard: <T = Board | null>(args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCard: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteClipboard: <T = Clipboard | null>(args: { where: ClipboardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBoard: <T = Board>(args: { where: BoardWhereUniqueInput, create: BoardCreateInput, update: BoardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCard: <T = Card>(args: { where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClipboard: <T = Clipboard>(args: { where: ClipboardWhereUniqueInput, create: ClipboardCreateInput, update: ClipboardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBoards: <T = BatchPayload>(args: { data: BoardUpdateManyMutationInput, where?: BoardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCards: <T = BatchPayload>(args: { data: CardUpdateManyMutationInput, where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClipboards: <T = BatchPayload>(args: { data: ClipboardUpdateManyMutationInput, where?: ClipboardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBoards: <T = BatchPayload>(args: { where?: BoardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCards: <T = BatchPayload>(args: { where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClipboards: <T = BatchPayload>(args: { where?: ClipboardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    board: <T = BoardSubscriptionPayload | null>(args: { where?: BoardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    card: <T = CardSubscriptionPayload | null>(args: { where?: CardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    clipboard: <T = ClipboardSubscriptionPayload | null>(args: { where?: ClipboardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Board: (where?: BoardWhereInput) => Promise<boolean>
  Card: (where?: CardWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Clipboard: (where?: ClipboardWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBoard {
  count: Int!
}

type AggregateCard {
  count: Int!
}

type AggregateClipboard {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Board implements Node {
  id: ID!
  title: String!
  slug: String!
  creator: User!
  member(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  isPublic: Boolean!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
}

"""A connection to a list of items."""
type BoardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  id: ID
  title: String!
  slug: String!
  isPublic: Boolean
  creator: UserCreateOneWithoutCreatedBoardsInput!
  member: UserCreateManyWithoutJoinedBoardsInput
  cards: CardCreateManyWithoutParentInput
}

input BoardCreateManyWithoutCreatorInput {
  create: [BoardCreateWithoutCreatorInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateManyWithoutMemberInput {
  create: [BoardCreateWithoutMemberInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateOneWithoutCardsInput {
  create: BoardCreateWithoutCardsInput
  connect: BoardWhereUniqueInput
}

input BoardCreateWithoutCardsInput {
  id: ID
  title: String!
  slug: String!
  isPublic: Boolean
  creator: UserCreateOneWithoutCreatedBoardsInput!
  member: UserCreateManyWithoutJoinedBoardsInput
}

input BoardCreateWithoutCreatorInput {
  id: ID
  title: String!
  slug: String!
  isPublic: Boolean
  member: UserCreateManyWithoutJoinedBoardsInput
  cards: CardCreateManyWithoutParentInput
}

input BoardCreateWithoutMemberInput {
  id: ID
  title: String!
  slug: String!
  isPublic: Boolean
  creator: UserCreateOneWithoutCreatedBoardsInput!
  cards: CardCreateManyWithoutParentInput
}

"""An edge in a connection."""
type BoardEdge {
  """The item at the end of the edge."""
  node: Board!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BoardOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  slug_ASC
  slug_DESC
  isPublic_ASC
  isPublic_DESC
}

type BoardPreviousValues {
  id: ID!
  title: String!
  slug: String!
  isPublic: Boolean!
}

input BoardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
}

input BoardUpdateInput {
  title: String
  slug: String
  isPublic: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedBoardsInput
  member: UserUpdateManyWithoutJoinedBoardsInput
  cards: CardUpdateManyWithoutParentInput
}

input BoardUpdateManyDataInput {
  title: String
  slug: String
  isPublic: Boolean
}

input BoardUpdateManyMutationInput {
  title: String
  slug: String
  isPublic: Boolean
}

input BoardUpdateManyWithoutCreatorInput {
  create: [BoardCreateWithoutCreatorInput!]
  connect: [BoardWhereUniqueInput!]
  set: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  delete: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutCreatorInput!]
  updateMany: [BoardUpdateManyWithWhereNestedInput!]
  deleteMany: [BoardScalarWhereInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutCreatorInput!]
}

input BoardUpdateManyWithoutMemberInput {
  create: [BoardCreateWithoutMemberInput!]
  connect: [BoardWhereUniqueInput!]
  set: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  delete: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutMemberInput!]
  updateMany: [BoardUpdateManyWithWhereNestedInput!]
  deleteMany: [BoardScalarWhereInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutMemberInput!]
}

input BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput!
  data: BoardUpdateManyDataInput!
}

input BoardUpdateOneWithoutCardsInput {
  create: BoardCreateWithoutCardsInput
  connect: BoardWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BoardUpdateWithoutCardsDataInput
  upsert: BoardUpsertWithoutCardsInput
}

input BoardUpdateWithoutCardsDataInput {
  title: String
  slug: String
  isPublic: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedBoardsInput
  member: UserUpdateManyWithoutJoinedBoardsInput
}

input BoardUpdateWithoutCreatorDataInput {
  title: String
  slug: String
  isPublic: Boolean
  member: UserUpdateManyWithoutJoinedBoardsInput
  cards: CardUpdateManyWithoutParentInput
}

input BoardUpdateWithoutMemberDataInput {
  title: String
  slug: String
  isPublic: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedBoardsInput
  cards: CardUpdateManyWithoutParentInput
}

input BoardUpdateWithWhereUniqueWithoutCreatorInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutCreatorDataInput!
}

input BoardUpdateWithWhereUniqueWithoutMemberInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutMemberDataInput!
}

input BoardUpsertWithoutCardsInput {
  update: BoardUpdateWithoutCardsDataInput!
  create: BoardCreateWithoutCardsInput!
}

input BoardUpsertWithWhereUniqueWithoutCreatorInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutCreatorDataInput!
  create: BoardCreateWithoutCreatorInput!
}

input BoardUpsertWithWhereUniqueWithoutMemberInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutMemberDataInput!
  create: BoardCreateWithoutMemberInput!
}

input BoardWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  creator: UserWhereInput
  member_every: UserWhereInput
  member_some: UserWhereInput
  member_none: UserWhereInput
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
}

input BoardWhereUniqueInput {
  id: ID
}

type Card implements Node {
  id: ID!
  creator: User!
  parent: Board
  title: String!
  slug: String!
  content: String
  isPublic: Boolean!
  archived: Boolean!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  id: ID
  title: String!
  slug: String!
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserCreateOneWithoutCreatedCardsInput!
  parent: BoardCreateOneWithoutCardsInput
  files: FileCreateManyWithoutCardInput
}

input CardCreateManyWithoutCreatorInput {
  create: [CardCreateWithoutCreatorInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateManyWithoutParentInput {
  create: [CardCreateWithoutParentInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateOneWithoutFilesInput {
  create: CardCreateWithoutFilesInput
  connect: CardWhereUniqueInput
}

input CardCreateWithoutCreatorInput {
  id: ID
  title: String!
  slug: String!
  content: String
  isPublic: Boolean
  archived: Boolean
  parent: BoardCreateOneWithoutCardsInput
  files: FileCreateManyWithoutCardInput
}

input CardCreateWithoutFilesInput {
  id: ID
  title: String!
  slug: String!
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserCreateOneWithoutCreatedCardsInput!
  parent: BoardCreateOneWithoutCardsInput
}

input CardCreateWithoutParentInput {
  id: ID
  title: String!
  slug: String!
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserCreateOneWithoutCreatedCardsInput!
  files: FileCreateManyWithoutCardInput
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  slug_ASC
  slug_DESC
  content_ASC
  content_DESC
  isPublic_ASC
  isPublic_DESC
  archived_ASC
  archived_DESC
}

type CardPreviousValues {
  id: ID!
  title: String!
  slug: String!
  content: String
  isPublic: Boolean!
  archived: Boolean!
}

input CardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

input CardUpdateInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedCardsInput
  parent: BoardUpdateOneWithoutCardsInput
  files: FileUpdateManyWithoutCardInput
}

input CardUpdateManyDataInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
}

input CardUpdateManyMutationInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
}

input CardUpdateManyWithoutCreatorInput {
  create: [CardCreateWithoutCreatorInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutCreatorInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutCreatorInput!]
}

input CardUpdateManyWithoutParentInput {
  create: [CardCreateWithoutParentInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutParentInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutParentInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateOneRequiredWithoutFilesInput {
  create: CardCreateWithoutFilesInput
  connect: CardWhereUniqueInput
  update: CardUpdateWithoutFilesDataInput
  upsert: CardUpsertWithoutFilesInput
}

input CardUpdateWithoutCreatorDataInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
  parent: BoardUpdateOneWithoutCardsInput
  files: FileUpdateManyWithoutCardInput
}

input CardUpdateWithoutFilesDataInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedCardsInput
  parent: BoardUpdateOneWithoutCardsInput
}

input CardUpdateWithoutParentDataInput {
  title: String
  slug: String
  content: String
  isPublic: Boolean
  archived: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedCardsInput
  files: FileUpdateManyWithoutCardInput
}

input CardUpdateWithWhereUniqueWithoutCreatorInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutCreatorDataInput!
}

input CardUpdateWithWhereUniqueWithoutParentInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutParentDataInput!
}

input CardUpsertWithoutFilesInput {
  update: CardUpdateWithoutFilesDataInput!
  create: CardCreateWithoutFilesInput!
}

input CardUpsertWithWhereUniqueWithoutCreatorInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutCreatorDataInput!
  create: CardCreateWithoutCreatorInput!
}

input CardUpsertWithWhereUniqueWithoutParentInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutParentDataInput!
  create: CardCreateWithoutParentInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  creator: UserWhereInput
  parent: BoardWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
}

input CardWhereUniqueInput {
  id: ID
  slug: String
}

type Clipboard implements Node {
  id: ID!
  creator: User!
  content: String!
  archived: Boolean!
}

"""A connection to a list of items."""
type ClipboardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClipboardEdge]!
  aggregate: AggregateClipboard!
}

input ClipboardCreateInput {
  id: ID
  content: String!
  archived: Boolean
  creator: UserCreateOneWithoutCreatedClipboardsInput!
}

input ClipboardCreateManyWithoutCreatorInput {
  create: [ClipboardCreateWithoutCreatorInput!]
  connect: [ClipboardWhereUniqueInput!]
}

input ClipboardCreateWithoutCreatorInput {
  id: ID
  content: String!
  archived: Boolean
}

"""An edge in a connection."""
type ClipboardEdge {
  """The item at the end of the edge."""
  node: Clipboard!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClipboardOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  archived_ASC
  archived_DESC
}

type ClipboardPreviousValues {
  id: ID!
  content: String!
  archived: Boolean!
}

input ClipboardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ClipboardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClipboardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClipboardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
}

type ClipboardSubscriptionPayload {
  mutation: MutationType!
  node: Clipboard
  updatedFields: [String!]
  previousValues: ClipboardPreviousValues
}

input ClipboardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClipboardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClipboardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClipboardSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClipboardWhereInput
}

input ClipboardUpdateInput {
  content: String
  archived: Boolean
  creator: UserUpdateOneRequiredWithoutCreatedClipboardsInput
}

input ClipboardUpdateManyDataInput {
  content: String
  archived: Boolean
}

input ClipboardUpdateManyMutationInput {
  content: String
  archived: Boolean
}

input ClipboardUpdateManyWithoutCreatorInput {
  create: [ClipboardCreateWithoutCreatorInput!]
  connect: [ClipboardWhereUniqueInput!]
  set: [ClipboardWhereUniqueInput!]
  disconnect: [ClipboardWhereUniqueInput!]
  delete: [ClipboardWhereUniqueInput!]
  update: [ClipboardUpdateWithWhereUniqueWithoutCreatorInput!]
  updateMany: [ClipboardUpdateManyWithWhereNestedInput!]
  deleteMany: [ClipboardScalarWhereInput!]
  upsert: [ClipboardUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ClipboardUpdateManyWithWhereNestedInput {
  where: ClipboardScalarWhereInput!
  data: ClipboardUpdateManyDataInput!
}

input ClipboardUpdateWithoutCreatorDataInput {
  content: String
  archived: Boolean
}

input ClipboardUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClipboardWhereUniqueInput!
  data: ClipboardUpdateWithoutCreatorDataInput!
}

input ClipboardUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClipboardWhereUniqueInput!
  update: ClipboardUpdateWithoutCreatorDataInput!
  create: ClipboardCreateWithoutCreatorInput!
}

input ClipboardWhereInput {
  """Logical AND on all given filters."""
  AND: [ClipboardWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClipboardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClipboardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  creator: UserWhereInput
}

input ClipboardWhereUniqueInput {
  id: ID
}

type File implements Node {
  id: ID!
  card: Card!
  type: FileType
  filename: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  type: FileType
  filename: String!
  card: CardCreateOneWithoutFilesInput!
}

input FileCreateManyWithoutCardInput {
  create: [FileCreateWithoutCardInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateWithoutCardInput {
  id: ID
  type: FileType
  filename: String!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  filename_ASC
  filename_DESC
}

type FilePreviousValues {
  id: ID!
  type: FileType
  filename: String!
}

input FileScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [FileScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: FileType

  """All values that are not equal to given value."""
  type_not: FileType

  """All values that are contained in given list."""
  type_in: [FileType!]

  """All values that are not contained in given list."""
  type_not_in: [FileType!]
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

enum FileType {
  IMAGE
  DOCUMENT
  OTHER
}

input FileUpdateInput {
  type: FileType
  filename: String
  card: CardUpdateOneRequiredWithoutFilesInput
}

input FileUpdateManyDataInput {
  type: FileType
  filename: String
}

input FileUpdateManyMutationInput {
  type: FileType
  filename: String
}

input FileUpdateManyWithoutCardInput {
  create: [FileCreateWithoutCardInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutCardInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
  deleteMany: [FileScalarWhereInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutCardInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateWithoutCardDataInput {
  type: FileType
  filename: String
}

input FileUpdateWithWhereUniqueWithoutCardInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutCardDataInput!
}

input FileUpsertWithWhereUniqueWithoutCardInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutCardDataInput!
  create: FileCreateWithoutCardInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: FileType

  """All values that are not equal to given value."""
  type_not: FileType

  """All values that are contained in given list."""
  type_in: [FileType!]

  """All values that are not contained in given list."""
  type_not_in: [FileType!]
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  card: CardWhereInput
}

input FileWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBoard(data: BoardCreateInput!): Board!
  createCard(data: CardCreateInput!): Card!
  createFile(data: FileCreateInput!): File!
  createClipboard(data: ClipboardCreateInput!): Clipboard!
  createUser(data: UserCreateInput!): User!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateClipboard(data: ClipboardUpdateInput!, where: ClipboardWhereUniqueInput!): Clipboard
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteFile(where: FileWhereUniqueInput!): File
  deleteClipboard(where: ClipboardWhereUniqueInput!): Clipboard
  deleteUser(where: UserWhereUniqueInput!): User
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertClipboard(where: ClipboardWhereUniqueInput!, create: ClipboardCreateInput!, update: ClipboardUpdateInput!): Clipboard!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyBoards(data: BoardUpdateManyMutationInput!, where: BoardWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyClipboards(data: ClipboardUpdateManyMutationInput!, where: ClipboardWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyClipboards(where: ClipboardWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  clipboards(where: ClipboardWhereInput, orderBy: ClipboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Clipboard]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  board(where: BoardWhereUniqueInput!): Board
  card(where: CardWhereUniqueInput!): Card
  file(where: FileWhereUniqueInput!): File
  clipboard(where: ClipboardWhereUniqueInput!): Clipboard
  user(where: UserWhereUniqueInput!): User
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  clipboardsConnection(where: ClipboardWhereInput, orderBy: ClipboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClipboardConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  clipboard(where: ClipboardSubscriptionWhereInput): ClipboardSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  createdBoards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
  joinedBoards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
  createdCards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  createdClipboards(where: ClipboardWhereInput, orderBy: ClipboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Clipboard!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  createdBoards: BoardCreateManyWithoutCreatorInput
  joinedBoards: BoardCreateManyWithoutMemberInput
  createdCards: CardCreateManyWithoutCreatorInput
  createdClipboards: ClipboardCreateManyWithoutCreatorInput
}

input UserCreateManyWithoutJoinedBoardsInput {
  create: [UserCreateWithoutJoinedBoardsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCreatedBoardsInput {
  create: UserCreateWithoutCreatedBoardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedCardsInput {
  create: UserCreateWithoutCreatedCardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedClipboardsInput {
  create: UserCreateWithoutCreatedClipboardsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCreatedBoardsInput {
  id: ID
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  joinedBoards: BoardCreateManyWithoutMemberInput
  createdCards: CardCreateManyWithoutCreatorInput
  createdClipboards: ClipboardCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedCardsInput {
  id: ID
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  createdBoards: BoardCreateManyWithoutCreatorInput
  joinedBoards: BoardCreateManyWithoutMemberInput
  createdClipboards: ClipboardCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedClipboardsInput {
  id: ID
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  createdBoards: BoardCreateManyWithoutCreatorInput
  joinedBoards: BoardCreateManyWithoutMemberInput
  createdCards: CardCreateManyWithoutCreatorInput
}

input UserCreateWithoutJoinedBoardsInput {
  id: ID
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
  createdBoards: BoardCreateManyWithoutCreatorInput
  createdCards: CardCreateManyWithoutCreatorInput
  createdClipboards: ClipboardCreateManyWithoutCreatorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  profileImage_ASC
  profileImage_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  role: UserRole!
  profileImage: String
}

enum UserRole {
  NORMAL
  ADMIN
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
  profileImage: String

  """All values that are not equal to given value."""
  profileImage_not: String

  """All values that are contained in given list."""
  profileImage_in: [String!]

  """All values that are not contained in given list."""
  profileImage_not_in: [String!]

  """All values less than the given value."""
  profileImage_lt: String

  """All values less than or equal the given value."""
  profileImage_lte: String

  """All values greater than the given value."""
  profileImage_gt: String

  """All values greater than or equal the given value."""
  profileImage_gte: String

  """All values containing the given string."""
  profileImage_contains: String

  """All values not containing the given string."""
  profileImage_not_contains: String

  """All values starting with the given string."""
  profileImage_starts_with: String

  """All values not starting with the given string."""
  profileImage_not_starts_with: String

  """All values ending with the given string."""
  profileImage_ends_with: String

  """All values not ending with the given string."""
  profileImage_not_ends_with: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
  createdBoards: BoardUpdateManyWithoutCreatorInput
  joinedBoards: BoardUpdateManyWithoutMemberInput
  createdCards: CardUpdateManyWithoutCreatorInput
  createdClipboards: ClipboardUpdateManyWithoutCreatorInput
}

input UserUpdateManyDataInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
}

input UserUpdateManyWithoutJoinedBoardsInput {
  create: [UserCreateWithoutJoinedBoardsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutJoinedBoardsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutJoinedBoardsInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCreatedBoardsInput {
  create: UserCreateWithoutCreatedBoardsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCreatedBoardsDataInput
  upsert: UserUpsertWithoutCreatedBoardsInput
}

input UserUpdateOneRequiredWithoutCreatedCardsInput {
  create: UserCreateWithoutCreatedCardsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCreatedCardsDataInput
  upsert: UserUpsertWithoutCreatedCardsInput
}

input UserUpdateOneRequiredWithoutCreatedClipboardsInput {
  create: UserCreateWithoutCreatedClipboardsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCreatedClipboardsDataInput
  upsert: UserUpsertWithoutCreatedClipboardsInput
}

input UserUpdateWithoutCreatedBoardsDataInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
  joinedBoards: BoardUpdateManyWithoutMemberInput
  createdCards: CardUpdateManyWithoutCreatorInput
  createdClipboards: ClipboardUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedCardsDataInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
  createdBoards: BoardUpdateManyWithoutCreatorInput
  joinedBoards: BoardUpdateManyWithoutMemberInput
  createdClipboards: ClipboardUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedClipboardsDataInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
  createdBoards: BoardUpdateManyWithoutCreatorInput
  joinedBoards: BoardUpdateManyWithoutMemberInput
  createdCards: CardUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutJoinedBoardsDataInput {
  email: String
  password: String
  role: UserRole
  profileImage: String
  createdBoards: BoardUpdateManyWithoutCreatorInput
  createdCards: CardUpdateManyWithoutCreatorInput
  createdClipboards: ClipboardUpdateManyWithoutCreatorInput
}

input UserUpdateWithWhereUniqueWithoutJoinedBoardsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutJoinedBoardsDataInput!
}

input UserUpsertWithoutCreatedBoardsInput {
  update: UserUpdateWithoutCreatedBoardsDataInput!
  create: UserCreateWithoutCreatedBoardsInput!
}

input UserUpsertWithoutCreatedCardsInput {
  update: UserUpdateWithoutCreatedCardsDataInput!
  create: UserCreateWithoutCreatedCardsInput!
}

input UserUpsertWithoutCreatedClipboardsInput {
  update: UserUpdateWithoutCreatedClipboardsDataInput!
  create: UserCreateWithoutCreatedClipboardsInput!
}

input UserUpsertWithWhereUniqueWithoutJoinedBoardsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutJoinedBoardsDataInput!
  create: UserCreateWithoutJoinedBoardsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
  profileImage: String

  """All values that are not equal to given value."""
  profileImage_not: String

  """All values that are contained in given list."""
  profileImage_in: [String!]

  """All values that are not contained in given list."""
  profileImage_not_in: [String!]

  """All values less than the given value."""
  profileImage_lt: String

  """All values less than or equal the given value."""
  profileImage_lte: String

  """All values greater than the given value."""
  profileImage_gt: String

  """All values greater than or equal the given value."""
  profileImage_gte: String

  """All values containing the given string."""
  profileImage_contains: String

  """All values not containing the given string."""
  profileImage_not_contains: String

  """All values starting with the given string."""
  profileImage_starts_with: String

  """All values not starting with the given string."""
  profileImage_not_starts_with: String

  """All values ending with the given string."""
  profileImage_ends_with: String

  """All values not ending with the given string."""
  profileImage_not_ends_with: String
  createdBoards_every: BoardWhereInput
  createdBoards_some: BoardWhereInput
  createdBoards_none: BoardWhereInput
  joinedBoards_every: BoardWhereInput
  joinedBoards_some: BoardWhereInput
  joinedBoards_none: BoardWhereInput
  createdCards_every: CardWhereInput
  createdCards_some: CardWhereInput
  createdCards_none: CardWhereInput
  createdClipboards_every: ClipboardWhereInput
  createdClipboards_some: ClipboardWhereInput
  createdClipboards_none: ClipboardWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BoardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'isPublic_ASC' |
  'isPublic_DESC'

export type CardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'content_ASC' |
  'content_DESC' |
  'isPublic_ASC' |
  'isPublic_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type ClipboardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'content_ASC' |
  'content_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'filename_ASC' |
  'filename_DESC'

export type FileType =   'IMAGE' |
  'DOCUMENT' |
  'OTHER'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC' |
  'profileImage_ASC' |
  'profileImage_DESC'

export type UserRole =   'NORMAL' |
  'ADMIN'

export interface BoardCreateInput {
  id?: ID_Input | null
  title: String
  slug: String
  isPublic?: Boolean | null
  creator: UserCreateOneWithoutCreatedBoardsInput
  member?: UserCreateManyWithoutJoinedBoardsInput | null
  cards?: CardCreateManyWithoutParentInput | null
}

export interface BoardCreateManyWithoutCreatorInput {
  create?: BoardCreateWithoutCreatorInput[] | BoardCreateWithoutCreatorInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
}

export interface BoardCreateManyWithoutMemberInput {
  create?: BoardCreateWithoutMemberInput[] | BoardCreateWithoutMemberInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
}

export interface BoardCreateOneWithoutCardsInput {
  create?: BoardCreateWithoutCardsInput | null
  connect?: BoardWhereUniqueInput | null
}

export interface BoardCreateWithoutCardsInput {
  id?: ID_Input | null
  title: String
  slug: String
  isPublic?: Boolean | null
  creator: UserCreateOneWithoutCreatedBoardsInput
  member?: UserCreateManyWithoutJoinedBoardsInput | null
}

export interface BoardCreateWithoutCreatorInput {
  id?: ID_Input | null
  title: String
  slug: String
  isPublic?: Boolean | null
  member?: UserCreateManyWithoutJoinedBoardsInput | null
  cards?: CardCreateManyWithoutParentInput | null
}

export interface BoardCreateWithoutMemberInput {
  id?: ID_Input | null
  title: String
  slug: String
  isPublic?: Boolean | null
  creator: UserCreateOneWithoutCreatedBoardsInput
  cards?: CardCreateManyWithoutParentInput | null
}

export interface BoardScalarWhereInput {
  AND?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  OR?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  NOT?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
}

export interface BoardSubscriptionWhereInput {
  AND?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  OR?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  NOT?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BoardWhereInput | null
}

export interface BoardUpdateInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput | null
  member?: UserUpdateManyWithoutJoinedBoardsInput | null
  cards?: CardUpdateManyWithoutParentInput | null
}

export interface BoardUpdateManyDataInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
}

export interface BoardUpdateManyMutationInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
}

export interface BoardUpdateManyWithoutCreatorInput {
  create?: BoardCreateWithoutCreatorInput[] | BoardCreateWithoutCreatorInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  set?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  disconnect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  delete?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  update?: BoardUpdateWithWhereUniqueWithoutCreatorInput[] | BoardUpdateWithWhereUniqueWithoutCreatorInput | null
  updateMany?: BoardUpdateManyWithWhereNestedInput[] | BoardUpdateManyWithWhereNestedInput | null
  deleteMany?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  upsert?: BoardUpsertWithWhereUniqueWithoutCreatorInput[] | BoardUpsertWithWhereUniqueWithoutCreatorInput | null
}

export interface BoardUpdateManyWithoutMemberInput {
  create?: BoardCreateWithoutMemberInput[] | BoardCreateWithoutMemberInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  set?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  disconnect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  delete?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  update?: BoardUpdateWithWhereUniqueWithoutMemberInput[] | BoardUpdateWithWhereUniqueWithoutMemberInput | null
  updateMany?: BoardUpdateManyWithWhereNestedInput[] | BoardUpdateManyWithWhereNestedInput | null
  deleteMany?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  upsert?: BoardUpsertWithWhereUniqueWithoutMemberInput[] | BoardUpsertWithWhereUniqueWithoutMemberInput | null
}

export interface BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput
  data: BoardUpdateManyDataInput
}

export interface BoardUpdateOneWithoutCardsInput {
  create?: BoardCreateWithoutCardsInput | null
  connect?: BoardWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: BoardUpdateWithoutCardsDataInput | null
  upsert?: BoardUpsertWithoutCardsInput | null
}

export interface BoardUpdateWithoutCardsDataInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput | null
  member?: UserUpdateManyWithoutJoinedBoardsInput | null
}

export interface BoardUpdateWithoutCreatorDataInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
  member?: UserUpdateManyWithoutJoinedBoardsInput | null
  cards?: CardUpdateManyWithoutParentInput | null
}

export interface BoardUpdateWithoutMemberDataInput {
  title?: String | null
  slug?: String | null
  isPublic?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput | null
  cards?: CardUpdateManyWithoutParentInput | null
}

export interface BoardUpdateWithWhereUniqueWithoutCreatorInput {
  where: BoardWhereUniqueInput
  data: BoardUpdateWithoutCreatorDataInput
}

export interface BoardUpdateWithWhereUniqueWithoutMemberInput {
  where: BoardWhereUniqueInput
  data: BoardUpdateWithoutMemberDataInput
}

export interface BoardUpsertWithoutCardsInput {
  update: BoardUpdateWithoutCardsDataInput
  create: BoardCreateWithoutCardsInput
}

export interface BoardUpsertWithWhereUniqueWithoutCreatorInput {
  where: BoardWhereUniqueInput
  update: BoardUpdateWithoutCreatorDataInput
  create: BoardCreateWithoutCreatorInput
}

export interface BoardUpsertWithWhereUniqueWithoutMemberInput {
  where: BoardWhereUniqueInput
  update: BoardUpdateWithoutMemberDataInput
  create: BoardCreateWithoutMemberInput
}

export interface BoardWhereInput {
  AND?: BoardWhereInput[] | BoardWhereInput | null
  OR?: BoardWhereInput[] | BoardWhereInput | null
  NOT?: BoardWhereInput[] | BoardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  creator?: UserWhereInput | null
  member_every?: UserWhereInput | null
  member_some?: UserWhereInput | null
  member_none?: UserWhereInput | null
  cards_every?: CardWhereInput | null
  cards_some?: CardWhereInput | null
  cards_none?: CardWhereInput | null
}

export interface BoardWhereUniqueInput {
  id?: ID_Input | null
}

export interface CardCreateInput {
  id?: ID_Input | null
  title: String
  slug: String
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator: UserCreateOneWithoutCreatedCardsInput
  parent?: BoardCreateOneWithoutCardsInput | null
  files?: FileCreateManyWithoutCardInput | null
}

export interface CardCreateManyWithoutCreatorInput {
  create?: CardCreateWithoutCreatorInput[] | CardCreateWithoutCreatorInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
}

export interface CardCreateManyWithoutParentInput {
  create?: CardCreateWithoutParentInput[] | CardCreateWithoutParentInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
}

export interface CardCreateOneWithoutFilesInput {
  create?: CardCreateWithoutFilesInput | null
  connect?: CardWhereUniqueInput | null
}

export interface CardCreateWithoutCreatorInput {
  id?: ID_Input | null
  title: String
  slug: String
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  parent?: BoardCreateOneWithoutCardsInput | null
  files?: FileCreateManyWithoutCardInput | null
}

export interface CardCreateWithoutFilesInput {
  id?: ID_Input | null
  title: String
  slug: String
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator: UserCreateOneWithoutCreatedCardsInput
  parent?: BoardCreateOneWithoutCardsInput | null
}

export interface CardCreateWithoutParentInput {
  id?: ID_Input | null
  title: String
  slug: String
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator: UserCreateOneWithoutCreatedCardsInput
  files?: FileCreateManyWithoutCardInput | null
}

export interface CardScalarWhereInput {
  AND?: CardScalarWhereInput[] | CardScalarWhereInput | null
  OR?: CardScalarWhereInput[] | CardScalarWhereInput | null
  NOT?: CardScalarWhereInput[] | CardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  archived?: Boolean | null
  archived_not?: Boolean | null
}

export interface CardSubscriptionWhereInput {
  AND?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  OR?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  NOT?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CardWhereInput | null
}

export interface CardUpdateInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedCardsInput | null
  parent?: BoardUpdateOneWithoutCardsInput | null
  files?: FileUpdateManyWithoutCardInput | null
}

export interface CardUpdateManyDataInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
}

export interface CardUpdateManyMutationInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
}

export interface CardUpdateManyWithoutCreatorInput {
  create?: CardCreateWithoutCreatorInput[] | CardCreateWithoutCreatorInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  set?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  update?: CardUpdateWithWhereUniqueWithoutCreatorInput[] | CardUpdateWithWhereUniqueWithoutCreatorInput | null
  updateMany?: CardUpdateManyWithWhereNestedInput[] | CardUpdateManyWithWhereNestedInput | null
  deleteMany?: CardScalarWhereInput[] | CardScalarWhereInput | null
  upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput[] | CardUpsertWithWhereUniqueWithoutCreatorInput | null
}

export interface CardUpdateManyWithoutParentInput {
  create?: CardCreateWithoutParentInput[] | CardCreateWithoutParentInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  set?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  update?: CardUpdateWithWhereUniqueWithoutParentInput[] | CardUpdateWithWhereUniqueWithoutParentInput | null
  updateMany?: CardUpdateManyWithWhereNestedInput[] | CardUpdateManyWithWhereNestedInput | null
  deleteMany?: CardScalarWhereInput[] | CardScalarWhereInput | null
  upsert?: CardUpsertWithWhereUniqueWithoutParentInput[] | CardUpsertWithWhereUniqueWithoutParentInput | null
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput
  data: CardUpdateManyDataInput
}

export interface CardUpdateOneRequiredWithoutFilesInput {
  create?: CardCreateWithoutFilesInput | null
  connect?: CardWhereUniqueInput | null
  update?: CardUpdateWithoutFilesDataInput | null
  upsert?: CardUpsertWithoutFilesInput | null
}

export interface CardUpdateWithoutCreatorDataInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  parent?: BoardUpdateOneWithoutCardsInput | null
  files?: FileUpdateManyWithoutCardInput | null
}

export interface CardUpdateWithoutFilesDataInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedCardsInput | null
  parent?: BoardUpdateOneWithoutCardsInput | null
}

export interface CardUpdateWithoutParentDataInput {
  title?: String | null
  slug?: String | null
  content?: String | null
  isPublic?: Boolean | null
  archived?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedCardsInput | null
  files?: FileUpdateManyWithoutCardInput | null
}

export interface CardUpdateWithWhereUniqueWithoutCreatorInput {
  where: CardWhereUniqueInput
  data: CardUpdateWithoutCreatorDataInput
}

export interface CardUpdateWithWhereUniqueWithoutParentInput {
  where: CardWhereUniqueInput
  data: CardUpdateWithoutParentDataInput
}

export interface CardUpsertWithoutFilesInput {
  update: CardUpdateWithoutFilesDataInput
  create: CardCreateWithoutFilesInput
}

export interface CardUpsertWithWhereUniqueWithoutCreatorInput {
  where: CardWhereUniqueInput
  update: CardUpdateWithoutCreatorDataInput
  create: CardCreateWithoutCreatorInput
}

export interface CardUpsertWithWhereUniqueWithoutParentInput {
  where: CardWhereUniqueInput
  update: CardUpdateWithoutParentDataInput
  create: CardCreateWithoutParentInput
}

export interface CardWhereInput {
  AND?: CardWhereInput[] | CardWhereInput | null
  OR?: CardWhereInput[] | CardWhereInput | null
  NOT?: CardWhereInput[] | CardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  archived?: Boolean | null
  archived_not?: Boolean | null
  creator?: UserWhereInput | null
  parent?: BoardWhereInput | null
  files_every?: FileWhereInput | null
  files_some?: FileWhereInput | null
  files_none?: FileWhereInput | null
}

export interface CardWhereUniqueInput {
  id?: ID_Input | null
  slug?: String | null
}

export interface ClipboardCreateInput {
  id?: ID_Input | null
  content: String
  archived?: Boolean | null
  creator: UserCreateOneWithoutCreatedClipboardsInput
}

export interface ClipboardCreateManyWithoutCreatorInput {
  create?: ClipboardCreateWithoutCreatorInput[] | ClipboardCreateWithoutCreatorInput | null
  connect?: ClipboardWhereUniqueInput[] | ClipboardWhereUniqueInput | null
}

export interface ClipboardCreateWithoutCreatorInput {
  id?: ID_Input | null
  content: String
  archived?: Boolean | null
}

export interface ClipboardScalarWhereInput {
  AND?: ClipboardScalarWhereInput[] | ClipboardScalarWhereInput | null
  OR?: ClipboardScalarWhereInput[] | ClipboardScalarWhereInput | null
  NOT?: ClipboardScalarWhereInput[] | ClipboardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  archived?: Boolean | null
  archived_not?: Boolean | null
}

export interface ClipboardSubscriptionWhereInput {
  AND?: ClipboardSubscriptionWhereInput[] | ClipboardSubscriptionWhereInput | null
  OR?: ClipboardSubscriptionWhereInput[] | ClipboardSubscriptionWhereInput | null
  NOT?: ClipboardSubscriptionWhereInput[] | ClipboardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ClipboardWhereInput | null
}

export interface ClipboardUpdateInput {
  content?: String | null
  archived?: Boolean | null
  creator?: UserUpdateOneRequiredWithoutCreatedClipboardsInput | null
}

export interface ClipboardUpdateManyDataInput {
  content?: String | null
  archived?: Boolean | null
}

export interface ClipboardUpdateManyMutationInput {
  content?: String | null
  archived?: Boolean | null
}

export interface ClipboardUpdateManyWithoutCreatorInput {
  create?: ClipboardCreateWithoutCreatorInput[] | ClipboardCreateWithoutCreatorInput | null
  connect?: ClipboardWhereUniqueInput[] | ClipboardWhereUniqueInput | null
  set?: ClipboardWhereUniqueInput[] | ClipboardWhereUniqueInput | null
  disconnect?: ClipboardWhereUniqueInput[] | ClipboardWhereUniqueInput | null
  delete?: ClipboardWhereUniqueInput[] | ClipboardWhereUniqueInput | null
  update?: ClipboardUpdateWithWhereUniqueWithoutCreatorInput[] | ClipboardUpdateWithWhereUniqueWithoutCreatorInput | null
  updateMany?: ClipboardUpdateManyWithWhereNestedInput[] | ClipboardUpdateManyWithWhereNestedInput | null
  deleteMany?: ClipboardScalarWhereInput[] | ClipboardScalarWhereInput | null
  upsert?: ClipboardUpsertWithWhereUniqueWithoutCreatorInput[] | ClipboardUpsertWithWhereUniqueWithoutCreatorInput | null
}

export interface ClipboardUpdateManyWithWhereNestedInput {
  where: ClipboardScalarWhereInput
  data: ClipboardUpdateManyDataInput
}

export interface ClipboardUpdateWithoutCreatorDataInput {
  content?: String | null
  archived?: Boolean | null
}

export interface ClipboardUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClipboardWhereUniqueInput
  data: ClipboardUpdateWithoutCreatorDataInput
}

export interface ClipboardUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClipboardWhereUniqueInput
  update: ClipboardUpdateWithoutCreatorDataInput
  create: ClipboardCreateWithoutCreatorInput
}

export interface ClipboardWhereInput {
  AND?: ClipboardWhereInput[] | ClipboardWhereInput | null
  OR?: ClipboardWhereInput[] | ClipboardWhereInput | null
  NOT?: ClipboardWhereInput[] | ClipboardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  archived?: Boolean | null
  archived_not?: Boolean | null
  creator?: UserWhereInput | null
}

export interface ClipboardWhereUniqueInput {
  id?: ID_Input | null
}

export interface FileCreateInput {
  id?: ID_Input | null
  type?: FileType | null
  filename: String
  card: CardCreateOneWithoutFilesInput
}

export interface FileCreateManyWithoutCardInput {
  create?: FileCreateWithoutCardInput[] | FileCreateWithoutCardInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
}

export interface FileCreateWithoutCardInput {
  id?: ID_Input | null
  type?: FileType | null
  filename: String
}

export interface FileScalarWhereInput {
  AND?: FileScalarWhereInput[] | FileScalarWhereInput | null
  OR?: FileScalarWhereInput[] | FileScalarWhereInput | null
  NOT?: FileScalarWhereInput[] | FileScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  type?: FileType | null
  type_not?: FileType | null
  type_in?: FileType[] | FileType | null
  type_not_in?: FileType[] | FileType | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | String | null
  filename_not_in?: String[] | String | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
}

export interface FileUpdateInput {
  type?: FileType | null
  filename?: String | null
  card?: CardUpdateOneRequiredWithoutFilesInput | null
}

export interface FileUpdateManyDataInput {
  type?: FileType | null
  filename?: String | null
}

export interface FileUpdateManyMutationInput {
  type?: FileType | null
  filename?: String | null
}

export interface FileUpdateManyWithoutCardInput {
  create?: FileCreateWithoutCardInput[] | FileCreateWithoutCardInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  set?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  update?: FileUpdateWithWhereUniqueWithoutCardInput[] | FileUpdateWithWhereUniqueWithoutCardInput | null
  updateMany?: FileUpdateManyWithWhereNestedInput[] | FileUpdateManyWithWhereNestedInput | null
  deleteMany?: FileScalarWhereInput[] | FileScalarWhereInput | null
  upsert?: FileUpsertWithWhereUniqueWithoutCardInput[] | FileUpsertWithWhereUniqueWithoutCardInput | null
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileUpdateWithoutCardDataInput {
  type?: FileType | null
  filename?: String | null
}

export interface FileUpdateWithWhereUniqueWithoutCardInput {
  where: FileWhereUniqueInput
  data: FileUpdateWithoutCardDataInput
}

export interface FileUpsertWithWhereUniqueWithoutCardInput {
  where: FileWhereUniqueInput
  update: FileUpdateWithoutCardDataInput
  create: FileCreateWithoutCardInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  type?: FileType | null
  type_not?: FileType | null
  type_in?: FileType[] | FileType | null
  type_not_in?: FileType[] | FileType | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | String | null
  filename_not_in?: String[] | String | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
  card?: CardWhereInput | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  createdBoards?: BoardCreateManyWithoutCreatorInput | null
  joinedBoards?: BoardCreateManyWithoutMemberInput | null
  createdCards?: CardCreateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardCreateManyWithoutCreatorInput | null
}

export interface UserCreateManyWithoutJoinedBoardsInput {
  create?: UserCreateWithoutJoinedBoardsInput[] | UserCreateWithoutJoinedBoardsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCreatedBoardsInput {
  create?: UserCreateWithoutCreatedBoardsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCreatedCardsInput {
  create?: UserCreateWithoutCreatedCardsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCreatedClipboardsInput {
  create?: UserCreateWithoutCreatedClipboardsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCreatedBoardsInput {
  id?: ID_Input | null
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  joinedBoards?: BoardCreateManyWithoutMemberInput | null
  createdCards?: CardCreateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardCreateManyWithoutCreatorInput | null
}

export interface UserCreateWithoutCreatedCardsInput {
  id?: ID_Input | null
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  createdBoards?: BoardCreateManyWithoutCreatorInput | null
  joinedBoards?: BoardCreateManyWithoutMemberInput | null
  createdClipboards?: ClipboardCreateManyWithoutCreatorInput | null
}

export interface UserCreateWithoutCreatedClipboardsInput {
  id?: ID_Input | null
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  createdBoards?: BoardCreateManyWithoutCreatorInput | null
  joinedBoards?: BoardCreateManyWithoutMemberInput | null
  createdCards?: CardCreateManyWithoutCreatorInput | null
}

export interface UserCreateWithoutJoinedBoardsInput {
  id?: ID_Input | null
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  createdBoards?: BoardCreateManyWithoutCreatorInput | null
  createdCards?: CardCreateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardCreateManyWithoutCreatorInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: UserRole | null
  role_not?: UserRole | null
  role_in?: UserRole[] | UserRole | null
  role_not_in?: UserRole[] | UserRole | null
  profileImage?: String | null
  profileImage_not?: String | null
  profileImage_in?: String[] | String | null
  profileImage_not_in?: String[] | String | null
  profileImage_lt?: String | null
  profileImage_lte?: String | null
  profileImage_gt?: String | null
  profileImage_gte?: String | null
  profileImage_contains?: String | null
  profileImage_not_contains?: String | null
  profileImage_starts_with?: String | null
  profileImage_not_starts_with?: String | null
  profileImage_ends_with?: String | null
  profileImage_not_ends_with?: String | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
  createdBoards?: BoardUpdateManyWithoutCreatorInput | null
  joinedBoards?: BoardUpdateManyWithoutMemberInput | null
  createdCards?: CardUpdateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardUpdateManyWithoutCreatorInput | null
}

export interface UserUpdateManyDataInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
}

export interface UserUpdateManyWithoutJoinedBoardsInput {
  create?: UserCreateWithoutJoinedBoardsInput[] | UserCreateWithoutJoinedBoardsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutJoinedBoardsInput[] | UserUpdateWithWhereUniqueWithoutJoinedBoardsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutJoinedBoardsInput[] | UserUpsertWithWhereUniqueWithoutJoinedBoardsInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredWithoutCreatedBoardsInput {
  create?: UserCreateWithoutCreatedBoardsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCreatedBoardsDataInput | null
  upsert?: UserUpsertWithoutCreatedBoardsInput | null
}

export interface UserUpdateOneRequiredWithoutCreatedCardsInput {
  create?: UserCreateWithoutCreatedCardsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCreatedCardsDataInput | null
  upsert?: UserUpsertWithoutCreatedCardsInput | null
}

export interface UserUpdateOneRequiredWithoutCreatedClipboardsInput {
  create?: UserCreateWithoutCreatedClipboardsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCreatedClipboardsDataInput | null
  upsert?: UserUpsertWithoutCreatedClipboardsInput | null
}

export interface UserUpdateWithoutCreatedBoardsDataInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
  joinedBoards?: BoardUpdateManyWithoutMemberInput | null
  createdCards?: CardUpdateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardUpdateManyWithoutCreatorInput | null
}

export interface UserUpdateWithoutCreatedCardsDataInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
  createdBoards?: BoardUpdateManyWithoutCreatorInput | null
  joinedBoards?: BoardUpdateManyWithoutMemberInput | null
  createdClipboards?: ClipboardUpdateManyWithoutCreatorInput | null
}

export interface UserUpdateWithoutCreatedClipboardsDataInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
  createdBoards?: BoardUpdateManyWithoutCreatorInput | null
  joinedBoards?: BoardUpdateManyWithoutMemberInput | null
  createdCards?: CardUpdateManyWithoutCreatorInput | null
}

export interface UserUpdateWithoutJoinedBoardsDataInput {
  email?: String | null
  password?: String | null
  role?: UserRole | null
  profileImage?: String | null
  createdBoards?: BoardUpdateManyWithoutCreatorInput | null
  createdCards?: CardUpdateManyWithoutCreatorInput | null
  createdClipboards?: ClipboardUpdateManyWithoutCreatorInput | null
}

export interface UserUpdateWithWhereUniqueWithoutJoinedBoardsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutJoinedBoardsDataInput
}

export interface UserUpsertWithoutCreatedBoardsInput {
  update: UserUpdateWithoutCreatedBoardsDataInput
  create: UserCreateWithoutCreatedBoardsInput
}

export interface UserUpsertWithoutCreatedCardsInput {
  update: UserUpdateWithoutCreatedCardsDataInput
  create: UserCreateWithoutCreatedCardsInput
}

export interface UserUpsertWithoutCreatedClipboardsInput {
  update: UserUpdateWithoutCreatedClipboardsDataInput
  create: UserCreateWithoutCreatedClipboardsInput
}

export interface UserUpsertWithWhereUniqueWithoutJoinedBoardsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutJoinedBoardsDataInput
  create: UserCreateWithoutJoinedBoardsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: UserRole | null
  role_not?: UserRole | null
  role_in?: UserRole[] | UserRole | null
  role_not_in?: UserRole[] | UserRole | null
  profileImage?: String | null
  profileImage_not?: String | null
  profileImage_in?: String[] | String | null
  profileImage_not_in?: String[] | String | null
  profileImage_lt?: String | null
  profileImage_lte?: String | null
  profileImage_gt?: String | null
  profileImage_gte?: String | null
  profileImage_contains?: String | null
  profileImage_not_contains?: String | null
  profileImage_starts_with?: String | null
  profileImage_not_starts_with?: String | null
  profileImage_ends_with?: String | null
  profileImage_not_ends_with?: String | null
  createdBoards_every?: BoardWhereInput | null
  createdBoards_some?: BoardWhereInput | null
  createdBoards_none?: BoardWhereInput | null
  joinedBoards_every?: BoardWhereInput | null
  joinedBoards_some?: BoardWhereInput | null
  joinedBoards_none?: BoardWhereInput | null
  createdCards_every?: CardWhereInput | null
  createdCards_some?: CardWhereInput | null
  createdCards_none?: CardWhereInput | null
  createdClipboards_every?: ClipboardWhereInput | null
  createdClipboards_some?: ClipboardWhereInput | null
  createdClipboards_none?: ClipboardWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateBoard {
  count: Int
}

export interface AggregateCard {
  count: Int
}

export interface AggregateClipboard {
  count: Int
}

export interface AggregateFile {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Board extends Node {
  id: ID_Output
  title: String
  slug: String
  creator: User
  member?: Array<User> | null
  isPublic: Boolean
  cards?: Array<Card> | null
}

/*
 * A connection to a list of items.

 */
export interface BoardConnection {
  pageInfo: PageInfo
  edges: Array<BoardEdge | null>
  aggregate: AggregateBoard
}

/*
 * An edge in a connection.

 */
export interface BoardEdge {
  node: Board
  cursor: String
}

export interface BoardPreviousValues {
  id: ID_Output
  title: String
  slug: String
  isPublic: Boolean
}

export interface BoardSubscriptionPayload {
  mutation: MutationType
  node?: Board | null
  updatedFields?: Array<String> | null
  previousValues?: BoardPreviousValues | null
}

export interface Card extends Node {
  id: ID_Output
  creator: User
  parent?: Board | null
  title: String
  slug: String
  content?: String | null
  isPublic: Boolean
  archived: Boolean
  files?: Array<File> | null
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo
  edges: Array<CardEdge | null>
  aggregate: AggregateCard
}

/*
 * An edge in a connection.

 */
export interface CardEdge {
  node: Card
  cursor: String
}

export interface CardPreviousValues {
  id: ID_Output
  title: String
  slug: String
  content?: String | null
  isPublic: Boolean
  archived: Boolean
}

export interface CardSubscriptionPayload {
  mutation: MutationType
  node?: Card | null
  updatedFields?: Array<String> | null
  previousValues?: CardPreviousValues | null
}

export interface Clipboard extends Node {
  id: ID_Output
  creator: User
  content: String
  archived: Boolean
}

/*
 * A connection to a list of items.

 */
export interface ClipboardConnection {
  pageInfo: PageInfo
  edges: Array<ClipboardEdge | null>
  aggregate: AggregateClipboard
}

/*
 * An edge in a connection.

 */
export interface ClipboardEdge {
  node: Clipboard
  cursor: String
}

export interface ClipboardPreviousValues {
  id: ID_Output
  content: String
  archived: Boolean
}

export interface ClipboardSubscriptionPayload {
  mutation: MutationType
  node?: Clipboard | null
  updatedFields?: Array<String> | null
  previousValues?: ClipboardPreviousValues | null
}

export interface File extends Node {
  id: ID_Output
  card: Card
  type?: FileType | null
  filename: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: Array<FileEdge | null>
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  type?: FileType | null
  filename: String
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
  createdBoards?: Array<Board> | null
  joinedBoards?: Array<Board> | null
  createdCards?: Array<Card> | null
  createdClipboards?: Array<Clipboard> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  role: UserRole
  profileImage?: String | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string