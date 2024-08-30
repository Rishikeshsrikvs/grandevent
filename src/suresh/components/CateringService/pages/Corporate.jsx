import React from "react";
import corp from "../images/corporate.png";
import "./Corporate.css";
import fullvorenament from "../ornaments/ornament8.png";
import mobvieworen from "../ornaments/ornament8.png";

const Corporate = () => {
  return (
    <section className="corporate">
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="fullviewornam">
            <img src={fullvorenament} />
          </div>
          <div className="mobviewornam">
            <img src={mobvieworen} />
          </div>
          <img src={corp} />
        </div>
        <div className="wrapper-right">
          <h3>CORPORATE CATERING</h3>
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

export default Corporate;
