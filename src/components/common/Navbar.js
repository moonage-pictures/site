import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main-naivagation">
        <div className="navbar-brand">
          <a
            className={`navbar-burger${
              this.state.navbarOpen ? " is-active" : ""
            }`}
            role="button"
            href="#menu"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={`navbar-menu${this.state.navbarOpen ? " is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link
              to="/company"
              className={`navbar-item company-nav ${
                this.props.location.pathname === "/company"
                  ? "company-active"
                  : ""
              }`}
            >
              Company
            </Link>
            <Link
              to="/news"
              className={`navbar-item news-nav ${
                this.props.location.pathname === "/news" ? "news-active" : ""
              }`}
            >
              News
            </Link>
            <Link
              to="/shows"
              className={`navbar-item shows-nav ${
                this.props.location.pathname === "/shows" || this.props.location.pathname.includes('/shows/') ? "shows-active" : ""
              }`}
            >
              Shows
            </Link>
            <Link
              to="/people"
              className={`navbar-item people-nav ${
                this.props.location.pathname === "/people"
                  ? "people-active"
                  : ""
              }`}
            >
              People
            </Link>
            <Link
              to="/daydream"
              className={`navbar-item daydream-nav ${
                this.props.location.pathname === "/daydream"
                  ? "daydream-active"
                  : ""
              }`}
            >
              Dream
            </Link>
            <Link
              to="/contact"
              className={`navbar-item contact-nav ${
                this.props.location.pathname === "/contact"
                  ? "contact-active"
                  : ""
              }`}
            >
              Contact
            </Link>
            <Link to="/">
              <img
                src={logo}
                className="navbar-logo"
                alt="Moonage Pictures Logo"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar)