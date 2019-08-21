import { Resolver, Mutation, Args, Info, Context } from '@nestjs/graphql';
import { ResolverMap, Ctx } from '../types';
import { BoardInput } from '../graphql';
import { GraphQLResolveInfo } from 'graphql';
import { BoardService } from './board.service';
import { getUserId } from '../utils';

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation('makeBoard')
  makeBoard(
    @Args('BoardInput') boardInput: BoardInput,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: Ctx,
  ) {
    const id = getUserId(ctx);
    return this.boardService.makeBoard(id, boardInput, info);
  }
}
