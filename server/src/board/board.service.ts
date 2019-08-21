import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';
import { ID_Input } from '../generated/prisma';
import { BoardInput, Board } from '../graphql';
import { AuthError } from '../user/auth/AuthError';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

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
