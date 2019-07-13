import { Resolvers } from "../resolver.types";
import { Service } from "typedi";
import CardService from "./card.service";
import { ClassResolvers } from "../types";

@Service()
class CardResolvers implements ClassResolvers {
  constructor(private cardService: CardService) {}

  resolvers(): Resolvers {
    const { cardService } = this;
    return {
      Query: {
        async getCards(parent, args, ctx, info) {
          const user = await ctx.user();
          return cardService.getCards(user, ctx.db, info);
        }
      },
      Mutation: {
        async makeCard(parent, { data, board }, ctx, info) {
          const user = await ctx.user();
          return cardService.makeCard(user, data, board, ctx.db, info);
        },
        async editCard(parent, { id, data }, ctx, info) {
          const user = await ctx.user();
          return cardService.editCard(user, id, data, ctx.db, info);
        }
      }
    };
  }
}

export default CardResolvers;
