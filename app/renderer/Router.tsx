import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Index from './pages/index';
import Page2 from './pages/page2';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/page-2" component={Page2} />
      <Route path="/" component={Index} />
    </Switch>
  </HashRouter>
);

export default Router;
