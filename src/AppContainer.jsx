// @flow

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './scenes/Dashboard';

const AppContainer = () => (
  <BrowserRouter>
    <Route exact path="/" component={Dashboard} />
  </BrowserRouter>
);

export default AppContainer;
