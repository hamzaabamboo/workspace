import {
  Resolver,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
  Info,
  Query,
  Subscription,
} from '@nestjs/graphql';
import { ResolverMap } from '../types';
import { CardInput, Card } from '../graphql';
import { CardService } from './card.service';
import { AuthService } from '../user/auth/auth.service';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '../user/user.decorator';

@Resolver('Card')
export class CardResolver implements ResolverMap {
  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) {}

  @Query()
  getCards() {
    const user = this.authService.getUserId();
    return this.cardService.getCards(user);
  }

  @Mutation()
  makeCard(@Args('data') data: CardInput, @Args('board') board: string) {
    const user = this.authService.getUserId();
    return this.cardService.makeCard(user, data, board);
  }

  @Mutation()
  editCard(@Args('id') id: string, @Args('data') data: CardInput) {
    return this.cardService.editCard(id, data);
  }

  @Subscription()
  subscribeCards() {
    const user = this.authService.getUserId();
    return this.cardService.subscribeCard(user) as any;
  }

  @ResolveProperty()
  async creator(@User() user: string, @Info() info: GraphQLResolveInfo) {
    return this.cardService.getCardCreator(user, info);
  }

  @ResolveProperty()
  parent(@Parent() card: Card, @Info() info: GraphQLResolveInfo) {
    return this.cardService.getCardParent(card.id, info);
  }
}
