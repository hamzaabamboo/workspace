import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  // watch: process.env.NODE_ENV !== 'production',
});
