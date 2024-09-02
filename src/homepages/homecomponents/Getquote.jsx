import React, { useState } from 'react';
import api from '../../api/api';
import './Getquote.css';

const Getquote = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    // Simple validation: ensure all fields are filled and phone number is valid
    const phoneRegex = /^[0-9]{10}$/;
    if (!name || !contact || !location || !service) {
      setErrorMessage('All fields are required.');
      return false;
    }
    if (!phoneRegex.test(contact)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    console.log("clicked");
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await api.post('/quotes', {
        "contactName": name,                // Correct key as per the Postman image
        "contact": contact,          // Correct key as per the Postman image
        "service": service,      // We can consider "service" as the "description"
        "location": location         // Add location as additional data if needed
      });
      
      if (response.status === 201) {
        console.log("success");
        
        setSuccessMessage('Your quote request has been submitted successfully!');
        setErrorMessage('');
        // Clear form fields
        setName('');
        setContact('');
        setLocation('');
        setService('');
      }
    } catch (error) {
      setErrorMessage('There was an error submitting your request. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="land1right">
      <div className='land1righttitle'>Get your Quote</div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        
        <option value="Marriage Catering">Marriage Catering</option>
        <option value="Private Party Catering">Private Party Catering</option>
        <option value="Special Family Function">Special Family Function</option>
        <option value="Corporate Catering">Corporate Catering</option>
      </select>
      <input
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
      
      {/* Success and Error Messages */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Getquote;
