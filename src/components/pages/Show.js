import React, { Component, Fragment } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


export default class Show extends Component {
  state = {
    show: this.props.location.state.show,
    playerLoaded: false,
    imageModalActive: {}
  };

  componentDidMount = () => window.scrollTo(0, 0);


  render() {
    const { show } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{show.title.rendered}</h1>
                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: show.content.rendered }}
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
