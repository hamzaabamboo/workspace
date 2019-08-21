import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../generated/prisma';
import { CardInput } from '../graphql';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async makeCard(user: User, { title, content }: CardInput) {}
}
