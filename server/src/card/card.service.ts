import { GraphQLResolveInfo } from "graphql";
import { User, CardInput } from "../resolver.types";
import { Prisma } from "../generated/prisma";
import slugify from "slugify";
import { Service } from "typedi";
import FileService from "../file/file.service";

@Service()
class CardService {
  constructor(private readonly fileService: FileService) {}
  getCards(user: User, db: Prisma, info: GraphQLResolveInfo) {
    return db.query.cards(
      {
        where: { creator: { id: user.id } }
      },
      info
    );
  }

  async makeCard(
    user: User,
    { title, content, files = [] }: CardInput,
    board: string,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    return await db.mutation.createCard(
      {
        data: {
          title,
          content,
          slug: slugify(title),
          public: false,
          archived: false,
          creator: {
            connect: {
              id: user.id
            }
          },
          parent: board && {
            connect: {
              id: board
            }
          },
          files: {
            create: await this.fileService.processMultipleFiles(files)
          }
        }
      },
      info
    );
  }

  async editCard(
    user: User,
    id: string,
    { title, content, files = [] }: CardInput,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    const card = await db.query.card({ where: { id } }, `{ creator { id } }`);
    if (!card) {
      throw new Error("Card not found!");
    }
    if (card.creator.id != user.id) {
      throw new Error("You are not owner of this card");
    }
    return await db.mutation.updateCard(
      {
        where: {
          id
        },
        data: {
          title,
          content,
          slug: slugify(title),
          files: {
            create: await this.fileService.processMultipleFiles(files)
          }
        }
      },
      info
    );
  }

  subscribeCard(user: User, db: Prisma, info: GraphQLResolveInfo) {
    return db.subscription.card({
      where: { node: { creator: { id: user.id } } }
    });
  }
}

export default CardService;
