import React, { useContext, useEffect, Fragment } from "react";

import Show from "../common/Show"
import { MoonagePicturesContext } from "../../MoonagePictures";

const PursuitOfLove = () => {
  const {
    pursuitOfLoveData: { show, loading, wideImages },
  } = useContext(MoonagePicturesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <Show show={show} wideImages={wideImages} loading={loading} />
  );
};

export default PursuitOfLove