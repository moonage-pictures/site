import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {

  render() {
    return (
      <footer style={window.location.pathname === '/' || window.location.pathname === '/landing-page/' || window.innerWidth < 1024 ? {position: "static"} :  {position: "fixed"}}>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter" style={{padding: "0.75rem 0 0 0"}}>
            <div className="footer-content">
              <a
                href="https://www.facebook.com/MoonagePics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"4x"}
                  color="white"
                  style={{ paddingRight: "2rem", marginLeft: "2rem" }}
                />
              </a>
              <a
                href="https://twitter.com/moonagepictures?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={"4x"}
                  color="white"
                  style={{ paddingRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/moonagepictures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={"4x"}
                  color="white"
                  style={{ paddingRight: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
        {window.location.pathname !== '/' &&
        <div className="columns">
          <div
            className="column is-half is-offset-one-quarter"style={{marginTop: 0, paddingTop: 0}}
          >
            <p style={{fontSize: ".75rem", margin: 0, padding: 0, textAlign: 'center'}}>
              Copyright Moonage Pictures Limited&#169; {moment().format("YYYY")}. <Link to="/privacy-policy" style={{color: "white"}}>Privacy Policy</Link> <br />
              Designed by{" "}
              <a
                href="http://richardtzanov.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "white"}}
              >
                richardtzanov.com
              </a>
            </p>
          </div>
        </div>
        }
      </footer>
    );
  }
}
