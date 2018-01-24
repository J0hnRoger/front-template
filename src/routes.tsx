import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './pages/shared/Layout';

import Home from './pages/public/HomePage';

export const routes = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>
);
