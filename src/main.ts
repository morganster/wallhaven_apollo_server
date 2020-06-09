import { ApolloServer } from "apollo-server-express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import { environment } from "./environment";
import { resolvers } from "./resolvers";
import * as typeDefs from "./generated/schema.graphql";

import express, { Router } from "express";
import { WallhavenApi } from "./data/wallhaven.rest";

const router = Router();

const app = express();

const server = new ApolloServer({
  resolvers: resolvers as any,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: true,
  dataSources: () => {
    return {
      wallHavenApi: new WallhavenApi(),
    };
  },
});

server.applyMiddleware({ app });
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", router);
app.listen(environment.port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${environment.port}${server.graphqlPath}`
  );
});

// hot module replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
