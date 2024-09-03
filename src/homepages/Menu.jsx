import React from 'react'
import Menu1container from './homecomponents/Menu1container';
import './Menu.css';
import mnbackleft from './../assets/menu/menubackleft.png';
import n22 from './../assets/menu/n22.png';
import Registr from './homecomponents/Registr';
import Menu2container from './homecomponents/Menu2container';

const Menu = () => {

  
  return (
    <div className='menuparent'>
      <div className="menuhead">
        <h1>MENU</h1>
      </div>
      <div className="menumain">
        <img className="menuback1" src={mnbackleft} alt="" />
        <img className="menuback2" src={mnbackleft} alt="" />
        <div className="menusub">
            <h1>Our Menu</h1>
            <Menu1container/>
            <Menu2container/>

        </div>

        

      </div>
      <Registr/>
    </div>
  )
}

export default Menu
