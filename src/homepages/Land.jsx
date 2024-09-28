import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Land.css";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import face from "./../assets/land/face.png";
import insta from "./../assets/land/instagram.png";
import ring from "./../assets/land/ring.png";
import Whats from "./../assets/land/whats.png";
import utube from "./../assets/land/utube.png";
import lunch from "./../assets/land/lunch.png";
import seemant from "./../assets/land/seemantham.png";
import breakfast from "./../assets/land/breakfast.png";
import dinner from "./../assets/land/dinner.png";
import more from "./../assets/land/more.png";
import land6 from "./../assets/land/land6back.png";
import landpopupimage from "./../assets/land/landpopup.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Reelslider from "./homecomponents/Reelslider";
import Registr from "./homecomponents/Registr";
import Testimonials from "./homecomponents/Testimonials";
import Getquote from "./homecomponents/Getquote";
import Land8image from "./Land8image";
import Sendmessage from "./homecomponents/Sendmessage";
const Land = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="landparent">
      {/* {isImageVisible && (
        <div className="popupimage-overlay" onClick={closeImageOverlay}>
          <div className="popupimage-container" onClick={(e) => e.stopPropagation()}>
            <button className="popupcloseimage-button" onClick={closeImageOverlay}>X</button>
            <img src={landpopupimage} alt="Sample" />
          </div>
        </div>
      )} */}
      <div className="land1main">
        <div className="land1textcon">
          <div className="land1left" c>
            <p className="land1leftp1" >
              Welcome To Grand Events A to Z Marriage Catering Services
            </p>
            <p className="land1leftp2">BEST WEDDING CATERERS IN CHENNAI</p>
            <p className="land1leftp3">
              FSSAI CERTIFIED COMPANY - ISO 9001 : 2015
            </p>
          </div>
          <Getquote />
        </div>
        <div className="land1iconcon">
          <div className="land1iconleft"  data-aos="fade-right">
            <img
              src={insta}
              alt=""
              onClick={() =>
                window.open(
                  "https://www.instagram.com/grandeventscatering/",
                  "_blank"
                )
              }
            />
            <img
              src={face}
              alt=""
              onClick={() =>
                window.open(
                  "https://www.facebook.com/GrandEvents.Chennai/",
                  "_blank"
                )
              }
            />
            <img
              src={utube}
              alt=""
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@grandeventsatozmarriagecat8770",
                  "_blank"
                )
              }
            />
            <img src={Whats} alt="" />
          </div>
          <div className="land1iconright" data-aos="fade-left">
            <span>
              <img src={ring} alt="" />
            </span>
            <div className="land1contact">
              <div className="land1txt">Feel free to contact us</div>
              <div className="land1num">
                +91 7358121384 <br />
                +91 7358121385
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="land2main">
        <h1 className="land2title" data-aos="zoom-in">
          OUR <span>MILESTONE</span>
        </h1>
        <div className="land2cardcon">
          <div className="landcard"  data-aos="fade-right">
            <h1 className="land2txt">EVENTS</h1>
            <h1 className="land2num">123+</h1>
          </div>
          <div className="landcard"  data-aos="fade-up">
            <h1 className="land2txt">YEARS</h1>
            <h1 className="land2num">12+</h1>
          </div>
          <div className="landcard" data-aos="fade-left">
            <h1 className="land2txt">FEEDBACKS</h1>
            <h1 className="land2num">1123+</h1>
          </div>
        </div>
      </div>
      <div className="land3testmain">
        <h1 className="land3title" data-aos="zoom-in">
          OUR <span>TESTIMONIALS</span>
        </h1>
        <Testimonials />
        {isModalOpen && <Sendmessage toggleModal={toggleModal} />}
        <div className="land3wriereview">
          <button onClick={toggleModal}  data-aos="fade-down">Write review</button>
        </div>
      </div>
      <div className="land4main">
        <h1 className="land4title" data-aos="zoom-out">
          OUR <span>SERVICES</span>
        </h1>
        <div className="land4titlesub">
          <p  data-aos="fade-right">OUR OFFERINGS</p>
          <h1 data-aos="fade-right">Passion for Celebration.</h1>
        </div>
        <div className="land4imagecon">
          <div onClick={() => navigate("/Cateringservice")} className="l4left"  data-aos="fade-right">
            <h1>CATERING SERVICES</h1>
          </div>
          <div className="l4right">
            <div className="l4rup">
              <div
                className="lrup1"
                 data-aos="fade-down"
                onClick={() => navigate("/Marriageservice")}
              >
                <h1>MARRIAGE SERVICES</h1>
              </div>
              <div className="lrup1" data-aos="fade-left" onClick={() => navigate("/Menu")}>
                <h1>MENU</h1>
              </div>
            </div>
            <div className="l4rdown" data-aos="fade-up"onClick={() => navigate("/Services")}>
              <h1>OUR SPEACIALITIES</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="land5main">
        <h1 className="land4title" data-aos="zoom-out">
          OUR <span>FOOD MENU</span>
        </h1>

        <p data-aos="fade-up">
          The main objective of our organization is to cater a nutritious and
          hygenic food served at its best. We do catering service of all types
          starting from south indian dishes to completely typical north indian
          dishes. We do special services for the iyer, iyengars and all other
          communities with an special touch
        </p>
        <div className="land5con">
          <div className="land5cardmain"data-aos="fade-up">
            <div className="land5card" >
              <div className="l5cardimg">
                <img src={breakfast} alt="" />
              </div>
              <p>BREAKFAST</p>
              <div
                className="l5btn"
                onClick={() => {
                  navigate("/menuview", { state: { menuType: "breakfast" } });
                }}
              >
                VIEW MENU
              </div>
            </div>
          </div>
          <div className="land5cardmain" data-aos="fade-up">
            <div className="land5card">
              <div className="l5cardimg">
                <img src={lunch} alt="" />
              </div>
              <p>LUNCH</p>
              <div
                className="l5btn"
                onClick={() => {
                  navigate("/menuview", { state: { menuType: "lunch" } });
                }}
              >
                VIEW MENU
              </div>
            </div>
          </div>
          <div className="land5cardmain"data-aos="fade-up">
            <div className="land5card" >
              <div className="l5cardimg">
                <img src={dinner} alt="" />
              </div>
              <p>DINNER</p>
              <div
                className="l5btn"
                onClick={() => {
                  navigate("/menuview", { state: { menuType: "dinner" } });
                }}
              >
                VIEW MENU
              </div>
            </div>
          </div>
          <div className="land5cardmain" data-aos="fade-up">
            <div className="land5card">
              <div className="l5cardimg">
                <img src={seemant} alt="" />
              </div>
              <p>SEEMANTHA SAPPADU</p>
              <div
                className="l5btn"
                onClick={() => {
                  navigate("/menuview", { state: { menuType: "seemantham" } });
                }}
              >
                VIEW MENU
              </div>
            </div>
          </div>
          <div className="land5cardmain" data-aos="fade-up">
            <div className="land5card">
              <div className="l5cardimg">
                <img src={more} alt="" />
              </div>
              <p>MORE</p>
              <div
                className="l5btn"
                onClick={() => {
                  navigate("/menuview", { state: { menuType: "differ" } });
                }}
              >
                MORE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="land6main">
        <img src={land6} alt=""  data-aos="zoom-out"/>
      </div>
      <div className="land7utubecon">
        <iframe
         data-aos="zoom-in"
          width="80%"
          height="90%"
          src="https://www.youtube.com/embed/InisDKvXU3o?si=k3TUk7dNeUL5djFI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Land8image />
      <div className="land9main">
        <h1 className="land4title"  data-aos="zoom-out">REELS</h1>
        <div className="l9con"   data-aos="zoom-in">
          <Reelslider />
        </div>
        <div className="land3wriereview">
          <button
          data-aos="fade-up"
            onClick={() =>
              window.open(
                "https://www.instagram.com/grandeventscatering/",
                "_blank"
              )
            }
          >
            FOR MORE FEEDS
          </button>
        </div>
      </div>

      <Registr />
    </div>
  );
};

export default Land;
