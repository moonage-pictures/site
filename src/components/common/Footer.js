import React, { Component } from "react";
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
          <a href="https://www.facebook.com/MoonagePics/" target="_blank" rel="noopener noreferrer">
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
          </a>
          <a href="https://twitter.com/moonagepictures?lang=en" target="_blank" rel="noopener noreferrer">
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
          </a>
          <a href="https://www.instagram.com/moonagepictures/" target="_blank" rel="noopener noreferrer">
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
          </a>
        </div>
      </footer>
    );
  }
}
