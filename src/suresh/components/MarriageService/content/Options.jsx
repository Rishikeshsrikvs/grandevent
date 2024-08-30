import React from "react";
import marriage1 from "../Marriageimages/marriage2.png";
import marriage2 from "../Marriageimages/marriage3.png";
import marriage3 from "../Marriageimages/marriage4.png";
import marriage4 from "../Marriageimages/marriageornamkutty1.png";
import marriage5 from "../Marriageimages/marriageornamkutty2.png";
import marriage6 from "../Marriageimages/marriageornamkutty3.png";
import marriage7 from "../Marriageimages/marriageornamkutty4.png";
import './Option.css'

const Options = () => {
  return (
    <>
      <div className="option">
        <div className="kutty1">
          <img src={marriage4}  />
        </div>
        <div className="kutty2">
          <img src={marriage5}  />
        </div>
        <div className="kutty3">
          <img src={marriage6}  />
        </div>
        <div className="kutty4">
          <img src={marriage7}  />
        </div>
        <div className="flex-box">
          <div className="box color1">
            <div className="box-item">
              <div className="image">
                <img src={marriage1} />
              </div>
              <h3>SERVICE</h3>
              <p>
                Being the top wedding caterer in Chennai, we offer unparalleled
                service that puts every guest at ease. Our lavish feast and our
                courteous, attentive service provide a lasting good impression,
                whether we are welcoming or thanking the visitors.
              </p>
            </div>
          </div>
          <div className="box color2">
            <div className="box-item">
              <div className="image">
                <img src={marriage2} />
              </div>
              <h3>MENU OPTION</h3>
              <p>
              we can provide a wide range of meal selections to suit your preferences because our chefs have years of experience. We are regarded as the greatest wedding caterer in Tamilnadu and as premium caterers in the state. We also assist with menu planning.
              </p>
            </div>
          </div>
          <div className="box color3">
            <div className="box-item">
              <div className="image">
                <img src={marriage3} />
              </div>
              <h3>Reputation</h3>
              <p>
              Regarding meal quality, hygiene, service, and delivery, we enjoy an exceptional reputation. We are unquestionably the best wedding caterers in Chennai, whether you are searching for recommendations or based only on internet evaluations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
