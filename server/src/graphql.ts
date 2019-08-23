
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum BoardOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    slug_ASC = "slug_ASC",
    slug_DESC = "slug_DESC",
    isPublic_ASC = "isPublic_ASC",
    isPublic_DESC = "isPublic_DESC"
}

export enum CardOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    slug_ASC = "slug_ASC",
    slug_DESC = "slug_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC",
    public_ASC = "public_ASC",
    public_DESC = "public_DESC",
    archived_ASC = "archived_ASC",
    archived_DESC = "archived_DESC"
}

export enum ClipboardOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC",
    archived_ASC = "archived_ASC",
    archived_DESC = "archived_DESC"
}

export enum FileOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC",
    filename_ASC = "filename_ASC",
    filename_DESC = "filename_DESC"
}

export enum FileType {
    IMAGE = "IMAGE",
    DOCUMENT = "DOCUMENT",
    OTHER = "OTHER"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC",
    profileImage_ASC = "profileImage_ASC",
    profileImage_DESC = "profileImage_DESC"
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface BoardCreateInput {
    id?: string;
    title: string;
    slug: string;
    creator: UserCreateOneWithoutCreatedBoardsInput;
    member?: UserCreateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
    cards?: CardCreateManyWithoutParentInput;
}

export interface BoardCreateManyWithoutCreatorInput {
    create?: BoardCreateWithoutCreatorInput[];
    connect?: BoardWhereUniqueInput[];
}

export interface BoardCreateManyWithoutMemberInput {
    create?: BoardCreateWithoutMemberInput[];
    connect?: BoardWhereUniqueInput[];
}

export interface BoardCreateOneWithoutCardsInput {
    create?: BoardCreateWithoutCardsInput;
    connect?: BoardWhereUniqueInput;
}

export interface BoardCreateWithoutCardsInput {
    id?: string;
    title: string;
    slug: string;
    creator: UserCreateOneWithoutCreatedBoardsInput;
    member?: UserCreateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
}

export interface BoardCreateWithoutCreatorInput {
    id?: string;
    title: string;
    slug: string;
    member?: UserCreateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
    cards?: CardCreateManyWithoutParentInput;
}

export interface BoardCreateWithoutMemberInput {
    id?: string;
    title: string;
    slug: string;
    creator: UserCreateOneWithoutCreatedBoardsInput;
    isPublic?: boolean;
    cards?: CardCreateManyWithoutParentInput;
}

export interface BoardInput {
    title: string;
    isPublic: boolean;
}

export interface BoardScalarWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    slug?: string;
    slug_not?: string;
    slug_in?: string[];
    slug_not_in?: string[];
    slug_lt?: string;
    slug_lte?: string;
    slug_gt?: string;
    slug_gte?: string;
    slug_contains?: string;
    slug_not_contains?: string;
    slug_starts_with?: string;
    slug_not_starts_with?: string;
    slug_ends_with?: string;
    slug_not_ends_with?: string;
    isPublic?: boolean;
    isPublic_not?: boolean;
    AND?: BoardScalarWhereInput[];
    OR?: BoardScalarWhereInput[];
    NOT?: BoardScalarWhereInput[];
}

export interface BoardSubscriptionWhereInput {
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: BoardWhereInput;
    AND?: BoardSubscriptionWhereInput[];
    OR?: BoardSubscriptionWhereInput[];
    NOT?: BoardSubscriptionWhereInput[];
}

export interface BoardUpdateInput {
    title?: string;
    slug?: string;
    creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput;
    member?: UserUpdateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
    cards?: CardUpdateManyWithoutParentInput;
}

export interface BoardUpdateManyDataInput {
    title?: string;
    slug?: string;
    isPublic?: boolean;
}

export interface BoardUpdateManyMutationInput {
    title?: string;
    slug?: string;
    isPublic?: boolean;
}

export interface BoardUpdateManyWithoutCreatorInput {
    create?: BoardCreateWithoutCreatorInput[];
    delete?: BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput[];
    set?: BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput[];
    update?: BoardUpdateWithWhereUniqueWithoutCreatorInput[];
    upsert?: BoardUpsertWithWhereUniqueWithoutCreatorInput[];
    deleteMany?: BoardScalarWhereInput[];
    updateMany?: BoardUpdateManyWithWhereNestedInput[];
}

export interface BoardUpdateManyWithoutMemberInput {
    create?: BoardCreateWithoutMemberInput[];
    delete?: BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput[];
    set?: BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput[];
    update?: BoardUpdateWithWhereUniqueWithoutMemberInput[];
    upsert?: BoardUpsertWithWhereUniqueWithoutMemberInput[];
    deleteMany?: BoardScalarWhereInput[];
    updateMany?: BoardUpdateManyWithWhereNestedInput[];
}

