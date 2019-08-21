import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthPayloadResolver } from './auth-payload/auth-payload.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService, AuthPayloadResolver],
})
export class UserModule {}
