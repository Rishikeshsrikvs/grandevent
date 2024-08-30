// Admin.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Adminpages/auth/AuthContext';
import Adashboard from './Adminpages/Adashboard';
import Asidebar from './Adminpages/Asiderbar';
import Asettings from './Adminpages/Asettings';
import Adminlogin from './Adminpages/Adminlogin';
import Aevents from './Adminpages/Aevents';
import Anewevents from './Adminpages/Anewevents';
import Acanceledevents from './Adminpages/Acanceledevents';
import ProtectedRoute from './Adminpages/auth/ProtectedRoute';
import './Admin.css'; // Import the CSS file for styling

const Admin = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Adminlogin />} />
       
          <Route
            path="*"
            element={
              <ProtectedRoute>
                 <div className="adminparent">
                  <div className="admintitle">
                    <h1>grand events catering</h1>
                  </div>
                <div className="dashboard-container">
          
                  <div className="sidecontainer">
                    <Asidebar />
                  </div>
                  <div className="main-content">
                    <Routes>
                      <Route path="/settings" element={<Asettings />} />
                      <Route path="/dashboard" element={<Adashboard />} />
                      <Route path="/events" element={<Aevents />} />
                      <Route path="/new-events" element={<Anewevents />} />
                      <Route path="/cancelled-events" element={<Acanceledevents />} />
                    </Routes>
                  </div>
                </div>
                </div>
             </ProtectedRoute>
            }
          />
       
      </Routes>
    </AuthProvider>
  );
};

export default Admin;
