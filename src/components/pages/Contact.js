import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

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
      "http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/19"
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
              <div className="columns is-centered">
                <div className="column is-two-thirds-desktop ">
                  <h1 className="title is-1 section-header">{title}</h1>
                  <div className="columns">
                    <div className="column is-one-third-desktop">
                      <h3 className="sub-title">Address</h3>
                      <div className="page-content">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: contactInfo.address
                          }}
                        />
                      </div>
                    </div>
                    <div className="column is-one-third-desktop">
                      <h3 className="sub-title">Telephone</h3>
                      <div className="page-content">
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
                      </div>
                    </div>
                    <div className="column is-one-third-desktop">
                      <h3 className="sub-title">Email</h3>
                      <div className="page-content">
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="page-content"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
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
