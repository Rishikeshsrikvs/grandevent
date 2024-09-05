import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  { useState } from 'react';
import { Header } from './homepages/homecomponents/Header';
import Footer from './homepages/homecomponents/Footer';
import Land from './homepages/Land';
import './Home.css';
import Menu from './homepages/Menu.jsx';
import Menuview from './suresh/components/Menuview/Menuview.jsx';
import Menudetail from './homepages/Menudetail.jsx';
import About from './suresh/components/AboutSection/About.jsx';
import Service from './suresh/components/service/Service.jsx';
import Gallery from './suresh/components/Gallery/Gallery.jsx';
import Menulist from './homepages/Menulist.jsx';
import landpopupimage from './assets/land/landpopup.png';
import MainConnect from './suresh/components/Connect/MainConnect.jsx';
import CateringService from './suresh/components/CateringService/CateringService.jsx';
import MarriageService from './suresh/components/MarriageService/MarriageService.jsx';
const Home = () => {


  const [isImageVisible, setIsImageVisible] = useState(true);
  const closeImageOverlay = () => {
      setIsImageVisible(false);}

  return (
    <div className='homecontainer'>

      <Header />
      {isImageVisible && (
        <div className="popupimage-overlay" onClick={closeImageOverlay}>
          <div className="popupimage-container" onClick={(e) => e.stopPropagation()}>
            <button className="popupcloseimage-button" onClick={closeImageOverlay}>X</button>
            <img src={landpopupimage} alt="Sample" />
          </div>
        </div>
      )}
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Services' element={<Service />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Cateringservice' element={<CateringService />} />
        <Route path='/Marriageservice' element={<MarriageService />} />
        <Route path='/Menuview' element={<Menuview />} />
        <Route path='/Connect' element={<MainConnect />} />
        <Route path='/Menulist' element={<Menulist />} />
        <Route path='/Detailedmenu' element={<Menudetail />} />
        {/* Add routes for other pages like /Menu, /Services, /Gallery, etc. */}
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
