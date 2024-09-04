import "./Reg.css";
import React, { useState } from 'react';
import api from "../../api/api"; // Import Axios for API call

const Registr = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    yourphone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username.trim()) formErrors.username = "User Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!formData.yourphone.trim()) formErrors.yourphone = "Phone number is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await api.post('/contact', {
          contactName: formData.username,
          contact: formData.yourphone,
          email: formData.email,
          message: formData.message
        });

        if (response.status === 201) {
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ username: '', email: '', yourphone: '', message: '' });
          setErrors({});
        }
      } catch (error) {
        console.error("There was an error sending the message", error);
      }
    }
  };

  return (
    <div className="registermainparent">
      <div className="registparent">
        <div className="registermaincontainer">
          <h1>READY TO PLAN YOUR EVENTS</h1>
          <form onSubmit={handleSubmit} className="formsub">
            <h2 className="sendmestext">Send Your Message</h2>
            <div className="inputcon">
              <div>
                <input
                  placeholder="User Name"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <input
                  placeholder="Your Phone"
                  type="tel"
                  name="yourphone"
                  value={formData.yourphone}
                  onChange={handleChange}
                  required
                />
                {errors.yourphone && <p className="error">{errors.yourphone}</p>}
              </div>
            </div>
            <textarea
              className="tetxarea"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
            <button className="formbtn" type="submit">Send Message</button>
            {successMessage && <p className="success">{successMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registr;
