import React, { Component, Fragment } from "react";
import ReactPlayer from "react-player";
import Navbar from "./common/Navbar";
import curfewLogo from "../assets/images/curfew/curfew-logo-red.jpg";
import curfewPoster from "../assets/images/curfew/curfew-poster.jpg";

export default class Shows extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
            <h1 className="title is-1">Curfew</h1>
            <h2 className="title is-2">Images: </h2>
            
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


            <h2 className="title is-2">Trailer: </h2>
              <div className="columns is-centered">
                <div className="column is-two-thirds">
                  <ReactPlayer url="https://www.youtube.com/watch?v=hr3EBylHfIQ" />
                </div>
              </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
