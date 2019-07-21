import { Service } from "typedi";
import { ClassResolvers, PartialResolver } from "../types";
import ClipboardService from "./clipboard.service";
import { Resolvers } from "../resolver.types";

@Service()
class ClipboardResolvers implements ClassResolvers {
  constructor(private clipboardService: ClipboardService) {}

  resolvers(): Partial<PartialResolver> {
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
