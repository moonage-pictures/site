import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class News extends Component {
  state = {
    title: "",
    pressReleases: []
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data: pressReleases } = await axios({
      url: "http://3jd.d66.myftpupload.com/wp-json/wp/v2/posts?categories=5",
      method: "GET"
    });
    const {
      data: {
        title: { rendered: title }
      }
    } = await axios.get(
      "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/486"
    );
    this.setState({ pressReleases, title });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">
                  {this.state.title}
                </h1>
                {this.state.pressReleases.map(pressRelease => (
                  <Fragment key={pressRelease.id}>
                    <h3 className="sub-title">{pressRelease.title.rendered}</h3>
                    <div
                      className="page-content"
                      dangerouslySetInnerHTML={{
                        __html: pressRelease.content.rendered
                      }}
                    />
                    <div className="page-content">
                      <p>
                        <small>
                          <em>
                            Published on:{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: moment(pressRelease.date).format(
                                  "MMMM Do YYYY, h:mm a"
                                )
                              }}
                            />
                          </em>
                        </small>
                      </p>
                    </div>
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
