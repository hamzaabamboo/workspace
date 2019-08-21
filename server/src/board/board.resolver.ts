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

@Resolver('Board')
export class BoardResolver implements ResolverMap {
  constructor(
    private readonly boardService: BoardService,
    private readonly authService: AuthService,
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
  creator(@Parent() parent: Board, @Info() info: GraphQLResolveInfo) {
    return this.boardService.getBoardCreator(parent.id, info);
  }

  @ResolveProperty()
  member(@Parent() parent: Board, @Info() info: GraphQLResolveInfo) {
    return this.boardService.getBoardMembers(parent.id, info);
  }
}
