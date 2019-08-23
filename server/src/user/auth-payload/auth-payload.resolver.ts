import { Resolver, ResolveProperty, Parent, Info } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { GraphQLResolveInfo } from 'graphql';
import { AuthPayload } from '../../graphql';
import { Result } from '../../types';

@Resolver('AuthPayload')
export class AuthPayloadResolver {
  constructor(private readonly userService: UserService) {}

  @ResolveProperty()
  user(
    @Parent() parent: AuthPayload,
    @Info() info: GraphQLResolveInfo,
  ): Result<AuthPayload['user']> {
    return this.userService.findUserById(parent.user.id, info);
  }
}