export interface BoardUpdateManyWithWhereNestedInput {
    where: BoardScalarWhereInput;
    data: BoardUpdateManyDataInput;
}

export interface BoardUpdateOneWithoutCardsInput {
    create?: BoardCreateWithoutCardsInput;
    update?: BoardUpdateWithoutCardsDataInput;
    upsert?: BoardUpsertWithoutCardsInput;
    delete?: boolean;
    disconnect?: boolean;
    connect?: BoardWhereUniqueInput;
}

export interface BoardUpdateWithoutCardsDataInput {
    title?: string;
    slug?: string;
    creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput;
    member?: UserUpdateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
}

export interface BoardUpdateWithoutCreatorDataInput {
    title?: string;
    slug?: string;
    member?: UserUpdateManyWithoutJoinedBoardsInput;
    isPublic?: boolean;
    cards?: CardUpdateManyWithoutParentInput;
}

export interface BoardUpdateWithoutMemberDataInput {
    title?: string;
    slug?: string;
    creator?: UserUpdateOneRequiredWithoutCreatedBoardsInput;
    isPublic?: boolean;
    cards?: CardUpdateManyWithoutParentInput;
}

export interface BoardUpdateWithWhereUniqueWithoutCreatorInput {
    where: BoardWhereUniqueInput;
    data: BoardUpdateWithoutCreatorDataInput;
}

export interface BoardUpdateWithWhereUniqueWithoutMemberInput {
    where: BoardWhereUniqueInput;
    data: BoardUpdateWithoutMemberDataInput;
}

export interface BoardUpsertWithoutCardsInput {
    update: BoardUpdateWithoutCardsDataInput;
    create: BoardCreateWithoutCardsInput;
}

export interface BoardUpsertWithWhereUniqueWithoutCreatorInput {
    where: BoardWhereUniqueInput;
    update: BoardUpdateWithoutCreatorDataInput;
    create: BoardCreateWithoutCreatorInput;
}

export interface BoardUpsertWithWhereUniqueWithoutMemberInput {
    where: BoardWhereUniqueInput;
    update: BoardUpdateWithoutMemberDataInput;
    create: BoardCreateWithoutMemberInput;
}

export interface BoardWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    slug?: string;
    slug_not?: string;
    slug_in?: string[];
    slug_not_in?: string[];
    slug_lt?: string;
    slug_lte?: string;
    slug_gt?: string;
    slug_gte?: string;
    slug_contains?: string;
    slug_not_contains?: string;
    slug_starts_with?: string;
    slug_not_starts_with?: string;
    slug_ends_with?: string;
    slug_not_ends_with?: string;
    creator?: UserWhereInput;
    member_every?: UserWhereInput;
    member_some?: UserWhereInput;
    member_none?: UserWhereInput;
    isPublic?: boolean;
    isPublic_not?: boolean;
    cards_every?: CardWhereInput;
    cards_some?: CardWhereInput;
    cards_none?: CardWhereInput;
    AND?: BoardWhereInput[];
    OR?: BoardWhereInput[];
    NOT?: BoardWhereInput[];
}

export interface BoardWhereUniqueInput {
    id?: string;
}

export interface CardCreateInput {
    id?: string;
    creator: UserCreateOneWithoutCreatedCardsInput;
    parent?: BoardCreateOneWithoutCardsInput;
    title: string;
    slug: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileCreateManyWithoutCardInput;
}

export interface CardCreateManyWithoutCreatorInput {
    create?: CardCreateWithoutCreatorInput[];
    connect?: CardWhereUniqueInput[];
}

export interface CardCreateManyWithoutParentInput {
    create?: CardCreateWithoutParentInput[];
    connect?: CardWhereUniqueInput[];
}

export interface CardCreateOneWithoutFilesInput {
    create?: CardCreateWithoutFilesInput;
    connect?: CardWhereUniqueInput;
}

export interface CardCreateWithoutCreatorInput {
    id?: string;
    parent?: BoardCreateOneWithoutCardsInput;
    title: string;
    slug: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileCreateManyWithoutCardInput;
}

export interface CardCreateWithoutFilesInput {
    id?: string;
    creator: UserCreateOneWithoutCreatedCardsInput;
    parent?: BoardCreateOneWithoutCardsInput;
    title: string;
    slug: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
}

export interface CardCreateWithoutParentInput {
    id?: string;
    creator: UserCreateOneWithoutCreatedCardsInput;
    title: string;
    slug: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileCreateManyWithoutCardInput;
}

export interface CardInput {
    title: string;
    content?: string;
    files?: Upload[];
}

