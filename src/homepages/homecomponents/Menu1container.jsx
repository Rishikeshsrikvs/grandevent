import React from 'react'
import './../Menu.css';
import m11 from './../../assets/menu/m11.png';
import m12 from './../../assets/menu/m12.png';
import m21 from './../../assets/menu/m21.png';
import m22 from './../../assets/menu/m22.png';
import m3 from './../../assets/menu/m3.png';


import n11 from './../../assets/menu/n11.png';
import n12 from './../../assets/menu/n12.png';
import n21 from './../../assets/menu/n21.png';
import n22 from './../../assets/menu/n22.png';
import n3 from './../../assets/menu/n3.png';
import { useNavigate } from 'react-router-dom';
const Menu1container = () => {
    const navigate = useNavigate();
  return (
    <div className="menu1container">
                <div className="manu1up">
                    <div className="mn1">
                        <div className="mn1up"><img src={m11} alt="" /></div>
                        <div className="mn1down"><img src={m12} alt="" /></div>
                    </div>
                    <div className="mn2">
                    <div className="mn2up"><img src={m21} alt="" /></div>
                    <div className="mn2down"><img src={m22} alt="" /></div>
                    </div>
                    <div className="mn3"><img src={m3} alt="" /></div>
                    <div className="mn4">
                        <h1>BREAK FAST</h1>
                        <button onClick={()=>{ navigate('/menuview', { state: { menuType: 'breakfast' } })}}>VIEW MORE</button>
                    </div>
                </div>
                <div className="manu1up">
                    <div className="mn1">
                        <div className="mn1up"><img src={n11} alt="" /></div>
                        <div className="mn1down"><img src={n12} alt="" /></div>
                    </div>
                    <div className="mn2">
                    <div className="mn2up"><img src={n21} alt="" /></div>
                    <div className="mn2down"><img src={n22} alt="" /></div>
                    </div>
                    <div className="mn3"><img src={n3} alt="" /></div>
                    <div className="mn4">
                        <h1>LUNCH</h1>
                        <button onClick={()=>{ navigate('/menuview', { state: { menuType: 'lunch' } })}}>VIEW MORE</button>
                    </div>
                </div>
                <div className="manu1up">
                    <div className="mn1">
                        <div className="mn1up"><img src={m11} alt="" /></div>
                        <div className="mn1down"><img src={m12} alt="" /></div>
                    </div>
                    <div className="mn2">
                    <div className="mn2up"><img src={m21} alt="" /></div>
                    <div className="mn2down"><img src={m22} alt="" /></div>
                    </div>
                    <div className="mn3"><img src={m3} alt="" /></div>
                    <div className="mn4">
                        <h1>DINNER</h1>
                        <button onClick={()=>{ navigate('/menuview', { state: { menuType: 'dinner' } })}}>VIEW MORE</button>
                    </div>
                </div>
            </div>
  )
}

export default Menu1container
