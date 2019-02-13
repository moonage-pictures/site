import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import logo from "../../assets/images/logo.svg";

export default class Home extends Component {
  render() {
    return (
      <Fragment>

        <section class="hero is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered" style={{marginTop: "-5rem"}}>
              <img src={logo} alt="Moonage logo" style={{height: "35vh", width: "35vh"}}/>

              <h1 class="title is-1 section-header" style={{marginTop: 0, fontSize: "1.25rem", fontWeight: 700}}>
                Coming soon
              </h1>
              <h2 class="subtitle" style={{textTransform: "none", fontSize: "1rem"}}>
                181 Wardour Street, London, W1F 8WZ<br/>

                <a
                  href={`mailto:office@moonagepictures.com`}
                  style={{
                    color: "white"
                  }}
                >office@moonagepictures.com</a><br/>

                020 8127 5574<br/><br/>
                We are sorry, at the moment we are unable to accept unsolicited scripts and submissions.
              </h2>
            </div>
          </div>
        </section>
        {/* <div className="home-wrapper">
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

<div className="circle blue blank-one" />
<div className="circle yellow blank-two" />
<div className="circle white blank-three" />
<div className="circle red blank-four" />
<div className="circle pink blank-six" />
<div className="circle yellow blank-seven" />

<img className="home-logo" src={logo} alt="Moonage logo" />

<Link to="/contact">
<div className="circle green contact">
<h1 className="inner-circle">Contact</h1>
</div>
</Link>
<Link to="/daydream">
<div className="circle yellow daydream">
<h1 className="inner-circle">Day<br/>Dream</h1>
</div>
</Link>

<Link to="/people">
<div className="circle white people">
<h1 className="inner-circle">People</h1>
</div>
</Link>

<Link to="/shows">
<div className="circle pink shows">
<h1 className="inner-circle">Shows</h1>
</div>
</Link>
</div>
<Footer /> */}
</Fragment>
);
}
}
