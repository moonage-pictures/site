import React, { useContext, useState, useEffect, Fragment } from "react";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ReactPlayer from "react-player";
import { Loader } from "../common/Loader";
import { MoonagePicturesContext } from "../../MoonagePictures";

export default () => {
  const {
    intergalacticData: { show, loading },
  } = useContext(MoonagePicturesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [playerLoaded, setPlayerLoaded] = useState(false);

  const successState = () => setPlayerLoaded(true)

  return (
    <Fragment>
      <Navbar />
      <div className="container fade">
        <section className="section">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
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

              <div className="column is-two-thirds-desktop is-full-mobile is-full-tablet">
                {window.innerWidth >= 1024 ? (
                  <div>
                    {!playerLoaded && (
                      <Loader section="trailer" style={{ margin: "0 auto" }} />
                    )}{" "}
                    <div className="fade">
                      <ReactPlayer
                        url={show.acf.trailerUrl}
                        onReady={successState}
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
                        onReady={successState}
                        controls
                      />
                    </div>
                  </Fragment>
                )}
              </div>
              <div className="columns is-centered is-multiline">
                <div className="column is-two-thirds-desktop ">
                  <div
                    className="page-content-centered"
                    dangerouslySetInnerHTML={{
                      __html: show.content.rendered,
                    }}
                  />
                </div>
              </div>
            </Fragment>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};
