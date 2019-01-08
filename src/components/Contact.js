import React, { Component, Fragment } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class Contact extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <Fragment>
        <Navbar />

        <div className="container">
          <section className="section">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">Contact</h1>
                <div className="columns">
                  <div className="column is-one-third-desktop">
                    <h3 className="sub-title">Address</h3>
                    <p className="body-font">
                      Moonage Pictures <br />
                      3rd Floor <br />
                      181 Wardour St
                      <br /> London <br />
                      W1F 8WZ
                    </p>
                  </div>
                  <div className="column is-one-third-desktop">
                    <h3 className="sub-title">Telephone</h3>
                    <p className="body-font">
                      <a
                        href="tel:+4420 8127 5574"
                        style={{
                          color: "white",
                          borderBottom: "1px solid white"
                        }}
                      >
                        020 8127 5574
                      </a>
                    </p>
                  </div>
                  <div className="column is-one-third-desktop">
                    <h3 className="sub-title">Email</h3>
                    <p className="body-font">
                      <a
                        href="mailto:office@moonagepictures.com"
                        style={{
                          color: "white",
                          borderBottom: "1px solid white"
                        }}
                      >
                        office@moonagepictures.com
                      </a>
                    </p>
                  </div>
                </div>
                <p className="body-font">We are sorry, at the moment we are unable to accept any unsolicited scripts and submissions.</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
