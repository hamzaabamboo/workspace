import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { CardModule } from './card/card.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { ClipboardModule } from './clipboard/clipboard.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: process.env.NODE_ENV !== 'production',
      context: ctx => ctx,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    CardModule,
    BoardModule,
    UserModule,
    PrismaModule,
    FileModule,
    ClipboardModule,
  ],
})
export class AppModule {}
