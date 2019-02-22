import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
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
      url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=4",
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
      "https://cms.moonagepictures.com/wp-json/wp/v2/pages/162"
    );
    this.setState({ shows, title, loading: false });
  };

  getGalleryLinks = galleryInfo =>
    galleryInfo
      .split("src=")
      .map(imgLink =>
        imgLink.substring(1, imgLink.indexOf(imgLink.match(/.jpg|.jpeg|.png/)))
      );

  render() {
    const { shows, loading } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading && <Loader />}
            {shows.map(show => (
              <Fragment key={show.id}>
                <div className="columns is-multiline is-centered is-mobile">
                  {this.getGalleryLinks(show.acf.landscapeGallery)
                    .slice(1)
                    .map((img, i) => (
                      <Fragment key={i}>
                        <div className="column is-one-quarter-desktop is-half-mobile is-one-quarter-tablet">
                          <Link
                            to={{
                              pathname: `shows/${show.showLink}`,
                              state: { show }
                            }}
                          >
                            <figure
                              className="image is-1by1"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={img}
                                alt={`${show.title.rendered} screenshot ${i +
                                  1}`}
                              />
                            </figure>
                          </Link>
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
