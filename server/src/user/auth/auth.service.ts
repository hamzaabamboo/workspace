import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { TokenPayload } from '../../types';
import * as jwt from 'jsonwebtoken';
import { AuthError } from './AuthError';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(@Inject(CONTEXT) private readonly context: any) {}
  getUserId() {
    const Authorization = this.context.req.get('Authorization');
    if (Authorization) {
      const token = Authorization.replace('Bearer ', '');
      const { userId } = jwt.verify(
        token,
        process.env.APP_SECRET,
      ) as TokenPayload;
      return userId;
    }
    throw new AuthError();
  }
}
