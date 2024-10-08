import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Ensure api is properly configured with Axios
import { useAuth } from './auth/AuthContext';
import test from './../assets/admin/testimonial.png';
import './Aevents.css';
const Atestimonial = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [testimonials, setTestimonials] = useState([]); // Initialize as an empty array

  // Fetch testimonials from the API on component mount
  useEffect(() => {
    api.get('/api/admin/testimonials', {
      headers: {
        authorization: token // Ensure the token is passed correctly
      }
    })
    .then((response) => {
      setTestimonials(response.data || []); // Ensure response is handled properly
    })
    .catch((error) => {
      console.error("There was an error fetching the testimonials!", error);
    });
  }, [token]);

  // Handler to cancel the testimonial
  const handleDenyClick = (testimonialId) => {
    api.put('/api/admin/deleteTestimonial', 
      {
        testimonialId: testimonialId // Pass the testimonial ID in the request body
      }, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: token // Add the authorization token
        }
      }
    )
    .then((response) => {
      console.log('Testimonial canceled successfully', response.data);
      // Optionally, remove the canceled testimonial from the UI or refetch testimonials
      setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId));
    })
    .catch((error) => {
      console.error("There was an error cancelling the testimonial!", error);
    });
  };

  // Handler to mark the testimonial as done
  const handleDoneClick = (testimonialId) => {
    api.put('/api/admin/approveTestimonial', 
      {
        testimonialId: testimonialId // Pass the testimonial ID in the request body
      }, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token // Add the authorization token
        }
      }
    )
    .then((response) => {
      console.log('Testimonial marked as done successfully', response.data);
      // Optionally, remove the completed testimonial from the UI or refetch testimonials
      setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId));
    })
    .catch((error) => {
      console.error("There was an error marking the testimonial as done!", error);
    });
  };

  return (
    <div className="adashmmain">
      <h1>TESTIMONIALS</h1>
      <div className="aeventcon">
        <div className="aeventtitlecon">
          <button className='atestname'>
          <span>
              <img src={test} alt="" />
            </span>
            <span>CLIENT FEEDBACK</span>
          </button>
          <button onClick={() => navigate('/admin/SHRA/Approvedtestimonials')}>
            <span>
              <img src="" alt="" />
            </span>
            <span>Approved</span>
          </button>
        </div>
        <div className="aeventtable">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {testimonials && testimonials.length > 0 ? ( // Add condition to check if testimonials array has data
                testimonials.map((testimonial, index) => (
                  <tr key={testimonial._id} className='eventdetail'>
                    <td>{index + 1}</td>
                    <td>{testimonial.name}</td>
                    <td>{testimonial.contact}</td>
                    <td>{testimonial.description}</td>
                    <td>
                      <div className="eventbuttonstr">
                      <div className="eadone" onClick={() => handleDoneClick(testimonial._id)}>APPROVE</div>
                      <div className="eadeny" onClick={() => handleDenyClick(testimonial._id)}>DENY</div>
                      <div className="eamodify">MODIFY</div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No testimonials available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Atestimonial;
