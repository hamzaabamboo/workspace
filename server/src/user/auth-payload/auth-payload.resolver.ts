import { Resolver, ResolveProperty, Parent, Info } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { GraphQLResolveInfo } from 'graphql';
import { AuthPayload } from 'src/graphql';

@Resolver('AuthPayload')
export class AuthPayloadResolver {
  constructor(private readonly userService: UserService) {}

  @ResolveProperty()
  user(@Parent() parent: AuthPayload, @Info() info: GraphQLResolveInfo) {
    console.log(parent);
    return this.userService.fetchUser(parent.user.id, info);
  }
}
