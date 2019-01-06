import React, { Component, Fragment } from "react";
import Navbar from './common/Navbar'
import Footer from './common/Footer'

export default class Daydream extends Component {

  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="container">
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-two-thirds-desktop ">
          <h1 className="title is-1" style={{marginTop: "2rem", borderBottom: "1px solid white"}}>Daydream</h1>

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
