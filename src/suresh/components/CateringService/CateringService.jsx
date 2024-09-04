import React from "react";
import { useEffect } from 'react';
import Heading from "./pages/Heading";
import Corporate from "./pages/Corporate";
import CateringTypes from "./pages/CateringTypes";
import Types from "./pages/Types";
import Assurance from "./pages/Assurance";
import Registr from "../../../homepages/homecomponents/Registr";
const CateringService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cateringservice">
         
          <Heading/>
          <Corporate/> 
           <CateringTypes/> 
          <Types/>
          <Assurance/>
          <Registr/>
      </div>
    </>
  );
};

export default CateringService;
