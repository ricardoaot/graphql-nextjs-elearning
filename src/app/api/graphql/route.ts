import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '../../../graphql/schema';
import { resolvers, createLoaders } from '../../../graphql/resolvers';

// Crear instancia de ApolloServer
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Crear el handler para integrarlo con Next.js
export const POST = startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    loaders: createLoaders(),
  }),
});
