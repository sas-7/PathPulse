import React from "react";
import CommonSection from "../shared/CommonSection"; // Import CommonSection component
import LocationMap from "../shared/LocationMap";

const location = () => {
  return (
    <>
      <CommonSection title="Route" />
      <div style={{ marginTop: "10px" }}>
        <LocationMap />
      </div>
    </>
  );
};

export default location;
