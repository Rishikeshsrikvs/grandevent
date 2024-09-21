import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Ensure api is properly configured with Axios
import { useAuth } from './auth/AuthContext';
import './Aevents.css';
import './Acontactus.css';

const Abrochure = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [contacts, setContacts] = useState([]); // State to store contacts

  // Function to fetch contacts from the API
  const fetchContacts = () => {
    api.get('/api/admin/brochers', {
      headers: {
        authorization: token // Use the correct authorization header
      }
    })
      .then((response) => {
        
        
        setContacts(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the contacts!", error);
      });
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts(); // Refetch contacts when component mounts
  }, [token]);

  // Handler to check the contact (mark as done)
  const handleDoneClick = (contactId) => {
    console.log('Function triggered', token);

    api.put(`/api/admin/brocherCheck/${contactId}`, 
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
      fetchContacts(); // Refetch contacts after marking one as done
    })
    .catch((error) => {
      console.error('There was an error marking the contact as done!', error);
    });
  };
 
  // Sort contacts: done = false first, then done = true sorted by date
  const sortedContacts = contacts
    .sort((a, b) => {
      if (a.done === b.done) {
        return new Date(a.date) - new Date(b.date); // If both are done/undone, sort by date
      }
      return a.done - b.done; // Sort by done status: false (0) comes before true (1)
    }
    


);

  return (
    <div className="adashmmain">
      <h1>Brochure</h1>
      <div className='contactformcon'>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>SERVICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {sortedContacts && sortedContacts.length > 0 ? (
              sortedContacts.map((contact) => (
                <tr key={contact._id} className='contactdetail' style={{ backgroundColor: contact.done ? 'lightgreen' : 'white' }}>
                  <td>{contact.contactName}</td>
                  <td>{contact.contact}</td>
                  <td>{contact.loction}</td> {/* Fixed field */}
                  <td>{contact.service}</td>   {/* Fixed field */}
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

export default Abrochure;
