import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CardInput, Card } from '../graphql';
import { FileService } from '../file/file.service';
import slugify from 'slugify';
import { UserService } from '../user/user.service';
import { BoardService } from '../board/board.service';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class CardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
    private readonly userService: UserService,
    private readonly boardService: BoardService,
  ) {}

  async getCardCreator(id: string, info: GraphQLResolveInfo) {
    return this.userService.findUserById(id, info);
  }

  async getCardParent(cardId: string, info: GraphQLResolveInfo) {
    const user = await this.boardService.findBoards(
      {
        cards_some: { id: cardId },
      },
      info,
    );
    return user[0];
  }

  getCards(userId: string) {
    return this.prisma.query.cards({
      where: { creator: { id: userId } },
    }) as Promise<Card[]>;
  }

  async editCard(cardId: string, { files, title, content }: CardInput) {
    await this.prisma.mutation.updateCard({
      where: { id: cardId },
      data: { files: { deleteMany: { id_not: '0' } } },
    });
    return this.prisma.mutation.updateCard({
      where: { id: cardId },
      data: {
        title,
        content,
        slug: slugify(title),
        files: { create: await this.fileService.processMultipleFiles(files) },
      },
    }) as Promise<Card>;
  }

  async makeCard(
    user: string,
    { title, content, files }: CardInput,
    board: string,
  ) {
    return this.prisma.mutation.createCard({
      data: {
        title,
        content,
        slug: slugify(title),
        public: false,
        archived: false,
        creator: {
          connect: {
            id: user,
          },
        },
        parent: board && {
          connect: {
            id: board,
          },
        },
        files: {
          create: await this.fileService.processMultipleFiles(files),
        },
      },
    }) as Promise<Card>;
  }

  subscribeCard(userId: string) {
    return this.prisma.subscription.card({
      where: { node: { creator: { id: userId } } },
    });
  }
}
