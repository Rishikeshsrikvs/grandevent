import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Marquee from 'react-fast-marquee';
import api from '../../api/api';
import test1 from './../../assets/testimonial/cart.webp';
import test2 from './../../assets/testimonial/central.jpg';
import test3 from './../../assets/testimonial/images.jpeg';
import test4 from './../../assets/testimonial/eifil.jpg';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the API using Axios
    const fetchTestimonials = async () => {
      try {
        const response = await api.get('/testimonials');
        // Sort testimonials by date in descending order
        const sortedTestimonials = response.data.message.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTestimonials(sortedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Random images array
  const randomImages = [
    test1,
    test2,
    test4,
    test3,
   
  ];

  return (
    <div className="landfeedcon">
      <Marquee className="marq" gradient={false} speed={100}>
        {testimonials.map((testimonial, index) => (
          <div className="feedcard" key={index}>
            <div className="land3feedimg">
              <img src={randomImages[index % randomImages.length]} alt={`testimonial ${index + 1}`} />
            </div>
            <h1>{testimonial.description}</h1>
            <div className="land3feedbtn">{testimonial.name}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
