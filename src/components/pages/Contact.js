import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import GoogleMap from "../common/GoogleMap";

export default class Contact extends Component {
  state = {
    title: "",
    body: "",
    contactInfo: {},
    loading: true
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data } = await axios.get(
      "https://cms.moonagepictures.com/wp-json/wp/v2/pages/19"
    );
    this.setState({
      title: data.title.rendered,
      contactInfo: { ...data.acf },
      body: data.content.rendered,
      loading: false
    });
  };

  render() {
    const { loading, title, body, contactInfo } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading ? (
              <Loader />
            ) : (
              <div className="columns is-centered is-multiline">
                <div className="column is-two-thirds-desktop ">
                  <h1 className="title is-1 section-header">{title}</h1>
                  <div className="columns is-multiline">
                    <div
                      className="column is-one-third-desktop"
                      
                    >
                      <div className="page-content" style={{ display: "flex", flexFlow: "column nowrap", height: "100%" }}>
                        <p
                          style={{ marginTop: 0 }}
                          dangerouslySetInnerHTML={{
                            __html: contactInfo.address
                          }}
                        />
                        <p>
                          <a
                            href={`tel:${contactInfo.telephone}`}
                            style={{
                              color: "white"
                            }}
                          >
                            {contactInfo.telephone}
                          </a>
                        </p>
                        <p>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            style={{
                              color: "white"
                            }}
                          >
                            {contactInfo.email}
                          </a>
                        </p>
                        <div
                          style={{ marginTop: "auto"}}
                          dangerouslySetInnerHTML={{ __html: body }}
                        />
                      </div>
                    </div>

                    <div className="column is-two-thirds-desktop">
                      <GoogleMap
                        location={{ lat: 51.515108, lng: -0.1376354 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
