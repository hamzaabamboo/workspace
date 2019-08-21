import { Module } from '@nestjs/common';
import { CardResolver } from './card.resolver';
import { CardService } from './card.service';
import { PrismaModule } from '../prisma/prisma.module';
import { FileModule } from '../file/file.module';
import { UserModule } from '../user/user.module';
import { BoardModule } from '../board/board.module';

@Module({
  imports: [PrismaModule, FileModule, UserModule, BoardModule],
  providers: [CardResolver, CardService],
})
export class CardModule {}
