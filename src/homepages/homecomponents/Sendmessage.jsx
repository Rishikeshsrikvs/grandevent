
import React, { useState } from 'react';

import './Sendmessage.css';

const Sendmessage = () => {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    console.log({ name, email, review });
   
    setName('');
    setEmail('');
    setReview('');
  };

  return (
    <div className="galarycontainer">
      <h2></h2>
      <form className="reviewform" onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="name"> Enter Name:</label>
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
          <label htmlFor="review"> Enter Your Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        < button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sendmessage;