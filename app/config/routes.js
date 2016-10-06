import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Main from "../components/Main";
import FilterableProductTable from "../components/FilterableProductTable";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={FilterableProductTable} />
    </Route>
  </Router>
);

export default routes;
