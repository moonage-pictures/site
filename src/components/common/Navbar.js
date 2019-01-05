import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "../../index.css";

export default class Navbar extends Component {

  state = {
    navbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }


  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-naivagation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} className="logo" alt="Moonage Pictures Logo" />
          </Link>

          <a
          className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
            role="button"
            href="#"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/news" className="navbar-item">News</Link>
          </div>
        </div>
      </nav>
    );
  }
}
