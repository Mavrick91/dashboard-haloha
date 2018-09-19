// @flow

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Dashboard from './scenes/Dashboard';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjm8fu4jx424x0149fxch7m91',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
    </BrowserRouter>
  </ApolloProvider>
);

export default AppContainer;
