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
        <Link to="/admin/SHRA/settings">settings</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/events">Events</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/admin/SHRA/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Asidebar;
