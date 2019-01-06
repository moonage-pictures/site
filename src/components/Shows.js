import React, { Component, Fragment } from "react";
import ReactPlayer from "react-player";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import curfewLogo from "../assets/images/curfew/curfew-logo-red.jpg";
import curfewPoster from "../assets/images/curfew/curfew-poster.jpg";

export default class Shows extends Component {
  state = {
    galleryModalActive: false
  };

  componentDidMount = () => window.scrollTo(0, 0);

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
              <div className="column has-text-centered is-narrow is-two-thirds">
                <button
                  className="gallery-button"
                  onClick={() => this.setState({ galleryModalActive: true })}
                >
                  Gallery
                </button>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-narrow is-half">
                <ReactPlayer url="https://www.youtube.com/watch?v=hr3EBylHfIQ" />
              </div>
            </div>
           

            <div
              className={`modal ${
                this.state.galleryModalActive ? "is-active" : ""
              }`}
            >
              <div className="modal-background" onClick={() => this.setState({ galleryModalActive: false})} />
              <div className="modal-content">
              <div className="columns">
                <div className="column is-one-third">
                <p className="image is-2by3">
                  <img
                    src={curfewPoster}
                    alt=""
                  />
                </p>
                </div>
                <div className="column is-one-third">
                <p className="image is-2by3">
                  <img
                    src={curfewPoster}
                    alt=""
                  />
                </p>
                </div>
                <div className="column is-one-third">
                <p className="image is-2by3">
                  <img
                    src={curfewPoster}
                    alt=""
                  />
                </p>
                </div>
              </div>
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => this.setState({ galleryModalActive: false })}
              />
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
