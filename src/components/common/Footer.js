import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={
          window.location.pathname === "/" || window.innerWidth < 1024
            ? { position: "static" }
            : { position: "fixed" }
        }
      >
        <div className="columns">
          <div
            className="column is-half is-offset-one-quarter"
          >
            <div className="footer-content" style={{marginTop: `.75rem`}}>
              <a
                href="https://www.facebook.com/MoonagePics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"lg"}
                  color="white"
                  style={{ marginRight: "1.5rem" }}
                />
              </a>
              <a
                href="https://twitter.com/moonagepictures?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={"lg"}
                  color="white"
                  style={{ marginRight: "1.5rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/moonagepictures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={"lg"}
                  color="white"
                  style={{ marginRight: "1.5rem" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="columns">
          <div
            className="column is-half is-offset-one-quarter"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <p
              style={{
                fontSize: ".65rem",
                margin: 0,
                padding: 0,
                textAlign: "center",
              }}
            >
              Copyright Moonage Pictures Limited &#169;{" "}
              {moment().format("YYYY")}.{" "}
              <Link to="/privacy-policy" style={{ color: "white" }}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
