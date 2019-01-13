import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

export default class Daydream extends Component {
  state = {
    title: "",
    body: "",
    loading: true
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data } = await axios({
      url: "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/160",
      method: "GET"
    });
    this.setState({
      title: data.title.rendered,
      body: data.content.rendered,
      loading: false
    });
  };

  render() {
    const { loading, title, body } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading && <Loader />}
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>
                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
