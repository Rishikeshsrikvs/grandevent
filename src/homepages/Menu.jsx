import React from 'react'
import { useEffect } from 'react';
import Menu1container from './homecomponents/Menu1container';
import './Menu.css';
import mnbackleft from './../assets/menu/menubackleft.png';
import n22 from './../assets/menu/n22.png';
import Registr from './homecomponents/Registr';
import Menu2container from './homecomponents/Menu2container';
import AOS from "aos";
import "aos/dist/aos.css";
const Menu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  
  return (
    <div className='menuparent'>
      <div className="menuhead">
        <h1  data-aos="zoom-in">MENU</h1>
      </div>
      <div className="menumain">
        <img className="menuback1" src={mnbackleft} alt="" />
        <img className="menuback2" src={mnbackleft} alt="" />
        <div className="menusub">
            <h1  data-aos="zoom-out">Our Menu</h1>
            <Menu1container/>
            <Menu2container/>

        </div>

        

      </div>
      <Registr/>
    </div>
  )
}

export default Menu
