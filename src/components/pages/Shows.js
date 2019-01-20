import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

export default class Shows extends Component {
  state = {
    shows: [],
    title: "",
    loading: true
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data: shows } = await axios({
      url: "http://3jd.d66.myftpupload.com/wp-json/wp/v2/posts?categories=4",
      method: "GET"
    });

    shows.map(
      show =>
        (show.showLink = show.title.rendered
          .toLowerCase()
          .split(" ")
          .join("-"))
    );

    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/162"
    );
    this.setState({ shows, title, loading: false });
    console.log("state in shows is: ", this.state);
  };

  getGalleryLinks = galleryInfo =>
    galleryInfo
      .split("src=")
      .map(imgLink =>
        imgLink.substring(1, imgLink.indexOf(imgLink.match(/.jpg|.jpeg|.png/)))
      );

  successState = () => this.setState({ playerLoaded: true });

  render() {
    const { playerLoaded, shows } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {shows.map(show => (
              <Fragment key={show.id}>
                <div className="columns is-centered is-multiline">
                  <div className="column is-half-desktop ">
                    <h1
                      className="title is-1 section-header"
                      style={{ textAlign: "center" }}
                    >
                      {show.title.rendered}
                    </h1>
                  </div>
                </div>
                <div className="columns is-multiline is-centered">
                  <div className="column is-one-third">
                    <p className="image is-1by1" style={{ cursor: "pointer" }}>
                      <img
                        src={show.acf.bannerImage.url}
                        alt={`${show.title.rendered} screenshot`}
                      />
                    </p>
                  </div>
                  <div className="column is-one-third">
                    {window.innerWidth >= 1024 ? (
                      <div
                        className="image is-1by1"
                        style={{ paddingTop: "1rem" }}
                      >
                        {!playerLoaded && <Loader section="trailer" />}{" "}
                        <div className="fade">
                        <ReactPlayer
                          url={show.acf.trailerUrl}
                          onReady={this.successState}
                          controls
                          style={{ height: "25vw", width: "25vw" }}
                        />
                        </div>
                      </div>
                    ) : (
                      <Fragment>
                      {!playerLoaded && <Loader section="trailer" />}{" "}
                      <div className="fade">
                        <ReactPlayer
                          url={show.acf.trailerUrl}
                          width="100%"
                          onReady={this.successState}
                          controls
                        />
                      </div>
                      </Fragment>
                    )}
                  </div>
                  {this.getGalleryLinks(show.acf.landscapeGallery)
                    .slice(1)
                    .map((img, i) => (
                      <Fragment key={i}>
                        <div className="column is-one-third">
                          <p
                            className="image is-1by1"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={img}
                              alt={`${show.title.rendered} screenshot ${i + 1}`}
                            />
                          </p>
                        </div>
                      </Fragment>
                    ))}
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
