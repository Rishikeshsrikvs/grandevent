import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get state
import './Menudetail.css';
import api from '../api/api';

const Menudetail = () => {
  const location = useLocation();
  const { itemId, menuType } = location.state; // Extract itemId and menuType from state
  const [menuDetail, setMenuDetail] = useState(null);

  useEffect(() => {
    // Fetch menu detail data from the API using itemId and menuType
    api.get(`/${menuType}/${itemId}`)
      .then(response => {
        setMenuDetail(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu detail data:', error);
      });
  }, [itemId, menuType]);

  return (
    <div className='menudetailparent'>
      {menuDetail ? (
        <>
          <div className="menudetailimg">
            <img src={`${api.defaults.baseURL}/${menuType}Image/${menuDetail._id}`} alt={menuDetail.menuName} />
          </div>
          <div className='menudetailbtn'>
            <button
              onClick={() => window.open(`${api.defaults.baseURL}/${menuType}PDF/${menuDetail._id}`, '_blank')}
            >
              DOWNLOAD
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Menudetail;
