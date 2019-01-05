import React, { Component, Fragment } from "react";
import Navbar from './common/Navbar'

export default class News extends Component {
  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="container">
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-two-thirds-desktop ">
            <p className="body-font">
             Links to press releases
            </p>
          </div>
        </div>
        </section>
      </div>
      </Fragment>
    );
  }
}
