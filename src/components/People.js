import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class People extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data } = await axios({
      url: "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/497",
      method: "GET"
    });
    this.setState({ title: data.title.rendered, body: data.content.rendered });
  };

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

                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: this.state.body }}
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
