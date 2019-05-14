import React, { Component, Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from "axios";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ReactPlayer from "react-player";
import { Loader } from "../common/Loader";

export default class Show extends Component {
  state = {
    show: this.props.location.show || null,
    img: this.props.location.img || null,
    playerLoaded: false,
    loading: true,
    wideImages: []
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    if (this.state.show) this.getFirstSlide();
    if (!this.state.show) await this.getShow();

    this.setState({ loading: false });
  };

  getFirstSlide = () => {
    let wideImages = this.state.show.acf.wideImages.slice();
    const matchedImg = wideImages.find(
      img => img.description === this.state.img.description
    );

    const startingImage = wideImages.splice(wideImages.indexOf(matchedImg));
    const newImageOrder = [...startingImage, ...wideImages];

    this.setState({ wideImages: newImageOrder }, () => console.log('state', this.state));
  };

  getShow = async () => {
    const { data: show } = await axios({
      url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts/488",
      method: "GET"
    });
    this.setState({ show, wideImages: show.acf.wideImages });
  };

  successState = () => this.setState({ playerLoaded: true });

  render() {
    const { show, playerLoaded, loading } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container fade">
          <section className="section">
            {loading ? (
              <Loader />
            ) : (
              <Fragment>
                <div className="columns is-centered">
                  <div className="column is-three-quarters">
                    <CarouselProvider
                      naturalSlideWidth={16}
                      naturalSlideHeight={9}
                      totalSlides={show.acf.wideImages.length}
                      interval={10000}
                      isPlaying={true}
                    >
                      <div className="columns is-vcentered is-full">
                        {window.innerWidth > 768 && (
                          <div className="column is-narrow">
                            <ButtonBack className="arrow-left" />
                          </div>
                        )}
                        <div className="column">
                          <Slider>
                            {this.state.wideImages.map((img, i) => (
                              <Slide index={i} key={i}>
                                <figure
                                  className="image is-16by9"
                                >
                                  <img src={img.url} alt={img.alt} />
                                </figure>
                              </Slide>
                            ))}
                          </Slider>
                        </div>

                        {window.innerWidth < 769 && (
                          <div className=" mobile-arrows">
                            <ButtonBack className="arrow-left" />
                            <ButtonNext className="arrow-right" />
                          </div>
                        )}

                        {window.innerWidth > 768 && (
                          <div className="column is-narrow">
                            <ButtonNext className="arrow-right" />
                          </div>
                        )}
                      </div>
                    </CarouselProvider>
                  </div>
                </div>
                <div className="columns is-centered is-multiline">
                  <div className="column is-two-thirds-desktop">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <figure
                        className="image"
                        style={{ marginTop: "2rem", width: "65%" }}
                      >
                        <img
                          src={show.acf.bannerImage.url}
                          alt={`${show.title.rendered} screenshot`}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered is-multiline">
                  <div className="column is-two-thirds-desktop ">
                    <div
                      className="page-content"
                      dangerouslySetInnerHTML={{
                        __html: show.content.rendered
                      }}
                    />
                  </div>
                  <div className="column is-two-thirds-desktop is-full-mobile is-full-tablet">
                    {window.innerWidth >= 1024 ? (
                      <div>
                        {!playerLoaded && (
                          <Loader
                            section="trailer"
                            style={{ margin: "0 auto" }}
                          />
                        )}{" "}
                        <div className="fade">
                          <ReactPlayer
                            url={show.acf.trailerUrl}
                            onReady={this.successState}
                            controls
                            width="100%"
                          />
                        </div>
                      </div>
                    ) : (
                      <Fragment>
                        {!playerLoaded && <Loader section="trailer" />}{" "}
                        <div className="fade">
                          <ReactPlayer
                            url={show.acf.trailerUrl}
                            width="100%"
                            onReady={this.successState}
                            controls
                          />
                        </div>
                      </Fragment>
                    )}
                  </div>
                </div>
              </Fragment>
            )}
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
