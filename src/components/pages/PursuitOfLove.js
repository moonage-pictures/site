import React, { useContext, useEffect, Fragment } from "react";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import { MoonagePicturesContext } from "../../MoonagePictures";

const PursuitOfLove = () => {
  const {
    pursuitOfLoveData: { show, loading },
  } = useContext(MoonagePicturesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <div className="column is-two-thirds-desktop ">
                  <h1 className="title is-1">{show.title.rendered}</h1>
                </div>
              </div>
              <div className="columns is-centered is-multiline">
                <div className="column is-two-thirds-desktop ">
                  <div
                    className="page-content"
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

export default PursuitOfLove