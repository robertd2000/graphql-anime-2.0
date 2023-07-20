import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export const withApollo = (component: () => ReactNode) => () =>
  <ApolloClientProvider client={client}>{component()}</ApolloClientProvider>;

export default withApollo;
