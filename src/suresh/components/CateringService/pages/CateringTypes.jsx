import React from "react";
import cardpattern from "../images/card pattern.png";
import omv1 from "../ornaments/ornamentmob1.png";
import './CateringTypes.css';

const CateringTypes = () => {
  return (
    <section className="cateringtypes">
     
      <div className="wrapper-container">
        <div className="wrapper-left">
          <h3>WEDDING CATERING</h3>
          <p>
            Grand Events A to Z Catering Service takes pride in being a premium
            catering service that consistently meets and exceeds client
            expectations. Having served more than a thousand satisfied clients
            and participated in events throughout Tamil Nadu, we have
            established an unrivaled reputation for providing exceptional
            service and mouthwatering food.
          </p>
        </div>
        <div className="wrapper-right">
          <div className="wrap-container">
            <img src={cardpattern} alt="" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CateringTypes;
