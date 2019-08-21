import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { AuthPayload, User } from '../graphql';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(email: string, password: string) {
    if (await this.prisma.exists.User({ email })) {
      throw new Error(`${email} has already been registered`);
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.prisma.mutation.createUser({
      data: {
        email,
        password: hashed,
        role: 'NORMAL',
      },
    });
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  }

  async login(email: string, password: string): Promise<AuthPayload> {
    const user = await this.prisma.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user: user as User,
    };
  }

  fetchUser(id: string, info: GraphQLResolveInfo) {
    return this.prisma.query.user({ where: { id } }, info);
  }
}
