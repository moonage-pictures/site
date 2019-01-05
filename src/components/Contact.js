import React, { Component, Fragment } from "react";
import Navbar from './common/Navbar'

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="container">
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
          <h2 className="title is-2">Address</h2>
            <p className="body-font">
            181 Wardour St<br/> Soho<br/> London W1F 8WZ
            </p>
            </div>
            <div className="column is-one-third-desktop">
            <h2 className="title is-2">Telephone</h2>
            <p className="body-font"><a href="tel:+4420 8127 5574" style={{color: "white"}}>
            020 8127 5574
            </a></p>
            </div>
            <div className="column is-one-third-desktop">
            <h2 className="title is-2">Email</h2>
            <p className="body-font"><a href="mailto:office@moonagepictures.com" style={{color: "white"}}>
            office@moonagepictures.com
            </a></p>
            </div>
        </div>
        </section>
      </div>
      </Fragment>
    );
  }
}
