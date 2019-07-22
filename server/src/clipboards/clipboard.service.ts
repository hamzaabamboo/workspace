import { GraphQLResolveInfo } from "graphql";
import { MutationResolvers } from "../resolver.types";
import { Prisma, User } from "../generated/prisma";
import slugify from "slugify";

class ClipboardService {
  getClipboards(user: User, db: Prisma, info: GraphQLResolveInfo) {
    return db.query.clipboards(
      {
        where: { creator: { id: user.id } }
      },
      info
    );
  }

  async makeClipboard(
    user: User,
    data: MutationResolvers.ClipboardInput,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    return await db.mutation.createClipboard(
      {
        data: {
          content: data.content,
          creator: {
            connect: {
              id: user.id
            }
          }
        }
      },
      info
    );
  }

  async deleteClipboard(
    user: User,
    id: string,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    const clipboard = await db.query.clipboard(
      { where: { id } },
      `{ creator { id } }`
    );
    if (!clipboard) {
      throw new Error("Clipboard not found!");
    }
    if (clipboard.creator.id != user.id) {
      throw new Error("You are not owner of this Clipboard");
    }
    return await db.mutation.deleteClipboard(
      {
        where: {
          id
        }
      },
      info
    );
  }
}

export default ClipboardService;
