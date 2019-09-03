import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { join } from 'path';

const typesArray = fileLoader(join(__dirname, './models/**/*.gql'));

const typeDefs = mergeTypes(typesArray, { all: true });

const generatedDir = join(__dirname, 'generated');

if (!existsSync(generatedDir)) {
  mkdirSync(generatedDir);
}
writeFileSync(join(generatedDir, 'datamodel.gql'), typeDefs);
