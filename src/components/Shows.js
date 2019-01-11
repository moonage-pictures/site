import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class Shows extends Component {
  state = {
    galleryModalActive: {},
    landscapeImages: [],
    shows: []
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data: shows } = await axios({
      url: "http://3jd.d66.myftpupload.com/wp-json/wp/v2/posts?categories=4",
      method: "GET"
    });
    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/162"
    );

    this.setState({ shows, title });
  };

  getGalleryLinks = galleryInfo =>
    galleryInfo
      .split("src=")
      .map(imgLink => imgLink.substring(1, imgLink.indexOf(".jpg")));

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">
                  {this.state.title}
                </h1>
              </div>
            </div>
            {this.state.shows.map(show => (
              <Fragment key={show.id}>
                <div className="columns is-centered is-multiline">
                  <div className="column is-one-third">
                    <figure className="image is-16by9">
                      <img
                        src={show.acf["title-banner"].url}
                        alt={show.acf["title-banner"].alt}
                      />
                    </figure>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column has-text-centered is-narrow is-two-thirds">
                    <button
                      className="gallery-button"
                      onClick={() =>
                        this.setState({
                          galleryModalActive: Object.assign(
                            this.state.galleryModalActive,
                            {
                              [show.id]: true
                            }
                          )
                        })
                      }
                    >
                      Gallery
                    </button>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-narrow is-half">
                    <ReactPlayer url={show.acf["trailer-url"]} width="100%" />
                  </div>
                </div>

                <div
                  className={`modal ${
                    this.state.galleryModalActive[show.id] ? "is-active" : ""
                  }`}
                >
                  <div
                    className="modal-background"
                    onClick={() =>
                      this.setState({
                        galleryModalActive: Object.assign(
                          this.state.galleryModalActive,
                          {
                            [show.id]: false
                          }
                        )
                      })
                    }
                  />
                  <div className="modal-content">
                    <div className="columns">
                      {this.getGalleryLinks(show.acf["landscape-gallery"])
                        .slice(1)
                        .map((img, i) => (
                          <div className="column is-one-third" key={i}>
                            <p className="image is-3by2">
                              <img src={img} alt="" />
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={() =>
                      this.setState({
                        galleryModalActive: Object.assign(
                          this.state.galleryModalActive,
                          {
                            [show.id]: false
                          }
                        )
                      })
                    }
                  />
                </div>
              </Fragment>
            ))}
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
