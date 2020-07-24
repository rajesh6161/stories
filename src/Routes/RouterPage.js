import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../components/MainPage";
import AddStories from "../components/AddStories";
import { Collapse } from "@material-ui/core";

const RouterPage = () => {
  var page = "no";
  console.log(`RouterPage: ${page}`);
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/add">
            <AddStories page="no" />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default RouterPage;
