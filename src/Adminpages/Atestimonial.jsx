import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Ensure api is properly configured with Axios
import { useAuth } from './auth/AuthContext';
import './Aevents.css';

const Atestimonial = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [events, setEvents] = useState([]); // State to store events

  // Fetch events from the API on component mount
  useEffect(() => {
    api.get('/api/admin/events', {
      headers: {
        authorization: token // Replace with your actual token
      }
    })
    .then((response) => {
      setEvents(response.data.message); // Set the events data from the response
    })
    .catch((error) => {
      console.error("There was an error fetching the events!", error);
    });
  }, [token]);

  // Handler to cancel the event
  const handleDenyClick = (eventId) => {
    api.put('/api/admin/eventCancel', 
      {
        eventId: eventId // Pass the event ID in the request body
      }, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token // Add the authorization token
        }
      }
    )
    .then((response) => {
      console.log('Event canceled successfully', response.data);
      // Optionally, remove the canceled event from the UI or refetch events
      setEvents(events.filter(event => event._id !== eventId));
    })
    .catch((error) => {
      console.error("There was an error cancelling the event!", error);
    });
  };

  // Handler to mark the event as done
  const handleDoneClick = (eventId) => {
    api.put('/api/admin/eventDone', 
      {
        eventId: eventId // Pass the event ID in the request body
      }, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token // Add the authorization token
        }
      }
    )
    .then((response) => {
      console.log('Event marked as done successfully', response.data);
      // Optionally, remove the completed event from the UI or refetch events
      setEvents(events.filter(event => event._id !== eventId));
    })
    .catch((error) => {
      console.error("There was an error marking the event as done!", error);
    });
  };

  return (
    <div className="adashmmain">
      <h1>EVENTS</h1>
      <div className="aeventcon">
        <div className="aeventtitlecon">
          <button onClick={() => navigate('/admin/SHRA/cancelled-events')}>Cancelled events</button>
          <button onClick={() => navigate('/admin/SHRA/new-events')}>
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
                <th>NAME</th>
                <th>PHONE</th>
                <th>COMMENTS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event._id} className='eventdetail'>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.phone}</td>
                  <td>{event.comment}</td>
                  
                  <td>
                    <div className='eventbuttonstr'>
                      <div className="eadone" onClick={() => handleDoneClick(event._id)}>DONE</div>
                      <div className="eadeny" onClick={() => handleDenyClick(event._id)}>DENY</div>
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

export default Atestimonial;
