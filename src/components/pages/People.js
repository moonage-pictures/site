import React, { useContext, useEffect, Fragment } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import { MoonagePicturesContext } from "../../MoonagePictures";

const People = () => {
  const {
    peopleData: { loading, title, body }
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
            <div className="columns is-centered is-multiline">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>
                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default People