import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import './Getquote.css';

const Getquote = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); // Default to true on larger screens
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Detect screen size

  useEffect(() => {
    // Check screen size on initial load and on window resize
    const handleResize = () => {
      const isSmall = window.innerWidth <= 768;
      setIsSmallScreen(isSmall);
      if (!isSmall) {
        setIsFormVisible(true); // Always show form on larger screens
      } else {
        setIsFormVisible(false); // Hide form by default on small screens
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const validateForm = () => {
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
    if (!validateForm()) {
      return;
    }

    try {
      const response = await api.post('/quotes', {
        contactName: name,
        contact: contact,
        service: service,
        location: location
      });

      if (response.status === 201) {
        setSuccessMessage('Your quote request has been submitted successfully!');
        setErrorMessage('');
        // Clear form fields
        setName('');
        setContact('');
        setLocation('');
        setService('');
        setIsFormVisible(false);
      }
    } catch (error) {
      setErrorMessage('There was an error submitting your request. Please try again.');
      setSuccessMessage('');
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);  // Toggle form visibility
  };

  return (
    <div className="getquote-container">
      {isSmallScreen && !isFormVisible && (
        <button className="getquote-button" onClick={toggleFormVisibility}>
          Get Quote
        </button>
      )}

      {/* Conditionally add the "show" class if isFormVisible is true */}
      {(isFormVisible || !isSmallScreen) && (
        <div className={`land1right ${isFormVisible ? 'show' : ''}`}>
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
            <option value="">Select Service</option>
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
          
          {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      )}
    </div>
  );
};

export default Getquote;
