import { ApolloServer } from 'apollo-server';

import resolvers from './src/graphql/resolvers';
import typeDefs from './src/graphql/schema';
import Database from './src/config';
import {
    ApolloServerPluginLandingPageGraphQLPlayground
  } from "apollo-server-core";
require('dotenv').config()
import express from "express";

class App {
  public express: express.Application;
  public port = process.env.PORT ? process.env.PORT : 4000
  private db: any = new Database();
  constructor() {
    this.express = express();
    this.server();
    this.db;
  }

  // private setupDb(): void {
  //   var mongoDb = "mongodb://127.0.0.1/my_database";
  //   mongoose.connect(mongoDb);
  //   var db = mongoose.connection;
  //   db.on("error", console.error.bind(console, "MongoDB Connection error"));
  // }
  private server(): void {
    const server = new ApolloServer({ 
      resolvers, 
      typeDefs, 
      plugins: [
          ApolloServerPluginLandingPageGraphQLPlayground(),
      ], 
      introspection: process.env.APOLLO_INTROSPECTION === 'true' ? true : false
    });
    server.listen(this.port)
      .then(({ url }) => console.log(`Server ready at ${url}. `));
    
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => server.stop());
    }
  }
}
new App();
// const port = process.env.PORT ? process.env.PORT : 4000
// const server = new ApolloServer({ 
//     resolvers, 
//     typeDefs, 
//     plugins: [
//         ApolloServerPluginLandingPageGraphQLPlayground(),
//     ], 
//     introspection: process.env.APOLLO_INTROSPECTION === 'true' ? true : false
// });
// new Database();
// server.listen(port)
//   .then(({ url }) => console.log(`Server ready at ${url}. `));

// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => server.stop());
// }