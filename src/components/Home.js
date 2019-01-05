import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './common/Footer'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-wrapper">
          <Link to="company">
            <div className=" circle red company">
              <h1 className="inner-circle">Company</h1>
            </div>
          </Link>
          <div id="spacer" />
          <Link to="/news">
            <div className="circle blue news">
              <h1 className="inner-circle">News</h1>
            </div>
          </Link>

          <div className="circle yellow blank-one" />
          <div className="circle green blank-two" />
          <div className="circle white blank-three" />
          <div className="circle pink blank-four" />
          <div className="circle yellow blank-five" />
          <div className="circle blue blank-six" />
          <div className="circle green blank-seven" />

          <Link to="/shows">
            <div className="circle pink shows">
              <h1 className="inner-circle">Shows</h1>
            </div>
          </Link>

          <Link to="/contact">
            <div className="circle white contact">
              <h1 className="inner-circle">Contact</h1>
            </div>
          </Link>

          <Link to="/people">
            <div className="circle pumpkin people">
              <h1 className="inner-circle">People</h1>
            </div>
          </Link>

          <Link to="/daydream">
            <div className="circle red daydream">
              <h1 className="inner-circle">Daydream</h1>
            </div>
          </Link>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
