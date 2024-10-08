import React from "react";
import food from "../assets/service2.png";
import back from "../assets/service3.png";
import page from "../assets/service4.png";
import design3 from "../assets/design3.png";
import "./Service.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Registr from "../../../homepages/homecomponents/Registr";
import { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div className="service">
        <div className="servicecontainer">
          <div className="hero">
            <h1 data-aos="zoom-in">SERVICE</h1>
          </div>
          <div className="heading-section">
            <div className="heading">
              <h1 data-aos="zoom-out">
                Grand Events & <span>Catering Service</span>
              </h1>
            </div>
            <div>
                <img src={design3} alt="" className="design3" />
            </div>
            <div className="content">
              <div className="para">
                <p data-aos="fade-up">
                  Grand Catering are the best and well organized catering
                  service provider in Chennai. Directing our experience and
                  resource towards an exceptional customer service, we organize
                  a beautiful wedding planner, wonderful birthday parties,
                  fun-filled parties and action-packed corporate parties. Grand
                  Catering assist you in planning, designing and executing your
                  favourable function and parties. Blending our excellent event
                  management capabilities with our best catering services, Grand
                  Catering will make your celebration a joy that you and your
                  family will adore for years..
                </p>
              </div>
              <div className="images" data-aos="fade-up">
                <div className="food" >
                  <img src={food} className="front-image" />
                </div>
                <div className="backimg">
                  <img src={back} className="back-image" />
                </div>
              </div>
            </div>
          </div>

          <section className="section-box">
            <div className="box-content">
              <div className="box" data-aos="fade-right">
                <p>
                  Totally we provide an one stop solution for the complete
                  function,starting from a small to grand function. We undertake
                  all party orders. We deliver at your door steps.
                </p>
              </div>
              <div className="box" data-aos="fade-left">
                <p>
                  Our reputation and quality service has acknowledged and
                  praised by all of our customers. We are servicing all over
                  India. We are also good at catering VIP people with a special
                  care.
                </p>
              </div>
            </div>
          </section>

          <div className="main-service">
            <div className="heading">
              <h1 data-aos="zoom-in">
                OUR <span> MAIN SERVICES</span>
              </h1>
            </div>
            <div className="main-box" data-aos="zoom-in">
              <div className="right">
                <img src={page} className="right-poster" />
              </div>
              <div className="left">
                <p >
                  <i>The Best Company Offering Catering Services In Chennai</i>
                </p>
                <ul>
                  <li>WEDDING CATERING</li>
                  <li>CORPORATE CATERING</li>
                  <li>SPECIAL OCCASION CATERING</li>
                  <li>BIRTHDAY CATERING</li>
                  <li>BABY SHOWER CATERING</li>
                  <li>PUBERTY CATERING</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-boxes">
            <img src="" className="flex" />
            <h3></h3>
          </div>
        </div>
        <Registr/>
      </div>
    </>
  );
};

export default Service;
