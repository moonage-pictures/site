import React, { Component, Fragment } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default class Company extends Component {
  
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <section className="section">
          
            <div className="columns is-centered">
           
              <div className="column is-two-thirds-desktop ">
              <h1 className="section-header">Company</h1>
                <p className="body-font">
                  Moonage Pictures was founded in March 2018 by former BBC Drama
                  Commissioner Matthew Read, Will Gould (Co-MD Tiger Aspect) and
                  Frith Tiplady (Co-MD Tiger Aspect Drama). Together they are
                  award-winning programme-makers, each with a proven track
                  record in delivering distinctive, returnable series to both
                  domestic and international audiences. They offer a combination
                  of editorial and production skills, as well as fully
                  understanding the needs of both programme sellers and buyers.
                  They have produced, between them, dramas including{" "}
                  <em>Peaky Blinders</em>, <em>Ripper Street</em>,{" "}
                  <em>Fortitude</em>,<em>Marvellous</em> and{" "}
                  <em>The Good Karma Hospital</em>.{" "}
                </p>
                <p className="body-font">
                  At Moonage Pictures they are focused on creating, original,
                  unconventional, inventive programming. Their first production
                  is <em>Curfew</em>, an eight-part series created and written
                  by Matthew that will be launching on Sky One in February 2019.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
