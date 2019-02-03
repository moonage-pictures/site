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
              size={"5x"}
              color="white"
              style={{ paddingRight: "2rem", marginLeft: "2rem" }}
            />
          </a>
          <a href="https://twitter.com/moonagepictures?lang=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              size={"5x"}
              color="white"
              style={{ paddingRight: "2rem" }}
            />
          </a>
          <a href="https://www.instagram.com/moonagepictures/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              size={"5x"}
              color="white"
              style={{ paddingRight: "2rem" }}
            />
          </a>
        </div>
      </footer>
    );
  }
}
