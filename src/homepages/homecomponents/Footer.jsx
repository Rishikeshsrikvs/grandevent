import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Footer.css';
import AOS from "aos";
import "aos/dist/aos.css";

import { NavLink } from 'react-router-dom';
import logo from './../../assets/Header/logo.png';
import facebook from './../../assets/footer/facebook.png';
import instagram from './../../assets/footer/instagram.png';
import utube from './../../assets/footer/utube.png';
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <footer className='footerparent'>
      <div className="footmain">
        <div className="footleft">
          <div className="footleftlogo">
            <img src={logo}  data-aos="zoom-in" alt="Company Logo" />
            <p data-aos="zoom-in">We are committed to making every festival and special occasion at your house something to remember.</p>
          </div>
          <div className="footicon" data-aos="fade-up">
            <p>Follow for more updates</p>
            <div className="footiconcon">
              <Link to="https://www.facebook.com/GrandEvents.Chennai/"target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Social Icon 1" /></Link>
              <Link to="https://www.instagram.com/grandeventscatering/"target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Social Icon 2" /></Link>
              <Link to="https://www.youtube.com/@grandeventsatozmarriagecat8770"target="_blank" rel="noopener noreferrer"><img src={utube} alt="Social Icon 3" /></Link>
            </div>
          </div>
        </div>

        <div className="footcenter" data-aos="fade-up">
          <h1>Quick Links</h1>
         
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Gallery">Gallery</Link>
        </div>

        <div className="footright" data-aos="fade-up">
          <h1>Contact Us</h1>
          <p>'Grand Events A to Z Marriage Catering Services'<br/> #16, Kumaran Nagar, First St, Avadi, Chennai-71</p>
          <p>Phone: +91 94448 85453 / 73582 80982</p>
          <p>Email: grandeventsavadi@gmail.com</p>
        </div>
      </div>
      <div className="footsub">
        <p>© Copyright 2024 All rights reserved Grand Events A to Z Marriage Catering Services.</p>
        <p>Designed by<Link to="https://srikvstech.com/"  target="_blank"> Sri KVS Tech</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
