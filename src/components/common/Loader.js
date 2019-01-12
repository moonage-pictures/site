import React from "react";

const Loader = ({section}) => {
  return (
    <div className="columns is-centered" style={{position: "absolute", width: "100%", marginTop: "2rem"}}>
      <div className="column is-half">
          <h2 className="title is-2">
            Loading {section}...
          </h2>
      </div>
    </div>
  );
};

export { Loader };
