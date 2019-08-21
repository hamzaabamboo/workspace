import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import slugify from 'slugify';
import { User, ID_Input } from '../generated/prisma';
import { BoardInput } from '../graphql';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  getBoards({ id }: User, info: GraphQLResolveInfo) {
    return this.prisma.query.boards(
      {
        where: {
          OR: [{ member_some: { id } }, { creator: { id } }],
        },
      },
      info,
    );
  }

  async makeBoard(
    id: ID_Input,
    { title, isPublic }: BoardInput,
    info?: GraphQLResolveInfo,
  ) {
    return await this.prisma.mutation.createBoard(
      {
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
      },
      info,
    );
  }
}
