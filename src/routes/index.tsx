import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Profile} />
    </Router>
  );
};

export default routes;
