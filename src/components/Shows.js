import React, { Component, Fragment } from "react";
import Navbar from "./common/Navbar";
import curfewLogo from '../assets/images/curfew/curfew-logo-red.jpg'
import curfewPoster from '../assets/images/curfew/curfew-poster.jpg'

export default class Shows extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-two-thirds-desktop ">
                <h1 title="is-1">Curfew</h1>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <figure className="image is-16by9">
                  <img src={curfewLogo} alt="Curfew logo" />
                </figure>
              </div>
              <div className="column is-one-third">
                <figure className="image is-3by4">
                  <img src={curfewPoster} alt="Curfew poster" />
                </figure>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
              <div className="column is-two-thirds-desktop ">
                <h1 title="is-1">Curfew</h1>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <figure className="image is-16by9">
                  <img src={curfewLogo} alt="Curfew logo" />
                </figure>
              </div>
              <div className="column is-one-third">
                <figure className="image is-3by4">
                  <img src={curfewPoster} alt="Curfew poster" />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
