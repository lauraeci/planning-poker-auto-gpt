import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => "Hello, world!",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

(async () => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
})();
