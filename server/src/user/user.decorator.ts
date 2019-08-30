import { createParamDecorator } from '@nestjs/common';
import { getAuthHeader, getUserToken } from './auth/user.util';
import { TokenPayload } from '../types';
import { AuthError } from './auth/AuthError';
import * as jwt from 'jsonwebtoken';

export const User = createParamDecorator((data, [root, args, ctx, info]) => {
  const Authorization = getAuthHeader(ctx);
  if (Authorization) {
    const token = getUserToken(Authorization);
    const { userId } = jwt.verify(
      token,
      process.env.APP_SECRET,
    ) as TokenPayload;
    return userId;
  }
  throw new AuthError();
});
