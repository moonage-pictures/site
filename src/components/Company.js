import React, { Component, Fragment } from "react";
import axios from 'axios'
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import {Loader} from "./common/Loader";

export default class Company extends Component {
  
  state = {
    title: '',
    body: '',
    loading: true
  }
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { data } = await axios({
      url: 'http://3jd.d66.myftpupload.com/wp-json/wp/v2/pages/2',
      method: 'GET'
    })
    this.setState({ body: data.content.rendered, title: data.title.rendered , loading: false})
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
          {this.state.loading && <Loader />}
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{this.state.title}</h1>
                <div className="page-content" dangerouslySetInnerHTML={{__html: this.state.body}}>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
