import React from "react";
import Heading from "./pages/Heading";
import Corporate from "./pages/Corporate";
import CateringTypes from "./pages/CateringTypes";
import Types from "./pages/Types";
import Assurance from "./pages/Assurance";

const CateringService = () => {
  return (
    <>
      <div className="cateringservice">
         
          <Heading/>
          <Corporate/>
          <CateringTypes/>
          <Types/>
          <Assurance/>
          
      </div>
    </>
  );
};

export default CateringService;
