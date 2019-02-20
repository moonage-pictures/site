import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

export default class Company extends Component {
  state = {
    title: "",
    body: "",
    loading: true
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data } = await axios({
      url: "https://cms.moonagepictures.com/wp-json/wp/v2/pages/2",
      method: "GET"
    });
    console.log("data is: ", data);
    this.setState(
      {
        body: data.content.rendered,
        title: data.title.rendered,
        loading: false,
        companyImage: data.acf.companyImage
      },
      () => console.log("state is: ", this.state)
    );
  };

  render() {
    const { loading, title, body, companyImage } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading && <Loader />}
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>

                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
              <div
                className="column is-two-thirds-desktop is-centered"
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <figure
                  className="image"
                  style={{ width: "50%", height: "50%" }}
                >
                  {companyImage && (
                    <img src={companyImage.url} alt="Moonage Alligator" />
                  )}
                </figure>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
