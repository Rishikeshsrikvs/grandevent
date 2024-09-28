import React, { useEffect, useState } from "react";
import "./Gallery.css"; // Import your CSS file
import Registr from "../../../homepages/homecomponents/Registr";
import api from "../../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await api.get("/image"); // No need for authorization header
      setImageData(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <>
      <div className="Gallerypart">
        <div className="galleryhero">
          <h1 data-aos="zoom-in">Gallery</h1>
        </div>
        <div className="gallery-container">
          <div className="heading">
            <h2 data-aos="zoom-out">
              Our <span>Gallery</span>
            </h2>
          </div>

          <div className="gallery-grid">
            {imageData.map((item, index) => (
              <div key={index} className="gallery-item" data-aos="flip-up">
                {/* Directly setting the src URL */}
                <img src={`${api.defaults.baseURL}/image/${item.imageName}`} alt={item.imageName} />
                <p>{item.imageTitle}</p>
              </div>
            ))}
          </div>
        </div>
        <Registr />
      </div>
    </>
  );
};

export default Gallery;
