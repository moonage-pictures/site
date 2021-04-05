import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Loader } from "../common/Loader";
import { MoonagePicturesContext } from "../../MoonagePictures";

export default () => {
  const {
    showsData: { shows, loading }
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
            shows.map(show => (
              <Fragment key={show.id}>
                <div className="columns is-multiline is-centered is-mobile">
                  {show.acf.squareImages.map((img, i) => (
                    <Fragment key={i}>
                      <div className="column is-one-fifth-desktop is-half-mobile is-one-fifth-tablet">
                        <Link
                          to={{
                            pathname: `shows/${img.description}`,
                            show,
                            img
                          }}
                        >
                          <figure
                            className="image is-1by1"
                            style={{ cursor: "pointer" }}
                          >
                            <img src={img.url} alt={img.alt} />
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
