import { Service } from "typedi";
import CardService from "./card.service";
import { ClassResolvers, PartialResolver, FileUpload } from "../types";
import { MutationResolvers } from "../resolver.types";
@Service()
class CardResolvers implements ClassResolvers {
  constructor(private cardService: CardService) {}

  resolvers(): Partial<PartialResolver> {
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
          return cardService.makeCard(
            user,
            data as MutationResolvers.CardInput & { files?: FileUpload[] },
            board,
            ctx.db,
            info
          );
        },
        async editCard(parent, { id, data }, ctx, info) {
          const user = await ctx.user();
          return cardService.editCard(
            user,
            id,
            data as MutationResolvers.CardInput & { files?: FileUpload[] },
            ctx.db,
            info
          );
        }
      }
    };
  }
}

export default CardResolvers;
