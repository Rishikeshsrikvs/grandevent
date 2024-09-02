import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Menulist.css';
import api from '../api/api';

const Menulist = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const menuType = location.state?.menuType || 'breakfast'; // Default to 'breakfast' if not passed
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch data from the corresponding API
    api.get(`/${menuType}`)
      .then(response => {
        setMenuItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, [menuType]);

  // Function to handle view menu button click
  const handleViewMenu = (itemId) => {
    // Navigate to Menudetail component with the itemId
    navigate('/menudetail', { state: { itemId, menuType } });
  };

  return (
    <div className='menulistparent'>
      <div className="mlhead">
        <h1>Explore culinary <span>delish</span></h1>
      </div>
      <div className="mlcontainer">
        {menuItems.map((item) => (
          <div className="mlcard" key={item._id}>
            {/* Dynamically generate image source based on menuType */}
            <div className="mlimg">
              <img
                src={`${api.defaults.baseURL}/${menuType}Image/${item._id}`}
                alt={item.menuName}
              />
            </div>
            <h1>{item.menuName}</h1>
            <div className="mlbtns">
              {/* View Menu button */}
              <button
                onClick={() => handleViewMenu(item._id)} // Use handleViewMenu function
              >
                VIEW MENU
              </button>
              {/* Download PDF button */}
              <button
                onClick={() => window.open(`${api.defaults.baseURL}/${menuType}PDF/${item._id}`, '_blank')}
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menulist;
