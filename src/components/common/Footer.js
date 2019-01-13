import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <Link to="https://www.facebook.com/MoonagePics/">
            <FontAwesomeIcon
              icon={faFacebook}
              size={
                window.innerWidth >= 2880 && window.innerHeight >= 1800
                  ? "10x"
                  : (window.innerWidth >= 2304 && window.innerHeight >= 1440) ||
                    (window.innerWidth === 1920 && window.innerHeight === 1200)
                  ? "7x"
                  : "5x"
              }
              color="white"
              style={{ paddingRight: "2rem", marginLeft: "2rem" }}
            />
          </Link>
          <Link to="https://twitter.com/moonagepictures?lang=en">
            <FontAwesomeIcon
              icon={faTwitter}
              size={
                window.innerWidth >= 2880 && window.innerHeight >= 1800
                  ? "10x"
                  : (window.innerWidth >= 2304 && window.innerHeight >= 1440) ||
                    (window.innerWidth === 1920 && window.innerHeight === 1200)
                  ? "7x"
                  : "5x"
              }
              color="white"
              style={{ paddingRight: "2rem" }}
            />
          </Link>
          <Link to="https://www.instagram.com/moonagepictures/">
            <FontAwesomeIcon
              icon={faInstagram}
              size={
                window.innerWidth >= 2880 && window.innerHeight >= 1800
                  ? "10x"
                  : (window.innerWidth >= 2304 && window.innerHeight >= 1440) ||
                    (window.innerWidth === 1920 && window.innerHeight === 1200)
                  ? "7x"
                  : "5x"
              }
              color="white"
              style={{ paddingRight: "2rem" }}
            />
          </Link>
        </div>
      </footer>
    );
  }
}