export interface CardScalarWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    slug?: string;
    slug_not?: string;
    slug_in?: string[];
    slug_not_in?: string[];
    slug_lt?: string;
    slug_lte?: string;
    slug_gt?: string;
    slug_gte?: string;
    slug_contains?: string;
    slug_not_contains?: string;
    slug_starts_with?: string;
    slug_not_starts_with?: string;
    slug_ends_with?: string;
    slug_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    public?: boolean;
    public_not?: boolean;
    archived?: boolean;
    archived_not?: boolean;
    AND?: CardScalarWhereInput[];
    OR?: CardScalarWhereInput[];
    NOT?: CardScalarWhereInput[];
}

export interface CardSubscriptionWhereInput {
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: CardWhereInput;
    AND?: CardSubscriptionWhereInput[];
    OR?: CardSubscriptionWhereInput[];
    NOT?: CardSubscriptionWhereInput[];
}

export interface CardUpdateInput {
    creator?: UserUpdateOneRequiredWithoutCreatedCardsInput;
    parent?: BoardUpdateOneWithoutCardsInput;
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileUpdateManyWithoutCardInput;
}

export interface CardUpdateManyDataInput {
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
}

export interface CardUpdateManyMutationInput {
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
}

export interface CardUpdateManyWithoutCreatorInput {
    create?: CardCreateWithoutCreatorInput[];
    delete?: CardWhereUniqueInput[];
    connect?: CardWhereUniqueInput[];
    set?: CardWhereUniqueInput[];
    disconnect?: CardWhereUniqueInput[];
    update?: CardUpdateWithWhereUniqueWithoutCreatorInput[];
    upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput[];
    deleteMany?: CardScalarWhereInput[];
    updateMany?: CardUpdateManyWithWhereNestedInput[];
}

export interface CardUpdateManyWithoutParentInput {
    create?: CardCreateWithoutParentInput[];
    delete?: CardWhereUniqueInput[];
    connect?: CardWhereUniqueInput[];
    set?: CardWhereUniqueInput[];
    disconnect?: CardWhereUniqueInput[];
    update?: CardUpdateWithWhereUniqueWithoutParentInput[];
    upsert?: CardUpsertWithWhereUniqueWithoutParentInput[];
    deleteMany?: CardScalarWhereInput[];
    updateMany?: CardUpdateManyWithWhereNestedInput[];
}

export interface CardUpdateManyWithWhereNestedInput {
    where: CardScalarWhereInput;
    data: CardUpdateManyDataInput;
}

export interface CardUpdateOneRequiredWithoutFilesInput {
    create?: CardCreateWithoutFilesInput;
    update?: CardUpdateWithoutFilesDataInput;
    upsert?: CardUpsertWithoutFilesInput;
    connect?: CardWhereUniqueInput;
}

export interface CardUpdateWithoutCreatorDataInput {
    parent?: BoardUpdateOneWithoutCardsInput;
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileUpdateManyWithoutCardInput;
}

export interface CardUpdateWithoutFilesDataInput {
    creator?: UserUpdateOneRequiredWithoutCreatedCardsInput;
    parent?: BoardUpdateOneWithoutCardsInput;
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
}

export interface CardUpdateWithoutParentDataInput {
    creator?: UserUpdateOneRequiredWithoutCreatedCardsInput;
    title?: string;
    slug?: string;
    content?: string;
    public?: boolean;
    archived?: boolean;
    files?: FileUpdateManyWithoutCardInput;
}

export interface CardUpdateWithWhereUniqueWithoutCreatorInput {
    where: CardWhereUniqueInput;
    data: CardUpdateWithoutCreatorDataInput;
}

export interface CardUpdateWithWhereUniqueWithoutParentInput {
    where: CardWhereUniqueInput;
    data: CardUpdateWithoutParentDataInput;
}

export interface CardUpsertWithoutFilesInput {
    update: CardUpdateWithoutFilesDataInput;
    create: CardCreateWithoutFilesInput;
}

export interface CardUpsertWithWhereUniqueWithoutCreatorInput {
    where: CardWhereUniqueInput;
    update: CardUpdateWithoutCreatorDataInput;
    create: CardCreateWithoutCreatorInput;
}

export interface CardUpsertWithWhereUniqueWithoutParentInput {
    where: CardWhereUniqueInput;
    update: CardUpdateWithoutParentDataInput;
    create: CardCreateWithoutParentInput;
}

export interface CardWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    creator?: UserWhereInput;
    parent?: BoardWhereInput;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    slug?: string;
    slug_not?: string;
    slug_in?: string[];
    slug_not_in?: string[];
    slug_lt?: string;
    slug_lte?: string;
    slug_gt?: string;
    slug_gte?: string;
    slug_contains?: string;
    slug_not_contains?: string;
    slug_starts_with?: string;
    slug_not_starts_with?: string;
    slug_ends_with?: string;
    slug_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    public?: boolean;
    public_not?: boolean;
    archived?: boolean;
    archived_not?: boolean;
    files_every?: FileWhereInput;
    files_some?: FileWhereInput;
    files_none?: FileWhereInput;
    AND?: CardWhereInput[];
    OR?: CardWhereInput[];
    NOT?: CardWhereInput[];
}

