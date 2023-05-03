import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { join } from 'path';
import { userResolvers } from './modules/user/resolvers';
import { roomResolvers } from './modules/room/resolvers';

const typeDefsArray = loadFilesSync([
    join(__dirname, './modules/base.graphql'),
    join(__dirname, './modules/**/typedefs/*.graphql'),
]);

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers([userResolvers, roomResolvers]);

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
