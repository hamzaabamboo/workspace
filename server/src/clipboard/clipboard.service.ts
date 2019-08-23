import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClipboardInput, Clipboard } from '../graphql';
import { AuthError } from '../user/auth/AuthError';

@Injectable()
export class ClipboardService {
  constructor(private readonly prisma: PrismaService) {}

  getClipboards(user: string) {
    return this.prisma.query.clipboards({
      where: { creator: { id: user } },
    }) as Promise<Clipboard[]>;
  }

  makeClipboard(user: string, data: ClipboardInput) {
    return this.prisma.mutation.createClipboard({
      data: {
        content: data.content,
        creator: {
          connect: {
            id: user,
          },
        },
      },
    }) as Promise<Clipboard>;
  }

  async removeClipboard(user: string, clipBoardId: string) {
    const clipboard = await this.prisma.query.clipboard(
      { where: { id: clipBoardId } },
      `{ creator { id } }`,
    );
    if (!clipboard) {
      throw new Error('Clipboard not found!');
    }
    if (clipboard.creator.id != user) {
      throw new AuthError('You are not owner of this Clipboard');
    }
    return this.prisma.mutation.deleteClipboard({
      where: {
        id: clipBoardId,
      },
    }) as Promise<Clipboard>;
  }

  subscribeClipboard(user: string) {
    return this.prisma.subscription.clipboard({
      where: { node: { creator: { id: user } } },
    });
  }
}