export interface CardWhereUniqueInput {
    id?: string;
    slug?: string;
}

export interface ClipboardCreateInput {
    id?: string;
    creator: UserCreateOneWithoutCreatedClipboardsInput;
    content: string;
    archived?: boolean;
}

export interface ClipboardCreateManyWithoutCreatorInput {
    create?: ClipboardCreateWithoutCreatorInput[];
    connect?: ClipboardWhereUniqueInput[];
}

export interface ClipboardCreateWithoutCreatorInput {
    id?: string;
    content: string;
    archived?: boolean;
}

export interface ClipboardInput {
    content: string;
}

export interface ClipboardScalarWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    archived?: boolean;
    archived_not?: boolean;
    AND?: ClipboardScalarWhereInput[];
    OR?: ClipboardScalarWhereInput[];
    NOT?: ClipboardScalarWhereInput[];
}

export interface ClipboardSubscriptionWhereInput {
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: ClipboardWhereInput;
    AND?: ClipboardSubscriptionWhereInput[];
    OR?: ClipboardSubscriptionWhereInput[];
    NOT?: ClipboardSubscriptionWhereInput[];
}

export interface ClipboardUpdateInput {
    creator?: UserUpdateOneRequiredWithoutCreatedClipboardsInput;
    content?: string;
    archived?: boolean;
}

export interface ClipboardUpdateManyDataInput {
    content?: string;
    archived?: boolean;
}

export interface ClipboardUpdateManyMutationInput {
    content?: string;
    archived?: boolean;
}

export interface ClipboardUpdateManyWithoutCreatorInput {
    create?: ClipboardCreateWithoutCreatorInput[];
    delete?: ClipboardWhereUniqueInput[];
    connect?: ClipboardWhereUniqueInput[];
    set?: ClipboardWhereUniqueInput[];
    disconnect?: ClipboardWhereUniqueInput[];
    update?: ClipboardUpdateWithWhereUniqueWithoutCreatorInput[];
    upsert?: ClipboardUpsertWithWhereUniqueWithoutCreatorInput[];
    deleteMany?: ClipboardScalarWhereInput[];
    updateMany?: ClipboardUpdateManyWithWhereNestedInput[];
}

export interface ClipboardUpdateManyWithWhereNestedInput {
    where: ClipboardScalarWhereInput;
    data: ClipboardUpdateManyDataInput;
}

export interface ClipboardUpdateWithoutCreatorDataInput {
    content?: string;
    archived?: boolean;
}

export interface ClipboardUpdateWithWhereUniqueWithoutCreatorInput {
    where: ClipboardWhereUniqueInput;
    data: ClipboardUpdateWithoutCreatorDataInput;
}

export interface ClipboardUpsertWithWhereUniqueWithoutCreatorInput {
    where: ClipboardWhereUniqueInput;
    update: ClipboardUpdateWithoutCreatorDataInput;
    create: ClipboardCreateWithoutCreatorInput;
}

export interface ClipboardWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    creator?: UserWhereInput;
    content?: string;
    content_not?: string;
    content_in?: string[];
    content_not_in?: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    archived?: boolean;
    archived_not?: boolean;
    AND?: ClipboardWhereInput[];
    OR?: ClipboardWhereInput[];
    NOT?: ClipboardWhereInput[];
}

export interface ClipboardWhereUniqueInput {
    id?: string;
}

export interface FileCreateInput {
    id?: string;
    card: CardCreateOneWithoutFilesInput;
    type?: FileType;
    filename: string;
}

export interface FileCreateManyWithoutCardInput {
    create?: FileCreateWithoutCardInput[];
    connect?: FileWhereUniqueInput[];
}

export interface FileCreateWithoutCardInput {
    id?: string;
    type?: FileType;
    filename: string;
}

export interface FileScalarWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    type?: FileType;
    type_not?: FileType;
    type_in?: FileType[];
    type_not_in?: FileType[];
    filename?: string;
    filename_not?: string;
    filename_in?: string[];
    filename_not_in?: string[];
    filename_lt?: string;
    filename_lte?: string;
    filename_gt?: string;
    filename_gte?: string;
    filename_contains?: string;
    filename_not_contains?: string;
    filename_starts_with?: string;
    filename_not_starts_with?: string;
    filename_ends_with?: string;
    filename_not_ends_with?: string;
    AND?: FileScalarWhereInput[];
    OR?: FileScalarWhereInput[];
    NOT?: FileScalarWhereInput[];
}

