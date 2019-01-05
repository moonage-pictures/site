import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import News from "./components/News";
import Shows from "./components/Shows";
import Company from "./components/Company";
import People from "./components/People";
import Daydream from "./components/Daydream";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/news" component={News} />
          <Route path="/shows" component={Shows} />
          <Route path="/people" component={People} />
          <Route path="/daydream" component={Daydream} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
