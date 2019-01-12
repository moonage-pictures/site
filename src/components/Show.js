import React, { Component, Fragment } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ReactPlayer from "react-player";
import { Loader } from "./common/Loader";

export default class Show extends Component {
  state = {
    show: this.props.location.state.show,
    playerLoaded: false
  };

  getGalleryLinks = galleryInfo =>
    galleryInfo
      .split("src=")
      .map(imgLink => imgLink.substring(1, imgLink.indexOf(".jpg")));

  successState = () => this.setState({ playerLoaded: true });

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            <div className="columns is-centered is-multiline">
              <div className="column is-half-desktop ">
                <h1
                  className="title is-1 section-header"
                  style={{ textAlign: "center" }}
                >
                  {this.state.show.title.rendered}
                </h1>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-full-width">
                {!this.state.playerLoaded && <Loader section="trailer" />}{" "}
                <div className="fade"><ReactPlayer
                  url={this.state.show.acf["trailer-url"]}
                  width="100%"
                  height="60vh"
                  onReady={this.successState}
                /></div>
              </div>
            </div>
            <div className="columns is-multiline is-centered">
              {this.getGalleryLinks(this.state.show.acf["landscape-gallery"])
                .slice(1)
                .map((img, i) => (
                  <div className="column is-one-third" key={i}>
                    <p className="image is-3by2">
                      <img src={img} alt="" />
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
