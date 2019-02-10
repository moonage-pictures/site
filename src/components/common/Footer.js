import React, { Component } from "react";
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
      <footer style={window.location.pathname === '/' || window.innerWidth < 1024 ? {position: "static"} :  {position: "fixed"}}>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="footer-content">
              <a
                href="https://www.facebook.com/MoonagePics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"5x"}
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
                  size={"5x"}
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
                  size={"5x"}
                  color="white"
                  style={{ paddingRight: "2rem" }}
                />
              </a>
            </div>
          </div>
          {window.location.pathname !== '/' && 
          <div
            className="column"
            style={{
              display: "flex",
              alignContent: "flex-end",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              verticalAlign: "flex-end"
            }}
          >
            <p style={{fontSize: ".75rem"}}>
              Copyright Moonage Pictures&#169; {moment().format("YYYY")} <br />
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
          </div>}
        </div>
      </footer>
    );
  }
}
