import React, { useEffect, useContext, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import { MoonagePicturesContext } from "../../MoonagePictures";
import { NUMBER_OF_IMAGES } from "../../constants";

const Shows = () => {
  const {
    showsData: { shows, loading },
  } = useContext(MoonagePicturesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [displayImages, setDisplayImages] = useState(false);

  useEffect(() => {
    if (imagesLoaded === NUMBER_OF_IMAGES) setDisplayImages(true);
  }, [imagesLoaded]);

  return (
    <Fragment>
      <Navbar />
      <div className="container fade">
        <section className="section">
          {loading ? (
            <Loader />
          ) : (
            shows.map((show) => (
              <Fragment key={show.id}>
                {!displayImages && <Loader />}
                <div className="columns is-multiline is-centered is-mobile">
                  {show.acf.squareImages.map((img, i) => (
                    <Fragment key={i}>
                      <div
                        className={`column is-one-fifth-desktop is-half-mobile is-one-fifth-tablet fade ${
                          displayImages ? "" : `is-hidden`
                        }`}
                      >
                        <Link
                          to={{
                            pathname: `shows/${img.description}`,
                            show,
                            img,
                          }}
                        >
                          <figure
                            className="image is-1by1"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              onLoad={() => setImagesLoaded(imagesLoaded + 1)}
                              src={img.url}
                              alt={img.alt}
                            />
                          </figure>
                        </Link>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Shows;
