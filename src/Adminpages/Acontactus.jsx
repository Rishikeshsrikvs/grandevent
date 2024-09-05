import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Ensure api is properly configured with Axios
import { useAuth } from './auth/AuthContext';
import './Aevents.css';
import './Acontactus.css';

const Acontactus = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [contacts, setContacts] = useState([]); // State to store contacts

  // Fetch contacts from the API on component mount and after each click
  useEffect(() => {
    fetchContacts();
  }, [token]);

  const fetchContacts = () => {
    api.get('/api/admin/contact', {
      headers: {
        authorization: token, // Include the token with Bearer schema
      },
    })
      .then((response) => {
        // Sort contacts by 'done' status and date
        const sortedContacts = response.data.sort((a, b) => {
          if (a.done === b.done) {
            // Sort by date if both have the same done status
            return new Date(b.date) - new Date(a.date);
          }
          return a.done ? 1 : -1; // Move undone contacts to the top
        });
        setContacts(sortedContacts); // Set the contacts data from the response
      })
      .catch((error) => {
        console.error('There was an error fetching the contacts!', error);
      });
  };

  // Handler to mark the contact as done
  const handleDoneClick = (contactId) => {
    console.log('Function triggered', token);

    api.put(`/api/admin/contactCheck/${contactId}`, 
      {}, // Assuming no request body needed
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: token, // Add the authorization token with Bearer schema
        },
      }
    )
    .then((response) => {
      console.log('Contact marked as done successfully', response.data);
      fetchContacts(); // Refetch contacts after marking as done
    })
    .catch((error) => {
      console.error('There was an error marking the contact as done!', error);
    });
  };

  return (
    <div className="adashmmain">
      <h1>CONTACTS</h1>
      <div className='contactformcon'>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>MESSAGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr 
                  key={contact._id} 
                  className='contactdetail'
                  style={{ backgroundColor: contact.done ? 'lightgreen' : '#FFFFFF' }} // Green background if done is true
                >
                  <td>{contact.contactName}</td>
                  <td>{contact.contact}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <div className='eventbuttonstr'>
                    {!contact.done && (
                        <div className="cadone" onClick={() => handleDoneClick(contact._id)}>CHECK</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Acontactus;
