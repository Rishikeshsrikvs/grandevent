import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get state
import './Menudetail.css';
import api from '../api/api';

const Menudetail = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { itemId, menuType } = location.state; // Extract itemId and menuType from state
  const [menuDetail, setMenuDetail] = useState(null);
  console.log(`${api.defaults.baseURL}/${menuType}Image/${itemId}`);
  
  // useEffect(() => {
  //   // Fetch menu detail data from the API using itemId and menuType
  //   api.get(`/${menuType}/${itemId}`)
  //     .then(response => {
  //       setMenuDetail(response.data);
  //       console.log(response.data);
  //       console.log(`${api.defaults.baseURL}/${menuType}PDF/${menuDetail._id}`);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching menu detail data:', error);
  //     });
  // }, [itemId, menuType]);

  return (
    <div className='menudetailparent'>
      
        <>
          <div className="menudetailimg">
          <iframe
              src={`${api.defaults.baseURL}/${menuType}ViewPDF/${itemId}#toolbar=0`}
              style={{
                border: 'none',  // Remove border to fit better in container
                backgroundColor: 'white',  // Attempt to make background transparent
              }}  // Remove border to fit better in container
              
              scrolling='no'
                // Set specific height to avoid scrolling
              title='Menu PDF'
              
            ></iframe>
            {/* <img src={`${api.defaults.baseURL}/${menuType}ViewPDF/${itemId}`} alt={itemId} /> */}
          </div>
          <div className='menudetailbtn'>
            <button
              onClick={() => window.open(`${api.defaults.baseURL}/${menuType}PDF/${itemId}`, '_blank')}
            >
              DOWNLOAD
            </button>
          </div>
        </>
  
    </div>
  );
};

export default Menudetail;
