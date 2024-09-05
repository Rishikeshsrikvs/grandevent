import React, { useState } from 'react';
import axios from 'axios';
import api from '../../api/api';
import './Sendmessage.css';

const Sendmessage = ({ toggleModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the form data in URL-encoded format
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('contact', email);
    formData.append('description', review);

    try {
      // Send POST request to the API
      const response = await api.post('/testimonials', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // If successful, show success message
      if (response.status === 201) {
        console.log("sucess");
        
        setSuccessMessage('Your review has been submitted successfully!');
        setErrorMessage(''); // Clear any previous error messages
        setName('');
        setEmail('');
        setReview('');
      }
    } catch (error) {
      // If an error occurs, show error message
      setErrorMessage('There was an error submitting your review. Please try again.');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-background') {
      toggleModal();
    }
  };

  return (
    <div className="modal-background" onClick={handleClickOutside}>
      <div className="galarycontainer">
        <div className="xbtncon">
          <button className="close-button" onClick={toggleModal}>X</button>
        </div>
        <form className="reviewform" onSubmit={handleSubmit}>
          <div className="formgroup">
            <label htmlFor="name">Enter Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="review">Enter Your Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          
          {/* Display success or error message */}
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className='sendbbtn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Sendmessage;
