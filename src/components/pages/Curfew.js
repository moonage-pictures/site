import React, { useContext, useEffect } from "react";

import Show from "../common/Show";
import { MoonagePicturesContext } from "../../MoonagePictures";

const Curfew = () => {
  const {
    curfewData: { show, wideImages, loading },
  } = useContext(MoonagePicturesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Show show={show} wideImages={wideImages} loading={loading} />;
};

export default Curfew;
