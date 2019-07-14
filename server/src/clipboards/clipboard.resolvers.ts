import { Resolvers } from "../resolver.types";
import { Service } from "typedi";
import { ClassResolvers } from "../types";
import ClipboardService from "./clipboard.service";

@Service()
class ClipboardResolvers implements ClassResolvers {
  constructor(private clipboardService: ClipboardService) {}

  resolvers(): Resolvers {
    const { clipboardService } = this;
    return {
      Query: {
        async getClipboards(parent, args, ctx, info) {
          const user = await ctx.user();
          return clipboardService.getClipboards(user, ctx.db, info);
        }
      },
      Mutation: {
        async makeClipboard(parent, { data }, ctx, info) {
          const user = await ctx.user();
          return clipboardService.makeClipboard(user, data, ctx.db, info);
        },
        async deleteClipboard(parent, { id }, ctx, info) {
          const user = await ctx.user();
          return clipboardService.deleteClipboard(user, id, ctx.db, info);
        }
      }
    };
  }
}

export default ClipboardResolvers;
