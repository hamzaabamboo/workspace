import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';
import { ID_Input } from '../generated/prisma';
import { BoardInput, Board, BoardWhereInput } from '../graphql';
import { AuthError } from '../user/auth/AuthError';
import { GraphQLResolveInfo } from 'graphql';
import { UserService } from '../user/user.service';

@Injectable()
export class BoardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  findBoardById(id: ID_Input, info?: GraphQLResolveInfo) {
    return this.prisma.query.board({ where: { id } }, info);
  }

  findBoards(where: BoardWhereInput, info?: GraphQLResolveInfo) {
    return this.prisma.query.boards({ where }, info);
  }

  async getBoardCreator(id: string, info: GraphQLResolveInfo) {
    return this.userService.findUserById(id, info);
  }

  async getBoardMembers(boardId: string, info: GraphQLResolveInfo) {
    const user = await this.userService.findUsers(
      { joinedBoards_some: { id: boardId } },
      info,
    );
    return user[0];
  }

  getBoards(id: string) {
    return this.prisma.query.boards({
      where: {
        OR: [{ member_some: { id } }, { creator: { id } }],
      },
    }) as Promise<Board[]>;
  }

  makeBoard(id: ID_Input, { title, isPublic }: BoardInput) {
    return this.prisma.mutation.createBoard({
      data: {
        title,
        isPublic,
        slug: slugify(title),
        creator: {
          connect: {
            id,
          },
        },
      },
    }) as Promise<Board>;
  }

  isOwner(user: ID_Input, board: ID_Input) {
    return this.prisma.exists.Board({ id: board, creator: { id: user } });
  }

  async editBoard(user: ID_Input, id: ID_Input, data: BoardInput) {
    if (!(await this.isOwner(user, id)))
      throw new AuthError('Not creator of this board.');
    return this.prisma.mutation.updateBoard({
      where: {
        id,
      },
      data,
    }) as Promise<Board>;
  }
}
