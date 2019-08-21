import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { CardModule } from './card/card.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
      // playground: true,
      playground: process.env.NODE_ENV !== 'production',
    }),
    CardModule,
    BoardModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
