import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Index from "./pages/index";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </HashRouter>
);

export default Router;
