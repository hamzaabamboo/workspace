import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { TokenPayload } from '../../types';
import * as jwt from 'jsonwebtoken';
import { AuthError } from './AuthError';
import { getAuthHeader, getUserToken } from './user.util';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(@Inject(CONTEXT) private readonly context: any) {}
  getUserId() {
    const Authorization = getAuthHeader(this.context);
    if (Authorization) {
      const token = getUserToken(Authorization);
      const { userId } = jwt.verify(
        token,
        process.env.APP_SECRET,
      ) as TokenPayload;
      return userId;
    }
    throw new AuthError();
  }
}
