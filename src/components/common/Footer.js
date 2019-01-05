import React, { Component } from "react";
import {Link } from 'react-router-dom'
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
        <Link to="https://facebook.com">
          <FontAwesomeIcon
            icon={faFacebook}
            size="5x"
            color="white"
            style={{ paddingRight: "2rem" }}
          />
        </Link>
        <Link to="https://twitter.com/moonagepictures?lang=en">
          <FontAwesomeIcon
            icon={faTwitter}
            size="5x"
            color="white"
            style={{ paddingRight: "2rem" }}
          />
        </Link>
        <Link to="https://www.instagram.com/moonagepictures/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="5x"
            color="white"
            style={{ paddingRight: "2rem" }}
          />
        </Link>
        </div>
      </footer>
    );
  }
}
