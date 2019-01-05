import React, { Component, Fragment } from "react";
import Navbar from './common/Navbar'
import Footer from './common/Footer'

export default class Daydream extends Component {
  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="container">
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-two-thirds-desktop ">
          <h1 className="title is-1" style={{marginTop: "2rem"}}>Daydream</h1>

            <p className="body-font">
             Daydreams in here
            </p>
          </div>
        </div>
        </section>
      </div>
      <Footer />
      </Fragment>
    );
  }
}
