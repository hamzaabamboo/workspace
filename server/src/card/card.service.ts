import { GraphQLResolveInfo } from "graphql";
import { User, CardInput } from "../resolver.types";
import { Prisma } from "../generated/prisma";
import slugify from "slugify";

class CardService {
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
    data: CardInput,
    board: string,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    return await db.mutation.createCard(
      {
        data: {
          ...data,
          slug: slugify(data.title),
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
          files: {}
        }
      },
      info
    );
  }

  async editCard(
    user: User,
    id: string,
    data: CardInput,
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
          ...data,
          slug: slugify(data.title),
          files: {}
        }
      },
      info
    );
  }
}

export default CardService;
