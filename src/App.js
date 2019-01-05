import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import Company from "./components/Company";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Navbar />
          <Route path="/company" component={Company} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