export interface FileSubscriptionWhereInput {
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: FileWhereInput;
    AND?: FileSubscriptionWhereInput[];
    OR?: FileSubscriptionWhereInput[];
    NOT?: FileSubscriptionWhereInput[];
}

export interface FileUpdateInput {
    card?: CardUpdateOneRequiredWithoutFilesInput;
    type?: FileType;
    filename?: string;
}

export interface FileUpdateManyDataInput {
    type?: FileType;
    filename?: string;
}

export interface FileUpdateManyMutationInput {
    type?: FileType;
    filename?: string;
}

export interface FileUpdateManyWithoutCardInput {
    create?: FileCreateWithoutCardInput[];
    delete?: FileWhereUniqueInput[];
    connect?: FileWhereUniqueInput[];
    set?: FileWhereUniqueInput[];
    disconnect?: FileWhereUniqueInput[];
    update?: FileUpdateWithWhereUniqueWithoutCardInput[];
    upsert?: FileUpsertWithWhereUniqueWithoutCardInput[];
    deleteMany?: FileScalarWhereInput[];
    updateMany?: FileUpdateManyWithWhereNestedInput[];
}

export interface FileUpdateManyWithWhereNestedInput {
    where: FileScalarWhereInput;
    data: FileUpdateManyDataInput;
}

export interface FileUpdateWithoutCardDataInput {
    type?: FileType;
    filename?: string;
}

export interface FileUpdateWithWhereUniqueWithoutCardInput {
    where: FileWhereUniqueInput;
    data: FileUpdateWithoutCardDataInput;
}

export interface FileUpsertWithWhereUniqueWithoutCardInput {
    where: FileWhereUniqueInput;
    update: FileUpdateWithoutCardDataInput;
    create: FileCreateWithoutCardInput;
}

export interface FileWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    card?: CardWhereInput;
    type?: FileType;
    type_not?: FileType;
    type_in?: FileType[];
    type_not_in?: FileType[];
    filename?: string;
    filename_not?: string;
    filename_in?: string[];
    filename_not_in?: string[];
    filename_lt?: string;
    filename_lte?: string;
    filename_gt?: string;
    filename_gte?: string;
    filename_contains?: string;
    filename_not_contains?: string;
    filename_starts_with?: string;
    filename_not_starts_with?: string;
    filename_ends_with?: string;
    filename_not_ends_with?: string;
    AND?: FileWhereInput[];
    OR?: FileWhereInput[];
    NOT?: FileWhereInput[];
}

export interface FileWhereUniqueInput {
    id?: string;
}

export interface UserCreateInput {
    id?: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    createdBoards?: BoardCreateManyWithoutCreatorInput;
    joinedBoards?: BoardCreateManyWithoutMemberInput;
    createdCards?: CardCreateManyWithoutCreatorInput;
    createdClipboards?: ClipboardCreateManyWithoutCreatorInput;
}

export interface UserCreateManyWithoutJoinedBoardsInput {
    create?: UserCreateWithoutJoinedBoardsInput[];
    connect?: UserWhereUniqueInput[];
}

export interface UserCreateOneWithoutCreatedBoardsInput {
    create?: UserCreateWithoutCreatedBoardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserCreateOneWithoutCreatedCardsInput {
    create?: UserCreateWithoutCreatedCardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserCreateOneWithoutCreatedClipboardsInput {
    create?: UserCreateWithoutCreatedClipboardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutCreatedBoardsInput {
    id?: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    joinedBoards?: BoardCreateManyWithoutMemberInput;
    createdCards?: CardCreateManyWithoutCreatorInput;
    createdClipboards?: ClipboardCreateManyWithoutCreatorInput;
}

export interface UserCreateWithoutCreatedCardsInput {
    id?: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    createdBoards?: BoardCreateManyWithoutCreatorInput;
    joinedBoards?: BoardCreateManyWithoutMemberInput;
    createdClipboards?: ClipboardCreateManyWithoutCreatorInput;
}

export interface UserCreateWithoutCreatedClipboardsInput {
    id?: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    createdBoards?: BoardCreateManyWithoutCreatorInput;
    joinedBoards?: BoardCreateManyWithoutMemberInput;
    createdCards?: CardCreateManyWithoutCreatorInput;
}

export interface UserCreateWithoutJoinedBoardsInput {
    id?: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    createdBoards?: BoardCreateManyWithoutCreatorInput;
    createdCards?: CardCreateManyWithoutCreatorInput;
    createdClipboards?: ClipboardCreateManyWithoutCreatorInput;
}

export interface UserScalarWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[];
    role_not_in?: UserRole[];
    profileImage?: string;
    profileImage_not?: string;
    profileImage_in?: string[];
    profileImage_not_in?: string[];
    profileImage_lt?: string;
    profileImage_lte?: string;
    profileImage_gt?: string;
    profileImage_gte?: string;
    profileImage_contains?: string;
    profileImage_not_contains?: string;
    profileImage_starts_with?: string;
    profileImage_not_starts_with?: string;
    profileImage_ends_with?: string;
    profileImage_not_ends_with?: string;
    AND?: UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput[];
}

export interface UserSubscriptionWhereInput {
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
}

export interface UserUpdateInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    createdBoards?: BoardUpdateManyWithoutCreatorInput;
    joinedBoards?: BoardUpdateManyWithoutMemberInput;
    createdCards?: CardUpdateManyWithoutCreatorInput;
    createdClipboards?: ClipboardUpdateManyWithoutCreatorInput;
}

export interface UserUpdateManyDataInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
}

