import React, { useEffect, useState } from "react";
import "./Gallery.css"; // Import your CSS file
import Registr from "../../../homepages/homecomponents/Registr";
import api from "../../../api/api";

const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <h1>Gallery</h1>
        </div>
        <div className="gallery-container">
          <div className="heading">
            <h2>
              Our <span>Gallery</span>
            </h2>
          </div>

          <div className="gallery-grid">
            {imageData.map((item, index) => (
              <div key={index} className="gallery-item">
                {/* Directly setting the src URL */}
                <img src={`${api.defaults.baseURL}/image/${item.imageName}`} alt={item.imageName} />
                <p>{item.imageName}</p>
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
