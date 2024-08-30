import React from "react";
import "./HeroSection.css";
import marriageimage1 from "../Marriageimages/Marriageimage.png";
import ornam1 from "../Marriageimages/ellipse2.png"
import ornam2 from "../Marriageimages/marriageornam.png"

const Herosection = () => {
  return (
    <>
      <div class="hero-section">
        <div class="sub-container">
          <div class="left-div">
            <h1>MARRIAGE SERVICE</h1>
            <p>
              Grand Events A to Z Catering Service takes pride in being a
              premium catering service that consistently meets and exceeds
              client expectations. Having served more than a thousand satisfied
              clients and participated in events throughout Tamil Nadu, we have
              established an unrivaled reputation for providing exceptional
              service and mouthwatering food.
            </p>
          </div>
          <div class="right-div">
            <div className="image-container">
              <img src={marriageimage1} alt="Hero Image" />
            </div>
            <div className="circle">
                <img src={ornam1}  />
                
            </div>
            <div className="circle circle2">
                <img src={ornam2}  />
                
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
