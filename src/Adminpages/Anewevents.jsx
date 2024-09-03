import React, { useState } from 'react';
import './Anewevents.css';
import api from '../api/api';
import { useAuth } from './auth/AuthContext';

const Anewevents = () => {
  const token = useAuth().token;
  
  const [formData, setFormData] = useState({
    event_name: '',
    event_date: '',
    client_name: '',
    event_location: '',
    event_menu: '',
    event_meal: '',
  });

  const [successMessage, setSuccessMessage] = useState('');  // State for success message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDateToDDMMYYYY = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedDate = formatDateToDDMMYYYY(formData.event_date);
    
    try {
      const response = await api.post('/api/admin/eventCreation', 
        {
          event_name: formData.event_name,
          event_date: formattedDate,
          client_name: formData.client_name,
          event_location: formData.event_location,
          event_menu: formData.event_menu,
          event_meal: formData.event_meal,
        }, {
          headers: {
            authorization: token
          }
        });

      if (response.status === 201) {
        setSuccessMessage('Event created successfully!');  // Set success message
        setFormData({
          event_name: '',
          event_date: '',
          client_name: '',
          event_location: '',
          event_menu: '',
          event_meal: '',
        });
      }
    } catch (error) {
      console.error("There was an error creating the event", error);
    }
  };

  return (
    <div className="adashmain">
      <h1>EVENTS / NEW EVENTS</h1>
      <div className="anewetcon">
        <form onSubmit={handleSubmit} className="anewetform">
          <div className="netin netintop">
            <div className="netinsub">
              <label htmlFor="event_name">EVENT NAME :</label>
              <input
                type="text"
                name="event_name"
                value={formData.event_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="netinsub">
              <label htmlFor="event_date">DATE :</label>
              <input
                type="date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="netin netintop">
            <div className="netinsub">
              <label htmlFor="client_name">CLIENT NAME :</label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="netinsub">
              <label htmlFor="event_location">PLACE :</label>
              <input
                type="text"
                name="event_location"
                value={formData.event_location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="netin">
            <h2>CATERING SERVICE</h2>
          </div>
          <div className="netinsub">
            <label htmlFor="event_menu">MENU NAME:</label>
            <input
              type="text"
              name="event_menu"
              value={formData.event_menu}
              onChange={handleChange}
              required
            />
          </div>
          <div className="netin netincheckcon">
            <div className="netcheck">
              <input
                type="radio"
                name="event_meal"
                value="Break-Fast"
                checked={formData.event_meal === 'Break-Fast'}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">BREAKFAST</label>
            </div>
            <div className="netcheck">
              <input
                type="radio"
                name="event_meal"
                value="Lunch"
                checked={formData.event_meal === 'Lunch'}
                onChange={handleChange}
              />
              <label htmlFor="lunch">LUNCH</label>
            </div>
            <div className="netcheck">
              <input
                type="radio"
                name="event_meal"
                value="Dinner"
                checked={formData.event_meal === 'Dinner'}
                onChange={handleChange}
              />
              <label htmlFor="dinner">DINNER</label>
            </div>
          </div>
          <div className="netin netinbtncon">
            <button type="submit">CREATE EVENT</button>
          </div>
          {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        </form>
      </div>
    </div>
  );
};

export default Anewevents;
