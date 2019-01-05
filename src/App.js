import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import News from "./components/News";
import Company from "./components/Company";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/news" component={News} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
