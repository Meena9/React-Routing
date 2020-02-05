import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import About from "./about";
import User from "./user";
const AppRouter = props => {
  console.log("props", props);

  return (
    <Switch>
      <Route path="/" exact strict component={Home}></Route>
      <Route path="/about" exact strict component={About}></Route>
      <Route
        path="/user/:id"
        exact
        strict
        render={() => (props.login ? <User /> : <Redirect to="/" />)}
      ></Route>
    </Switch>
  );
};
export default AppRouter;
