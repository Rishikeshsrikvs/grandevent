import React from "react";
import imageright from "../images/Rectangle1.png";
import image2 from "../images/Rectangle3.png";
import image3 from "../images/Rectangle6.png";
import image4 from "../images/Rectangle7.png";
import ornament1 from "../ornaments/ornament1.png";
import ornament2 from "../ornaments/ornament2.png";
import ornament3 from "../ornaments/ornament3.png";
import ornament4 from "../ornaments/ornament4.png";
import ornament5 from "../ornaments/ornament5.png";
import ornament6 from "../ornaments/ornament6.png";
import mobviewornam1 from "../ornaments/ornammob1.png";
import mobviewornam2 from "../ornaments/ornammob2.png";
import mobviewornam3 from "../ornaments/ornammob3.png";
import mobviewornam4 from "../ornaments/ornament4.png";
import './Types.css'

const Types = () => {
  return (
    <section className="types">
      <div className="types-container">
        <div className="ornament1">
            <img src={ornament1} />
        </div>
        <div className="ornament2">
            <img src={ornament2} />
        </div>
        <div className="ornament3">
            <img src={ornament3} />
        </div>
        <div className="ornament4">
            <img src={ornament4} />
        </div>
        <div className="ornament5">
            <img src={ornament6} />
        </div>
        <div className="mobviewornament1">
            <img src={mobviewornam1} />
        </div>
        <div className="mobviewornament2">
            <img src={mobviewornam2} />
        </div>
        <div className="mobviewornament3">
            <img src={mobviewornam3} />
        </div>
        <div className="mobviewornament4">
            <img src={mobviewornam4} />
        </div>
        <div className="mobviewornament5">
            <img src={mobviewornam4} />
        </div>
        
        <div className="text">
          <h3>BIRTHDAY CATERING</h3>
          <p>
            We can accommodate the needs of every corporate event thanks to our
            300+ event management experience. We guarantee a spectacular success
            for your event with our talented chefs, inventive culinary
            presentation, and extensive menu.
          </p>
        </div>
        <div className="image-section">
          <img src={imageright} className="image-right" />
        </div>
        
      </div>
      <div className="types-container">
        <div className="image-section">
          <img src={image2} className="image-right" />
        </div>
        <div className="text">
          <h3>special occasion CATERING</h3>
          <p>
            We can accommodate the needs of every corporate event thanks to our
            300+ event management experience. We guarantee a spectacular success
            for your event with our talented chefs, inventive culinary
            presentation, and extensive menu.
          </p>
        </div>
        <div className="ornament6">
          <img src={ornament5}  />
        </div>
        <div className="ornament7">
          <img src={ornament5}  />
        </div>
        <div className="mobviewornament8">
          <img src={ornament5}  />
        </div>
        <div className="mobviewornament9">
          <img src={ornament5}  />
        </div>
      </div>
      <div className="types-container">
        <div className="text">
          <h3>baby shower catering</h3>
          <p>
            We can accommodate the needs of every corporate event thanks to our
            300+ event management experience. We guarantee a spectacular success
            for your event with our talented chefs, inventive culinary
            presentation, and extensive menu.
          </p>
        </div>
        <div className="image-section">
          <img src={image3} className="image-right" />
        </div>
      </div>
      <div className="types-container">
        <div className="image-section">
          <img src={image4} className="image-right" />
        </div>
        <div className="text">
          <h3>puberty CATERING</h3>
          <p>
            We can accommodate the needs of every corporate event thanks to our
            300+ event management experience. We guarantee a spectacular success
            for your event with our talented chefs, inventive culinary
            presentation, and extensive menu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Types;
