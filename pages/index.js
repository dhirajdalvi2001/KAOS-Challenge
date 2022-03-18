import { useState } from "react";

import Header from "../components/header";
import TabNav from "../components/tab-nav";
import AccountForm from "../components/accout-form";
import AccountFeed from "../components/account-feed";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // for full stack challenge
  // uri: "/api/graphql"
  // for frontend challenge
  uri: "https://kaos-challenge-backend-graphql-server.vercel.app/api/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "DhirajDalvi2001": "dhirajdalvi2001@gmail.com"
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function IndexPage() {
  const [page, setPage] = useState("form");
  return (
    <ApolloProvider client={client}>
      <Header />
      <TabNav active={page} goto={(p) => setPage(p)} />
      {page === "form" ? <AccountForm /> : <></>}
      {page === "feed" ? <AccountFeed /> : <></>}
    </ApolloProvider>
  );
}
