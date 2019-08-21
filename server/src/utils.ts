import { Ctx, TokenPayload } from './types';
import { GraphQLResolveInfo } from 'graphql';
import * as jwt from 'jsonwebtoken';

export function getUserId(context: Ctx) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(
      token,
      process.env.APP_SECRET!,
    ) as TokenPayload;
    return userId;
  }

  throw new AuthError();
}

// export async function getUser(
//   context: Ctx,
//   info?: GraphQLResolveInfo | string,
// ) {
//   const Authorization = context.request.get('Authorization');
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '');
//     const { userId } = jwt.verify(
//       token,
//       process.env.APP_SECRET!,
//     ) as TokenPayload;
//     const user = await context.db.query.user({ where: { id: userId } }, info);
//     if (user != null) {
//       return user;
//     }
//   }

//   throw new AuthError();
// }

// export const getUserFromConnectionParams = async (
//   ctx: Ctx,
//   info?: GraphQLResolveInfo | string,
// ) => {
//   const { token } = ctx.connection.context;
//   const { userId } = jwt.verify(token, process.env.APP_SECRET!) as TokenPayload;
//   const user = await ctx.db.query.user({ where: { id: userId } });
//   if (user) {
//     return user;
//   }
//   throw new AuthError();
// };

export const returnPayload = async <T>(data: Promise<T>) => ({
  payload: await data,
});

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