export interface UserUpdateManyMutationInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
}

export interface UserUpdateManyWithoutJoinedBoardsInput {
    create?: UserCreateWithoutJoinedBoardsInput[];
    delete?: UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput[];
    set?: UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput[];
    update?: UserUpdateWithWhereUniqueWithoutJoinedBoardsInput[];
    upsert?: UserUpsertWithWhereUniqueWithoutJoinedBoardsInput[];
    deleteMany?: UserScalarWhereInput[];
    updateMany?: UserUpdateManyWithWhereNestedInput[];
}

export interface UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}

export interface UserUpdateOneRequiredWithoutCreatedBoardsInput {
    create?: UserCreateWithoutCreatedBoardsInput;
    update?: UserUpdateWithoutCreatedBoardsDataInput;
    upsert?: UserUpsertWithoutCreatedBoardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutCreatedCardsInput {
    create?: UserCreateWithoutCreatedCardsInput;
    update?: UserUpdateWithoutCreatedCardsDataInput;
    upsert?: UserUpsertWithoutCreatedCardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutCreatedClipboardsInput {
    create?: UserCreateWithoutCreatedClipboardsInput;
    update?: UserUpdateWithoutCreatedClipboardsDataInput;
    upsert?: UserUpsertWithoutCreatedClipboardsInput;
    connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutCreatedBoardsDataInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    joinedBoards?: BoardUpdateManyWithoutMemberInput;
    createdCards?: CardUpdateManyWithoutCreatorInput;
    createdClipboards?: ClipboardUpdateManyWithoutCreatorInput;
}

export interface UserUpdateWithoutCreatedCardsDataInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    createdBoards?: BoardUpdateManyWithoutCreatorInput;
    joinedBoards?: BoardUpdateManyWithoutMemberInput;
    createdClipboards?: ClipboardUpdateManyWithoutCreatorInput;
}

export interface UserUpdateWithoutCreatedClipboardsDataInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    createdBoards?: BoardUpdateManyWithoutCreatorInput;
    joinedBoards?: BoardUpdateManyWithoutMemberInput;
    createdCards?: CardUpdateManyWithoutCreatorInput;
}

export interface UserUpdateWithoutJoinedBoardsDataInput {
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    createdBoards?: BoardUpdateManyWithoutCreatorInput;
    createdCards?: CardUpdateManyWithoutCreatorInput;
    createdClipboards?: ClipboardUpdateManyWithoutCreatorInput;
}

export interface UserUpdateWithWhereUniqueWithoutJoinedBoardsInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutJoinedBoardsDataInput;
}

export interface UserUpsertWithoutCreatedBoardsInput {
    update: UserUpdateWithoutCreatedBoardsDataInput;
    create: UserCreateWithoutCreatedBoardsInput;
}

export interface UserUpsertWithoutCreatedCardsInput {
    update: UserUpdateWithoutCreatedCardsDataInput;
    create: UserCreateWithoutCreatedCardsInput;
}

export interface UserUpsertWithoutCreatedClipboardsInput {
    update: UserUpdateWithoutCreatedClipboardsDataInput;
    create: UserCreateWithoutCreatedClipboardsInput;
}

export interface UserUpsertWithWhereUniqueWithoutJoinedBoardsInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutJoinedBoardsDataInput;
    create: UserCreateWithoutJoinedBoardsInput;
}

