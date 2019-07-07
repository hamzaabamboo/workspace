import { prismaObjectType } from "nexus-prisma";

// import { getUser } from "../utils";
// import slugify from "slugify";

export const CardQuery = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields(["cards"]);
  }
});

// const user = {
//   Query: {
//     async getCards(parent, args, ctx, info) {
//       const user = await getUser(ctx, info);
//       const cards = await ctx.db.query.cards({
//         where: { creator: { id: user.id } }
//       });
//       return cards;
//     }
//   },
//   Mutation: {
//     async makeCard(parent, { data, board }, ctx, info) {
//       const user = await getUser(ctx, info);
//       const card = await ctx.db.mutation.createCard({
//         data: {
//           ...data,
//           slug: slugify(data.title),
//           public: false,
//           archived: false,
//           creator: {
//             connect: {
//               id: user.id
//             }
//           },
//           parent: board && {
//             connect: {
//               id: board
//             }
//           },
//           files: {}
//         }
//       });

//       return card;
//     },
//     async editCard(parent, { id, data }, ctx, info) {
//       const user = await getUser(ctx, info);
//       const card = await ctx.db.query.card(
//         { where: { id } },
//         `{ creator { id } }`
//       );
//       if (!card) {
//         throw new Error("Card not found!");
//       }
//       if (card.creator.id != user.id) {
//         throw new Error("You are not owner of this card");
//       }
//       return await ctx.db.mutation.updateCard({
//         where: {
//           id
//         },
//         data: {
//           ...data,
//           slug: slugify(data.title),
//           files: {}
//         }
//       });
//     }
//   }
// };

// export default user;
