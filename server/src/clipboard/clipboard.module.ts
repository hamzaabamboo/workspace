import { Module } from '@nestjs/common';
import { ClipboardResolver } from './clipboard.resolver';
import { ClipboardService } from './clipboard.service';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  providers: [ClipboardResolver, ClipboardService],
})
export class ClipboardModule {}
