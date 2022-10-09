import moduleAlias from "module-alias";
moduleAlias.addAliases({
  "@constant": `${__dirname}/constant`,
  "@context": `${__dirname}/context`,
  "@error": `${__dirname}/error`,
  "@graphql": `${__dirname}/graphql`,
  "@model": `${__dirname}/model`,
  "@mutation": `${__dirname}/mutation`,
  "@query": `${__dirname}/query`,
  "@rule": `${__dirname}/rule`,
  "@schema": `${__dirname}/schema`,
  "@types": `${__dirname}/types`,
  "@utils": `${__dirname}/utils`,
  "@validation": `${__dirname}/validation`,
});

import { ApolloServer } from "apollo-server";
import { ServerContext } from "@context";

import { makeSchema } from "nexus";
import { join } from "path";

import {
  UserModel,
  ProjectModel,
  TaskModel,
  ColorModel,
  AuthModel,
} from "@model";
import { ProjectQuery, TaskQuery, UserQuery } from "@query";
import {
  TaskMutation,
  AuthMutation,
  UserMutation,
  ProjectMutation,
} from "@mutation";

export const schema = makeSchema({
  types: [
    // model
    UserModel,
    ProjectModel,
    TaskModel,
    ColorModel,
    AuthModel.Payload,

    // query
    UserQuery.Get,
    TaskQuery.Get,
    TaskQuery.GetAll,
    ProjectQuery.Get,
    ProjectQuery.GetAll,

    // mutation
    AuthMutation.Login,
    AuthMutation.Register,
    ProjectMutation.Create,
    ProjectMutation.Update,
    ProjectMutation.Delete,
    TaskMutation.Create,
    TaskMutation.Update,
    TaskMutation.Delete,
    UserMutation.Update,
  ],
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "src", "types", "Global.types.ts"),
  },
  contextType: {
    module: join(process.cwd(), "./src/types/Server.types.ts"), // 1
    export: "Context", // 2
  },
});

export const server = new ApolloServer({
  schema,
  context: ServerContext.Context,
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
