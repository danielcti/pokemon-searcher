import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Profile} />
      </Switch>
    </Router>
  );
};

export default routes;
