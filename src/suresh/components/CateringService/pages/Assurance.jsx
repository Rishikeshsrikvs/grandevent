import React from "react";
import assur1 from "../Assureimage/Guarantee.png";
import assur2 from "../Assureimage/Customer.png";
import assur3 from "../Assureimage/CoastGuard.png";
import "./Assurance.css"

const Assurance = () => {
  return (
    <div className="assurance">
      <div className="flex-box">
        <div className="box">
          <img src={assur1} />
          <p>Quality of food</p>
        </div>
        <div className="box">
          <img src={assur2} />
          <p>experience</p>
        </div>
        <div className="box">
          <img src={assur3} />
          <p>Reputation</p>
        </div>
      </div>
    </div>
  );
};

export default Assurance;
