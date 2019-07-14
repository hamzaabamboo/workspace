import { Resolvers, Resolver } from "../resolver.types";
import { Service } from "typedi";
import { ClassResolvers } from "../types";
import BoardService from "./board.service";

@Service()
class BoardResolver implements ClassResolvers {
  constructor(private boardService: BoardService) {}

  resolvers(): Resolvers {
    const { boardService } = this;
    return {
      Query: {
        async getBoards(root, args, ctx, info) {
          const user = await ctx.user();
          return boardService.getBoards(user, ctx.db, info);
        }
      },
      Mutation: {
        async makeBoard(root, { data }, ctx, info) {
          const user = await ctx.user();
          return boardService.makeBoard(user, data, ctx.db, info);
        },
        async editBoard(root, { data, id }, ctx, info) {
          const user = await ctx.user();
          return boardService.editBoard(user, id, data, ctx.db, info);
        }
      }
    };
  }
}

export default BoardResolver;
