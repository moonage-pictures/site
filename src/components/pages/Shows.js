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

    console.log('shows: ', shows)

    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "https://cms.moonagepictures.com/wp-json/wp/v2/pages/162"
    );
    this.setState({ shows, title, loading: false });
  };

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
                  {show.acf.squareImages
                    .map((img, i) => (
                      <Fragment key={i}>
                        <div className="column is-one-quarter-desktop is-half-mobile is-one-quarter-tablet">
                          <Link
                            to={{
                              pathname: `shows/${show.slug}`,
                              show,
                              img
                            }}
                          >
                            <figure
                              className="image is-1by1"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={img.url}
                                alt={img.alt}
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
