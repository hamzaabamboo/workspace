import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { CardModule } from './card/card.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
      playground: process.env.NODE_ENV !== 'production',
      context: ctx => ctx,
    }),
    CardModule,
    BoardModule,
    UserModule,
    PrismaModule,
    FileModule,
  ],
})
export class AppModule {}
