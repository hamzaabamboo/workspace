import "reflect-metadata";
import Container from "typedi";
import { ClassResolvers } from "./types";

export const getResolvers = classResolvers =>
  Container.get<ClassResolvers>(classResolvers).resolvers();
