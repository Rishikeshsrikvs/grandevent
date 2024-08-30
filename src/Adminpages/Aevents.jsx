import React, { useEffect, useState } from 'react';
 // Import axios for API calls
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useAuth } from './auth/AuthContext';
import './Aevents.css';

const Aevents = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;
  console.log(token);
  
  const [events, setEvents] = useState([]); // State to store events

  // Fetch events from the API on component mount
  useEffect(() => {
    api.get('/api/admin/events', {
      headers: {
        authorization: token // Replace with your actual token
      }
    })
    .then((response) => {
      setEvents(response.data.message);
      console.log(response.data.message);
       // Set the events data from the response
    })
    .catch((error) => {
      console.error("There was an error fetching the events!", error);
    });
  }, []);

  // Handlers for navigation
  const handleCancelledEventsClick = () => {
    navigate('/admin/SHRA/cancelled-events');
  };

  const handleNewEventsClick = () => {
    navigate('/admin/SHRA/new-events');
  };

  return (
    <div className="adashmmain">
      <h1>EVENTS</h1>
      <div className="aeventcon">
        <div className="aeventtitlecon">
          <button onClick={handleCancelledEventsClick}>Cancelled events</button>
          <button onClick={handleNewEventsClick}>
            <span>
              <img src="" alt="" />
            </span>
            <span>NEW EVENTS</span>
          </button>
        </div>
        <div className="aeventtable">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>CLIENT NAME</th>
                <th>EVENT NAME</th>
                <th>PLACE</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event._id} className='eventdetail'>
                  <td>{index + 1}</td>
                  <td>{event.client_name}</td>
                  <td>{event.event_name}</td>
                  <td>{event.event_location}</td>
                  <td>{new Date(event.event_date).toLocaleDateString()}</td>
                  <td>
                    <div className='eventbuttonstr'>
                      <div className="eadone">DONE</div>
                      <div className="eadeny">DENY</div>
                      <div className="eamodify">MODIFY</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aevents;
