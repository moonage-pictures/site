import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Shows from "./components/pages/Shows";
import Show from "./components/pages/Show";
import Company from "./components/pages/Company";
import People from "./components/pages/People";
import Daydream from "./components/pages/Daydream";
import Contact from "./components/pages/Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/news" component={News} />
          <Route path="/shows/:id" component={Show} />
          <Route path="/shows" component={Shows} />
          <Route path="/people" component={People} />
          <Route path="/daydream" component={Daydream} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}
