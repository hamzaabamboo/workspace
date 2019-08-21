import {
  Resolver,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
  Info,
  Query,
} from '@nestjs/graphql';
import { ResolverMap } from '../types';
import { BoardInput, Board } from '../graphql';
import { BoardService } from './board.service';
import { AuthService } from '../user/auth/auth.service';
import { GraphQLResolveInfo } from 'graphql';
import { UserService } from '../user/user.service';

@Resolver('Board')
export class BoardResolver implements ResolverMap {
  constructor(
    private readonly boardService: BoardService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation()
  makeBoard(@Args('data') data: BoardInput) {
    const id = this.authService.getUserId();
    return this.boardService.makeBoard(id, data);
  }

  @Mutation()
  editBoard(@Args('id') id: string, @Args('data') data: BoardInput) {
    const user = this.authService.getUserId();
    return this.boardService.editBoard(user, id, data);
  }

  @Query()
  getBoards() {
    const user = this.authService.getUserId();
    return this.boardService.getBoards(user);
  }

  @ResolveProperty()
  async creator(@Parent() parent: Board, @Info() info: GraphQLResolveInfo) {
    const user = await this.userService.findUsers(
      { createdBoards_some: { id: parent.id } },
      info,
    );
    return user[0];
  }

  @ResolveProperty()
  async member(@Parent() parent: Board, @Info() info: GraphQLResolveInfo) {
    const user = await this.userService.findUsers(
      { joinedBoards_some: { id: parent.id } },
      info,
    );
    return user[0];
  }
}
