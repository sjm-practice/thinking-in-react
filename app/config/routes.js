import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Main from "../components/Main";
import FilterableProductTableContainer from "../containers/FilterableProductTableContainer";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={FilterableProductTableContainer} />
    </Route>
  </Router>
);

export default routes;