export interface UserWhereInput {
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[];
    role_not_in?: UserRole[];
    profileImage?: string;
    profileImage_not?: string;
    profileImage_in?: string[];
    profileImage_not_in?: string[];
    profileImage_lt?: string;
    profileImage_lte?: string;
    profileImage_gt?: string;
    profileImage_gte?: string;
    profileImage_contains?: string;
    profileImage_not_contains?: string;
    profileImage_starts_with?: string;
    profileImage_not_starts_with?: string;
    profileImage_ends_with?: string;
    profileImage_not_ends_with?: string;
    createdBoards_every?: BoardWhereInput;
    createdBoards_some?: BoardWhereInput;
    createdBoards_none?: BoardWhereInput;
    joinedBoards_every?: BoardWhereInput;
    joinedBoards_some?: BoardWhereInput;
    joinedBoards_none?: BoardWhereInput;
    createdCards_every?: CardWhereInput;
    createdCards_some?: CardWhereInput;
    createdCards_none?: CardWhereInput;
    createdClipboards_every?: ClipboardWhereInput;
    createdClipboards_some?: ClipboardWhereInput;
    createdClipboards_none?: ClipboardWhereInput;
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
}

export interface UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export interface AggregateBoard {
    count: number;
}

export interface AggregateCard {
    count: number;
}

export interface AggregateClipboard {
    count: number;
}

export interface AggregateFile {
    count: number;
}

export interface AggregateUser {
    count: number;
}

export interface AuthPayload {
    token: string;
    user: User;
}

export interface BatchPayload {
    count: Long;
}

export interface Board {
    id: string;
    title: string;
    slug: string;
    creator: User;
    member?: User[];
    isPublic: boolean;
    cards?: Card[];
}

export interface BoardConnection {
    pageInfo: PageInfo;
    edges: BoardEdge[];
    aggregate: AggregateBoard;
}

export interface BoardEdge {
    node: Board;
    cursor: string;
}

export interface BoardPreviousValues {
    id: string;
    title: string;
    slug: string;
    isPublic: boolean;
}

export interface BoardSubscriptionPayload {
    mutation: MutationType;
    node?: Board;
    updatedFields?: string[];
    previousValues?: BoardPreviousValues;
}

export interface Card {
    id: string;
    creator: User;
    parent?: Board;
    title: string;
    slug: string;
    content?: string;
    public: boolean;
    archived: boolean;
    files?: File[];
}

export interface CardConnection {
    pageInfo: PageInfo;
    edges: CardEdge[];
    aggregate: AggregateCard;
}

export interface CardEdge {
    node: Card;
    cursor: string;
}

export interface CardPreviousValues {
    id: string;
    title: string;
    slug: string;
    content?: string;
    public: boolean;
    archived: boolean;
}

export interface CardSubscriptionPayload {
    mutation: MutationType;
    node?: Card;
    updatedFields?: string[];
    previousValues?: CardPreviousValues;
}

export interface Clipboard {
    id: string;
    creator: User;
    content: string;
    archived: boolean;
}

export interface ClipboardConnection {
    pageInfo: PageInfo;
    edges: ClipboardEdge[];
    aggregate: AggregateClipboard;
}

export interface ClipboardEdge {
    node: Clipboard;
    cursor: string;
}

export interface ClipboardPreviousValues {
    id: string;
    content: string;
    archived: boolean;
}

export interface ClipboardSubscriptionPayload {
    mutation: MutationType;
    node?: Clipboard;
    updatedFields?: string[];
    previousValues?: ClipboardPreviousValues;
}

export interface File {
    id: string;
    card: Card;
    type?: FileType;
    filename: string;
}

export interface FileConnection {
    pageInfo: PageInfo;
    edges: FileEdge[];
    aggregate: AggregateFile;
}

export interface FileEdge {
    node: File;
    cursor: string;
}

export interface FilePreviousValues {
    id: string;
    type?: FileType;
    filename: string;
}

export interface FileSubscriptionPayload {
    mutation: MutationType;
    node?: File;
    updatedFields?: string[];
    previousValues?: FilePreviousValues;
}

