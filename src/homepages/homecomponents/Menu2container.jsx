import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import n22 from './../../assets/menu/n22.png';
import api from '../../api/api';

const Menu2container = () => {
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data from the corresponding API
        api.get(`/differ`)
          .then(response => {
            setMenuItems(response.data);

          })
          .catch(error => {
            console.error('Error fetching menu data:', error);
          });
      }, []);

  return (
    <div className="menu2container">
            {menuItems.map((item) => (
          <div className="manu2card" key={item._id}>
            {/* Dynamically generate image source based on menuType */}
            <div className="mnimg">
              <img
                src={`${api.defaults.baseURL}/differImage/${item._id}`}
                alt={item.menuName}
              />
            </div>
            <div className="mntitle">
                 <h1>{item.menuName}</h1>
            </div>
            <div className="mnbtn"><button  onClick={()=>{ navigate('/menuview', { state: { menuType: 'differ' } })}}>View Menu</button></div>
            {/* <div className="mlbtns">
              
              <button
                onClick={() => handleViewMenu(item._id)} // Use handleViewMenu function
              >
                VIEW MENU
              </button>
              
              <button
                onClick={() => window.open(`${api.defaults.baseURL}/${menuType}PDF/${item._id}`, '_blank')}
              >
                DOWNLOAD
              </button>
            </div> */}
          </div>
        ))}




    {/* <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
            <h1>Dinner</h1>
        </div>
        <div className="mnbtn"><button>View Menu</button></div>
    </div>
    <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
        <h1>Dinner</h1>
    </div>
    <div className="mnbtn"><button>View Menu</button></div>
    </div>
    <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
        <h1>Dinner</h1>
    </div>
    <div className="mnbtn"><button >View Menu</button></div>
    </div>
    <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
        <h1>Dinner</h1>
    </div>
    <div className="mnbtn"><button>View Menu</button></div>
    </div>
    <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
        <h1>Dinner</h1>
    </div>
    <div className="mnbtn"><button>View Menu</button></div>
    </div>
    <div className="manu2card">
        <div className="mnimg"><img src={n22} alt="" /></div>
        <div className="mntitle">
        <h1>Dinner</h1>
    </div>
    <div className="mnbtn"><button>View Menu</button></div>
    </div> */}
    
</div>
  )
}

export default Menu2container
