import React from "react";
import "./Connect.css";
import QR from "../images/Qr.png";
import lefttop from "../images/connectimg.png";

const Connect = () => {
  return (
    <>
      <div className="connect">
        <div className="connect-container">
          <div className="left-top">
            <img src={lefttop} /> 
          </div>

          <div className="heading">
            <h2>
              let’s <span>Connect</span>
            </h2>
          </div>
          <div className="map-container">
            <div className="map-inner-container">
              <div className="map-column">
                <div className="social-box">
                  <h4>instagram</h4>
                  <div className="Qr-img">
                    <img src={QR} />
                  </div>
                </div>
                <div className="address-box">
                 
                  <div class="icon">
                    <ul>
                      <li>
                        <span>
                          <i class="fa-solid fa-map-location-dot"></i>
                        </span>
                      </li>
                      <li></li>
                      <li>
                        <span>
                          <i class="fa-solid fa-envelope"></i>
                        </span>
                      </li>
                      <li></li>
                      <li>
                        <span>
                          <i class="fa-solid fa-phone"></i>
                        </span>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="text">
                    <ul>
                      <li>
                        <h4>GRAND EVENTS A TO Z MARRIAGE CATERING SERVICES</h4>
                        <p>
                          #16, Kumaran Nagar, First St, Avadi, Chennai - 600071.
                        </p>
                      </li>
                      <li>
                        
                      </li>
                      <li>
                        <h4>Email </h4>
                        <p> grandeventsavadi@gmail.com</p>
                      </li>
                      <li>
                        
                      </li>
                      <li>
                        <h4>Phone</h4>
                        <p> +91 94448 85453 / 73582 80982</p>

                      </li>
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="social-box">
                  <h4>instagram</h4>
                  <div className="Qr-img">
                    <img src={QR} />
                  </div>
                </div>
              </div>
              <div className="row">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.235602223122!2d80.0982294!3d13.1112895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52630b6a082cd7%3A0xf00964b08b210778!2sGrand%20Events%20Catering%20Services!5e0!3m2!1sen!2sin!4v1725279766783!5m2!1sen!2sin" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
