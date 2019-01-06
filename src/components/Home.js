import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './common/Footer'
import logo from '../assets/images/logo.svg'

export default class Home extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="home-wrapper">
          <Link to="/company">
            <div className="circle red company">
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
          <div className="circle blue blank-six" />
          <div className="circle blue blank-seven" />

            <div className="circle pink logo-pos">
              <img className="home-logo" src={logo} alt="Moonage logo"/>
            </div>

          <Link to="/contact">
            <div className="circle green contact">
              <h1 className="inner-circle">Contact</h1>
            </div>
          </Link>
          <Link to="/daydream">
          <div className="circle yellow daydream">
          <h1 className="inner-circle">Daydream</h1>
          </div>
          </Link>

          <Link to="/people">
            <div className="circle white people">
              <h1 className="inner-circle">People</h1>
            </div>
          </Link>

          <Link to="/shows">
            <div className="circle red shows">
              <h1 className="inner-circle">Shows</h1>
            </div>
          </Link>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
