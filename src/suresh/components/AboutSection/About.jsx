import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/Baala.png";
import foodposter from '../assets/food.png'
import './About.css'
import lefttop from '../assets/design4.png'
import Registr from "../../../homepages/homecomponents/Registr";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutcontainer">
          <div className="abthero">
            <h1>ABOUT US</h1>
          </div>

          <div className="top-left">
            <img src={lefttop} alt="" />   
          </div>

          <div className="abtheading">
            <h1>Best Caterers in Chennai</h1>
            <h2>Grand Events A to Z Marriage Catering Services</h2>
          </div>
          <div className="about-serve">
            <div className="image-container1">
              <img src={pic1}  className="food-serve" />
              <img src={pic2}  className="bala-img"/>
            </div>
            <div className="about-serve-content">
              <p>
                Grand Events A to Z Marriage Catering Services are the best and
                well organized catering service provider in Chennai.started in
                2014 at Avadi in Chennai. We are successfully doing best
                catering service to provide awesome service to our customers for
                various functions like Marriage, Birthday Parties, Party Hall ,
                Housewarming, Reception, Engagement and more from the past 7+
                years all around Chennai. Directing our experience and resource
                towards an exceptional customer service, we organize a beautiful
                wedding planner, wonderful birthday parties, fun-filled parties
                and action-packed corporate parties. Grand Catering assist you
                in planning, designing and executing your favourable function
                and parties. Blending our excellent event management
                capabilities with our best catering services, Grand Catering
                will make your celebration a joy that you and your family will
                adore for years.
              </p>
            </div>
          </div>

          <div className="about-details">
            <div className="about-details-content">
              <p>
                We are always glad to be at your service, driven by providing
                continuous service to fulfill your requirements to the best of
                our abilities, resources, and name. Based in Chennai catering
                service, our skilled workmanship and fine business ethics have
                helped us gain an enviable reputation of " The Best Wedding
                Catering Service in Chennai " through our 7+ years of
                distinguished operations in the catering business.We are
                specialized in South Indian traditional menus, North Indian
                menus as well as Chinese items. Our workers are well experienced
                in their respective field and they are keeping follow their
                traditional rituals while working. Our motto is to provide full
                satisfy service to our customers with " Clean" , " Taste " and
                "Hygienic" foods.Contact Us to get a schedule for your Wedding
                Catering Service in Chennai
              </p>
              <div className="food-poster">
                <img src={foodposter} className="poster"/>
              </div>
            </div>
          </div>
          
        </div>
        <Registr/>
      </div>
    </>
  );
};

export default About;
