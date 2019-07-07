import "./module-alias";

import { GraphQLServer, Options } from "graphql-yoga";
import { Server } from "http";
import { extractFragmentReplacements } from "prisma-binding";
import { prisma } from "./generated/prisma-client";
import { middlewares } from "./middlewares/index";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import datamodelInfo from "./generated/nexus-prisma";
import express = require("express");
import * as path from "path";
import * as card from "./cards/index";

export const options: Options = {};

const schema = makePrismaSchema({
  types: [card],

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  }
});

export const createGraphQLServer = (): GraphQLServer => {
  const tempServer = new GraphQLServer({
    schema,
    context: req => ({ ...req, prisma }),
    middlewares: [...middlewares],
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
