import "./module-alias";

import { GraphQLServer, Options } from "graphql-yoga";
import { Server } from "http";
import { extractFragmentReplacements } from "prisma-binding";
import { Prisma } from "./generated/prisma";
import { middlewares } from "./middlewares/index";
import { permissions } from "./permissions";
import { resolvers } from "./resolvers";
import { /* extendedTypeDefs, */ generateTypeDefs } from "./typeDefs";
import express = require("express");
import * as path from "path";

export const db = new Prisma({
  fragmentReplacements: extractFragmentReplacements(resolvers),
  endpoint: process.env.PRISMA_ENDPOINT || "http://prisma:4466/",
  secret: process.env.PRISMA_SECRET,
  debug: process.env.NODE_ENV !== "production" || true
});

export const options: Options = {};

export const createGraphQLServer = (): GraphQLServer => {
  generateTypeDefs();

  const tempServer = new GraphQLServer({
    typeDefs: ["./src/generated/schema.graphql" /*extendedTypeDefs*/],
    resolvers,
    context: req => ({
      ...req,
      db
    }),
    middlewares: [...middlewares, permissions],
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });

  if (process.env.NODE_ENV !== "production") {
    console.log("Server is created");
  }

  return tempServer;
};

export const createServer = (): Server =>
  createGraphQLServer().createHttpServer(options);

export const graphqlServer: GraphQLServer = createGraphQLServer();

graphqlServer.express.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "/uploads"))
);

export const server: Server = graphqlServer.createHttpServer(options);
