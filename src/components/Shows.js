import React, { Component, Fragment } from "react";
import ReactPlayer from "react-player";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import curfewLogo from "../assets/images/curfew/curfew-logo-red.jpg";
import curfewPoster from "../assets/images/curfew/curfew-poster.jpg";

export default class Shows extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="section-header">Shows</h1>
              </div>
              </div>
              <div className="columns is-centered is-multiline">
              <div className="column is-one-third">
                <figure className="image is-16by9">
                  <img src={curfewLogo} alt="Curfew logo" />
                </figure>
              </div>
              </div>
              <div className="columns is-centered">
              <div className="column is-half">
                  <ReactPlayer url="https://www.youtube.com/watch?v=hr3EBylHfIQ" />
              </div>
             


              {/* <div className="column is-full-width">
                
                </div>
                
              <div className="column is-one-third">
                <figure className="image is-3by4">
                  <img src={curfewPoster} alt="Curfew poster" />
                </figure>
              </div>

              <h2 className="title is-2">Trailer: </h2>
              <div className="columns is-centered">
                
              </div> */}
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
