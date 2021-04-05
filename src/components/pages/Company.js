import React, { useEffect, Fragment, useContext } from "react";
import { MoonagePicturesContext } from "../../MoonagePictures";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

const Company = () => {
  const {
    companyData: { loading, title, body, companyImage }
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
              <div
                className="column is-two-thirds-desktop is-centered"
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <figure
                  className="image"
                  style={{ width: "50%", height: "50%" }}
                >
                  {companyImage && (
                    <img src={companyImage.url} alt="Moonage Alligator" />
                  )}
                </figure>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Company