// AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Asidebar.css';
// import './AdminSidebar.css'; // Assuming you have some CSS for styling

const Asidebar = () => {
  return (
    <div className="sidebar">
     
    
    <div className="listcontainer">
      <ul>
        <li>
        <Link to="/admin/SHRA/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/gallery">Gallery</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/menu">Menu</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/events">Events</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/testimonial">Testimonial</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/contactus">Contactus</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/quote">Quote</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/brochure">Brochure</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/Qrcode">Qrcode</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Asidebar;
