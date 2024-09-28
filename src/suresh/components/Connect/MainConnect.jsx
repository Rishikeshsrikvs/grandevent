import React from 'react'
import Connect from './pages/Connect'
import { useEffect } from "react";
import Registr from './../../../homepages/homecomponents/Registr.jsx';
const MainConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  return (
    <>
    <Connect/>
    <Registr/>
    </>
  )
}

export default MainConnect
