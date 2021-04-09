import React, { useEffect, useContext, Fragment } from "react";
import { MoonagePicturesContext } from "../../MoonagePictures";
import moment from "moment";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";

const News = () => {
  const {
    newsData: { loading, title, pressReleases }
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
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop ">
                <h1 className="title is-1 section-header">{title}</h1>
                {pressReleases.map(pressRelease => (
                  <Fragment key={pressRelease.id}>
                    <div className="page-content">
                      <p>
                        <small>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: moment(pressRelease.date).format(
                                "MMMM D, YYYY"
                              )
                            }}
                          />
                          {pressRelease.acf.publication && (
                            <span>
                              {" "}
                              — (Read more from the{" "}
                              {pressRelease.acf.byline && (
                                <span>{pressRelease.acf.byline} </span>
                              )}
                              <span>
                                <a
                                  href={pressRelease.acf.newsLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {pressRelease.acf.publication.toUpperCase()}
                                </a>{" "}
                                article here)
                              </span>
                            </span>
                          )}
                        </small>
                      </p>
                    </div>
                    <h2 className="sub-title">{pressRelease.title.rendered}</h2>
                    <div
                      className="page-content"
                      dangerouslySetInnerHTML={{
                        __html: pressRelease.content.rendered
                      }}
                    />

                    <hr />
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default News