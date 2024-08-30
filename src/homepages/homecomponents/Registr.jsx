


import "./Reg.css"
import React, { useState } from 'react';
const Registr = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    yoursubject: '',
    yourphone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registermainparent">
        <div className="registparent">
            <div className="registermaincontainer">
              <h1>READY TO PLAN YOUR EVENTS</h1>
              <form onSubmit={handleSubmit} className="formsub">
        
              <h2 className="sendmestext">Send Your Message</h2>
        
                <div className="inputcon">
        
                  <div >
        
                    <input
                    placeholder="User Name "
                      type="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
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
                  </div>
                  <div>
        
                    <input
                    placeholder="Your subject"
                      type="yoursubject"
                      name="yoursubject"
                      value={formData.yoursubject}
                      onChange={handleChange}
                      required
                    />
                  </div><div>
        
                    <input
                    placeholder="Your Phone "
                      type="yourphone"
                      name="yourphone"
                      value={formData.yourphone}
                      onChange={handleChange}
                      required
                    />
        
                  </div>
                </div>
                <textarea className="tetxarea" name="" id="" cols="30"placeholder="Your Message"></textarea>
                <button className="formbtn">Send Message</button>
              </form>
            </div>
        </div>
    </div>
    
  );
};

export default Registr