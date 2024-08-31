import React from "react";
import pic1 from "../galleryimage/gallery1.png";
import pic2 from "../galleryimage/gallery2.png";
import pic3 from "../galleryimage/gallery3.png";
import pic4 from "../galleryimage/gallery4.png";
import pic5 from "../galleryimage/gallery5.png";
import pic6 from "../galleryimage/gallery6.png";
import pic7 from "../galleryimage/gallery7.png";
import pic8 from "../galleryimage/gallery8.png";
import pic9 from "../galleryimage/gallery9.png";
import design from "../galleryimage/design.png";

import "./Gallery.css"; // Import your CSS file

const images = [
  { src: pic1, alt: "BANANA LEAF SERVING METHOD" },
  { src: pic2, alt: "BUFFET SERVING METHOD" },
  { src: pic3, alt: "BUFFET DINING STYLE" },
  { src: pic4, alt: "FOOD DRINK STALLS" },
  { src: pic5, alt: "FOOD WARMER SERVICE" },
  { src: pic6, alt: "COUPLE DINING" },
  { src: pic7, alt: "FOOD SERVICE" },
  { src: pic8, alt: "FOOD DISPLAY" },
  { src: pic9, alt: "ATTRACTIVE ACTIVITIES" },
];

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="hero">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-container">
          <div className="heading">
            <h2>
              Our <span>Gallery</span>
            </h2>
          </div>
          
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt} />
                <p>{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
