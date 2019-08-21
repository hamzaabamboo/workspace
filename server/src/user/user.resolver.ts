import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { ResolverMap } from 'src/types';

@Resolver('User')
export class UserResolver implements ResolverMap {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  login(@Args('email') email: string, @Args('password') password: string) {
    console.log('test');
    return this.userService.login(email, password);
  }
}