export interface IMutation {
    makeBoard(data: BoardInput): Board | Promise<Board>;
    editBoard(id: string, data: BoardInput): Board | Promise<Board>;
    makeCard(data?: CardInput, board?: string): Card | Promise<Card>;
    editCard(id: string, data?: CardInput): Card | Promise<Card>;
    makeClipboard(data: ClipboardInput): Clipboard | Promise<Clipboard>;
    removeClipboard(id: string): Clipboard | Promise<Clipboard>;
    createBoard(data: BoardCreateInput): Board | Promise<Board>;
    updateBoard(data: BoardUpdateInput, where: BoardWhereUniqueInput): Board | Promise<Board>;
    updateManyBoards(data: BoardUpdateManyMutationInput, where?: BoardWhereInput): BatchPayload | Promise<BatchPayload>;
    upsertBoard(where: BoardWhereUniqueInput, create: BoardCreateInput, update: BoardUpdateInput): Board | Promise<Board>;
    deleteBoard(where: BoardWhereUniqueInput): Board | Promise<Board>;
    deleteManyBoards(where?: BoardWhereInput): BatchPayload | Promise<BatchPayload>;
    createCard(data: CardCreateInput): Card | Promise<Card>;
    updateCard(data: CardUpdateInput, where: CardWhereUniqueInput): Card | Promise<Card>;
    updateManyCards(data: CardUpdateManyMutationInput, where?: CardWhereInput): BatchPayload | Promise<BatchPayload>;
    upsertCard(where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput): Card | Promise<Card>;
    deleteCard(where: CardWhereUniqueInput): Card | Promise<Card>;
    deleteManyCards(where?: CardWhereInput): BatchPayload | Promise<BatchPayload>;
    createClipboard(data: ClipboardCreateInput): Clipboard | Promise<Clipboard>;
    updateClipboard(data: ClipboardUpdateInput, where: ClipboardWhereUniqueInput): Clipboard | Promise<Clipboard>;
    updateManyClipboards(data: ClipboardUpdateManyMutationInput, where?: ClipboardWhereInput): BatchPayload | Promise<BatchPayload>;
    upsertClipboard(where: ClipboardWhereUniqueInput, create: ClipboardCreateInput, update: ClipboardUpdateInput): Clipboard | Promise<Clipboard>;
    deleteClipboard(where: ClipboardWhereUniqueInput): Clipboard | Promise<Clipboard>;
    deleteManyClipboards(where?: ClipboardWhereInput): BatchPayload | Promise<BatchPayload>;
    createFile(data: FileCreateInput): File | Promise<File>;
    updateFile(data: FileUpdateInput, where: FileWhereUniqueInput): File | Promise<File>;
    updateManyFiles(data: FileUpdateManyMutationInput, where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;
    upsertFile(where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput): File | Promise<File>;
    deleteFile(where: FileWhereUniqueInput): File | Promise<File>;
    deleteManyFiles(where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;
    createUser(data: UserCreateInput): User | Promise<User>;
    updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    login(email: string, password: string): AuthPayload | Promise<AuthPayload>;
    signup(email: string, password: string): AuthPayload | Promise<AuthPayload>;
}

export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export interface IQuery {
    getBoards(): Board[] | Promise<Board[]>;
    getCards(): Card[] | Promise<Card[]>;
    getClipboards(): Clipboard[] | Promise<Clipboard[]>;
    board(where: BoardWhereUniqueInput): Board | Promise<Board>;
    boards(where?: BoardWhereInput, orderBy?: BoardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Board[] | Promise<Board[]>;
    boardsConnection(where?: BoardWhereInput, orderBy?: BoardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): BoardConnection | Promise<BoardConnection>;
    card(where: CardWhereUniqueInput): Card | Promise<Card>;
    cards(where?: CardWhereInput, orderBy?: CardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Card[] | Promise<Card[]>;
    cardsConnection(where?: CardWhereInput, orderBy?: CardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): CardConnection | Promise<CardConnection>;
    clipboard(where: ClipboardWhereUniqueInput): Clipboard | Promise<Clipboard>;
    clipboards(where?: ClipboardWhereInput, orderBy?: ClipboardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Clipboard[] | Promise<Clipboard[]>;
    clipboardsConnection(where?: ClipboardWhereInput, orderBy?: ClipboardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ClipboardConnection | Promise<ClipboardConnection>;
    file(where: FileWhereUniqueInput): File | Promise<File>;
    files(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): File[] | Promise<File[]>;
    filesConnection(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): FileConnection | Promise<FileConnection>;
    user(where: UserWhereUniqueInput): User | Promise<User>;
    users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    node(id: string): Node | Promise<Node>;
    currentUser(): User | Promise<User>;
}

export interface ISubscription {
    subscribeCards(): CardSubscriptionPayload[] | Promise<CardSubscriptionPayload[]>;
    subscribeClipboards(): Clipboard[] | Promise<Clipboard[]>;
    board(where?: BoardSubscriptionWhereInput): BoardSubscriptionPayload | Promise<BoardSubscriptionPayload>;
    card(where?: CardSubscriptionWhereInput): CardSubscriptionPayload | Promise<CardSubscriptionPayload>;
    clipboard(where?: ClipboardSubscriptionWhereInput): ClipboardSubscriptionPayload | Promise<ClipboardSubscriptionPayload>;
    file(where?: FileSubscriptionWhereInput): FileSubscriptionPayload | Promise<FileSubscriptionPayload>;
    user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
}

export interface User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
    createdBoards?: Board[];
    joinedBoards?: Board[];
    createdCards?: Card[];
    createdClipboards?: Clipboard[];
}

export interface UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export interface UserEdge {
    node: User;
    cursor: string;
}

export interface UserPreviousValues {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    profileImage?: string;
}

export interface UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
export type Upload = any;
