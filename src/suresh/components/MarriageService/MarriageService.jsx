import React from "react";
import Assurance from "../CateringService/pages/Assurance";
import Header from "./content/Header";
import CardGrid from "../service/CardGrid.jsx";
import Herosection from "./content/Herosection.jsx";
import Options from "./content/Options.jsx";
import Registr from "../../../homepages/homecomponents/Registr.jsx";
const MarriageService = () => {
  return (
    <>
      <div className="marriageService">
        <Header />
        <Herosection />
        <CardGrid />
        <Options/>
        <Assurance />
        <Registr/>
      </div>
    </>
  );
};

export default MarriageService;
