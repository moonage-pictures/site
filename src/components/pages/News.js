import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

export default class News extends Component {
  state = {
    title: "",
    pressReleases: [],
    loading: true
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data: pressReleases } = await axios({
      url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=5",
      method: "GET"
    });
    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "https://cms.moonagepictures.com/wp-json/wp/v2/pages/486"
    );
    this.setState({ pressReleases, title, loading: false });
  };

  render() {
    const { loading, title, pressReleases } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading && <Loader />}
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>
                {pressReleases.map(pressRelease => (
                  <Fragment key={pressRelease.id}>
                    <div className="page-content">
                      <p>
                        <small>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: moment(pressRelease.date).format(
                                "MMMM D, YYYY"
                              )
                            }}
                          />
                          {pressRelease.acf.publication && (
                            <span>
                              {" "}
                              —{" "}
                              (Read more from the {pressRelease.acf.byline && <span>{pressRelease.acf.byline} </span>}<span><a
                                href={pressRelease.acf.newsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {pressRelease.acf.publication.toUpperCase()}
                              </a> article here)
                            </span></span>)}
                        </small>
                      </p>
                    </div>
                    <h2 className="sub-title">{pressRelease.title.rendered}</h2>
                    <div
                      className="page-content"
                      dangerouslySetInnerHTML={{
                        __html: pressRelease.content.rendered
                      }}
                    />

                    <hr />
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
