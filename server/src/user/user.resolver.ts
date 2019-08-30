import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { ResolverMap } from '../types';

@Resolver('User')
export class UserResolver implements ResolverMap {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  login(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.login(email, password);
  }

  @Mutation()
  signup(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.signup(email, password);
  }
}
