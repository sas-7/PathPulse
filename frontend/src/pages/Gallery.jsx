import React from "react";
import CommonSection from "../shared/CommonSection"; // Import CommonSection component
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "../components/Image-gallery/galleryall";

const Gallery = () => {
  return (
    <>
      {/* Common section with title "Gallery" */}
      <CommonSection title="Gallery" />

      {/* Masonry gallery with margin-top */}
      <div style={{ marginTop: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 1, 992: 4 }}>
          <Masonry gutter="1rem">
            {galleryImages.map((item, index) => (
              <img
                className="masonry__img"
                src={item}
                key={index}
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
