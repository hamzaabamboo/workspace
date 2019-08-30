import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: process.env.PRISMA_ENDPOINT || 'http://prisma:4466/',
      secret: process.env.PRISMA_SECRET,
      debug: process.env.NODE_ENV !== 'production',
    });
  }
}
