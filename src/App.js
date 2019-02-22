import React, { Component, Fragment } from "react";
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
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/news" component={News} />
          <Route path="/curfew" component={Show} />
          <Route path="/shows" component={Shows} />
          <Route path="/people" component={People} />
          <Route path="/daydream" component={Daydream} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
