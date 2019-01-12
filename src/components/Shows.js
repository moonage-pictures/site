import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { Loader } from './common/Loader'

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
    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/162"
    );
    this.setState({ shows, title, loading: false });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
          {this.state.loading && <Loader />}
            <div className="columns is-centered is-multiline">
              <div className="column is-full-width">
                <h1 className="title is-1 section-header">
                  {this.state.title}
                </h1>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              {this.state.shows.map(show => (
                <div className="column is-one-third" key={show.id}>
                  <Link
                    to={{
                      pathname: `shows/${show.title.rendered.toLowerCase()}`,
                      state: { show }
                    }}
                  >
                    <figure className="image is-16by9 show-thumbnail">
                      <img
                        className=""
                        src={show.acf["title-banner"].url}
                        alt={show.acf["title-banner"].alt}
                      />
                    </figure>
                    <h4
                      className="subtitle is-4 sub-title"
                      style={{
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                    >
                      {show.title.rendered}
                    </h4>
                  </Link>
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
