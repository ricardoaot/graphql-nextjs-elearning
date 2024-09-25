import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api/graphql', // URI de tu endpoint GraphQL
  cache: new InMemoryCache(),
});

export default client;
