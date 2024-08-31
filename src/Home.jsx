import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './homepages/homecomponents/Header';
import Footer from './homepages/homecomponents/Footer';
import Land from './homepages/Land';
import './Home.css';
import Menu from './homepages/Menu.jsx';
import Menuview from './suresh/components/Menuview/Menuview.jsx';

import About from './suresh/components/AboutSection/About.jsx';
import Service from './suresh/components/service/Service.jsx';
import Gallery from './suresh/components/Gallery/Gallery.jsx';

import MainConnect from './suresh/components/Connect/MainConnect.jsx';
import CateringService from './suresh/components/CateringService/CateringService.jsx';
import MarriageService from './suresh/components/MarriageService/MarriageService.jsx';
const Home = () => {
  return (
    <div className='homecontainer'>
      <Header />
      <Routes>
        <Route path='/Home' element={<Land />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Services' element={<Service />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Cateringservice' element={<CateringService />} />
        <Route path='/Marriageservice' element={<MarriageService />} />
        <Route path='/Menuview' element={<Menuview />} />
        <Route path='/Connect' element={<MainConnect />} />

        {/* Add routes for other pages like /Menu, /Services, /Gallery, etc. */}
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
