import { GraphQLResolveInfo } from "graphql";
import { User, BoardInput } from "../resolver.types";
import { Prisma } from "../generated/prisma";
import slugify from "slugify";
import gql from "graphql-tag";
class BoardService {
  getBoards({ id }: User, db: Prisma, info: GraphQLResolveInfo) {
    return db.query.boards(
      {
        where: {
          OR: [{ member_some: { id } }, { creator: { id } }]
        }
      },
      info
    );
  }

  async makeBoard(
    user: User,
    { title, isPublic }: BoardInput,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    return await db.mutation.createBoard(
      {
        data: {
          title,
          isPublic,
          slug: slugify(title),
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

  async editBoard(
    user: User,
    id: string,
    { title, isPublic }: BoardInput,
    db: Prisma,
    info: GraphQLResolveInfo
  ) {
    const board = await db.query.board(
      { where: { id } },
      gql`
        {
          creator {
            id
          }
        }
      `
    );
    if (!board) {
      throw new Error("Board not found!");
    }
    if (board.creator.id != user.id) {
      throw new Error("You are not owner of this board");
    }
    return await db.mutation.updateBoard(
      {
        where: {
          id
        },
        data: {
          title,
          isPublic,
          slug: slugify(title)
        }
      },
      info
    );
  }
}

export default BoardService;
