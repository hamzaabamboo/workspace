import {
  Resolver,
  Mutation,
  Args,
  Query,
  Subscription,
  ResolveProperty,
  Info,
} from '@nestjs/graphql';
import { ResolverMap, Result } from '../types';
import { ClipboardInput, Clipboard } from '../graphql';
import { AuthService } from '../user/auth/auth.service';
import { ClipboardService } from './clipboard.service';
import { User } from '../user/user.decorator';
import { GraphQLResolveInfo } from 'graphql';

@Resolver('Clipboard')
export class ClipboardResolver implements ResolverMap {
  constructor(
    private readonly authService: AuthService,
    private readonly clipboardService: ClipboardService,
  ) {}

  @Query()
  getClipboards() {
    const user = this.authService.getUserId();
    return this.clipboardService.getClipboards(user);
  }

  @Mutation()
  makeClipboard(@Args('data') data: ClipboardInput) {
    const user = this.authService.getUserId();
    return this.clipboardService.makeClipboard(user, data);
  }

  @Mutation()
  removeClipboard(@Args('id') id: string) {
    const user = this.authService.getUserId();
    return this.clipboardService.removeClipboard(user, id);
  }

  @Subscription()
  subscribeClipboards() {
    const user = this.authService.getUserId();
    return this.clipboardService.subscribeClipboard(user) as any;
  }

  @ResolveProperty()
  creator(
    @User() user: string,
    @Info() info: GraphQLResolveInfo,
  ): Result<Clipboard['creator']> {
    return this.clipboardService.getClipboardCreator(user, info);
  }
}
