import React from "react";
import "./Menuview.css";
import img1 from "../Menuview/menuimage/Marriageimage.png";
import img2 from "../Menuview/menuimage/Rectangle1.png";
import img3 from "../Menuview/menuimage/menuimg2.jpg";
import img4 from "../Menuview/menuimage/weddingcat.png";
import img5 from "../Menuview/menuimage/Rectangle7.png";
import img6 from "../Menuview/menuimage/menuimg.png";

const Menuview = () => {
  return (
    <>
      <div className="menuview">
        <div className="menu-heading">
          <h1>
            Explore culinary <i>delish</i>
          </h1>
        </div>
        <div className="container">
          <div className="gallery">
            <div className="grid grid1">
              <div className="menu-box">
                <img src={img1} alt="image1" className="image1" />
              </div>
              <div className="menu-box">
                <img src={img2} alt="image2" className="image2"/>
              </div>
            </div>
            <div className="grid grid2">
              <div className="menu-box">
                <img src={img3} alt="image3" className="image3"/>
              </div>
              <div className="menu-box">
                <img src={img4} alt="image4" className="image2"/>
              </div>
            </div>
            <div className="grid ">
              <div className="menu-box">
                <img src={img5} alt="image5" className="image1"/>
              </div>
              <div className="menu-box">
                <img src={img6} alt="image6" className="image2"/>
              </div>
              
            </div>
          </div>
          <div class="form-container">
            <form >
              <label htmlFor="">Enter Name</label>
              <input type="text" />
              <label htmlFor="">Mobile No</label>
              <input type="text" />
              <button className="sub-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menuview;
