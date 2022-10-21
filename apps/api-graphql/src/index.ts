import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: readFileSync(__dirname + '/schema.gql', { encoding: 'utf-8' }),
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 API GraphQL iniciada em ${url}`);
});
