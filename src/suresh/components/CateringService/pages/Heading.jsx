import React from "react";
import circle1 from "../images/ornament1.jpg";
import circle2 from "../images/ornament2.jpg";
import circle3 from "../images/ornament3.jpg";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="Catservheading">
      <div className="catservcontainer">
        <h1>Chennai's top catering company</h1>
        <div className="circle1">
          <img src={circle1} />
        </div>
        <div className="circle2">
          <img src={circle2} />
        </div>
        <div className="circle3">
          <img src={circle3} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
