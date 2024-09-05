import React, { useEffect, useState } from 'react';
import './Amenu.css';
import { useAuth } from './auth/AuthContext';
import api from '../api/api';

const Amenu = () => {
  const token = useAuth().token;

  const [pdfFile, setPdfFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [menuType, setMenuType] = useState('breakfast');
  const [menuTitle, setMenuTitle] = useState('');
  const [message, setMessage] = useState('');
  const [menuList, setMenuList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMenuImage, setCurrentMenuImage] = useState('');

  useEffect(() => {
    fetchAllMenus();
  }, [token]);

  const fetchAllMenus = () => {
    const endpoints = ['breakfast', 'lunch', 'dinner', 'differ'];
    const fetchPromises = endpoints.map((type) =>
      api.get(`/api/admin/${type}`, {
        headers: {
          authorization: token,
        },
      })
    );

    Promise.all(fetchPromises)
      .then((responses) => {
        const combinedMenus = responses.reduce((acc, response, index) => {
          const menus = response.data.map((menu) => ({
            ...menu,
            type: endpoints[index],
          }));
          return [...acc, ...menus];
        }, []);
        setMenuList(combinedMenus);
      })
      .catch((error) => {
        console.error('Error fetching menu lists:', error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!menuType || !pdfFile || !thumbnailFile || !menuTitle) {
      setMessage('Menu title, PDF, and thumbnail are required.');
      return;
    }

    const formData = new FormData();
    formData.append('menuTitle', menuTitle);
    formData.append('PDF', pdfFile);
    formData.append('Thumbnail', thumbnailFile);

    try {
      await api.post(`/api/admin/${menuType}`, formData, {
        headers: {
          authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Menu uploaded successfully!');
      setPdfFile(null);
      setThumbnailFile(null);
      setMenuTitle('');
      fetchAllMenus(); // Refetch the menu list after a successful upload
    } catch (error) {
      setMessage('There was an error uploading the menu.');
      console.error('Menu upload error:', error);
    }
  };

  const handleImageFetch = async (menuId, type) => {
    try {
      const response = await fetch(`${api.defaults.baseURL}/${type}Image/${menuId}`, {
        headers: {
          authorization: token,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch image');

      const blob = await response.blob(); // Convert response to Blob
      const imageUrl = URL.createObjectURL(blob); // Create a local URL for the Blob
      setCurrentMenuImage(imageUrl);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching image:', error);
      setMessage('There was an error fetching the image.');
    }
  };
  const handleDelete = async (menuId, type) => {
    try {
      await api.delete(`/api/admin/${type}/${menuId}`, {
        headers: {
          authorization: token,
        },
      });
      setMessage('Menu deleted successfully!');
      fetchAllMenus(); // Refetch menus after successful deletion
    } catch (error) {
      setMessage('There was an error deleting the menu.');
      console.error('Menu delete error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentMenuImage('');
  };

  return (
    <div className='adashmmain'>
      <h1>GALLERY</h1>
      <div className="galmain">
        <h1>GALLERY LIST</h1>
        <form className="galform" onSubmit={handleSubmit}>
          {/* Form content for uploading files */}
          {/* Your existing form content */}
          <div className="galsub">
            <div className="galin">
              <label htmlFor="thumbnailFile">UPLOAD THUMBNAIL</label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                id="thumbnailFile"
                onChange={(e) => setThumbnailFile(e.target.files[0])}
                required
              />
              <p>{thumbnailFile ? `Selected Thumbnail: ${thumbnailFile.name}` : ''}</p>
            </div>

            <div className="galline">
              <span className='galln'></span>
              <span>OR</span>
              <span className='galln'></span>
            </div>
            <div className="galin">
              <label htmlFor="">DRIVE</label>
              <input type="file" />
            </div>
          </div>
          <div className="galsub">
            <div className="galin">
              <label htmlFor="pdfFile">UPLOAD PDF</label>
              <input
                type="file"
                accept=".pdf"
                id="pdfFile"
                onChange={(e) => setPdfFile(e.target.files[0])}
                required
              />
              <p>{pdfFile ? `Selected PDF: ${pdfFile.name}` : ''}</p>
            </div>

            <div className="galline">
              <span className='galln'></span>
              <span>OR</span>
              <span className='galln'></span>
            </div>
            <div className="galin">
              <label htmlFor="">DRIVE</label>
              <input type="file" />
            </div>
          </div>
          <div className="gatit">
            <label htmlFor="menuType">MENU TYPE</label>
            <select
              name="menuType"
              id="menuType"
              value={menuType}
              onChange={(e) => setMenuType(e.target.value)}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="differ">Differ</option>
            </select>
          </div>
          <div className="gatit">
            <label htmlFor="menuTitle">MENU TITLE</label>
            <input
              type="text"
              id="menuTitle"
              value={menuTitle}
              onChange={(e) => setMenuTitle(e.target.value)}
              required
            />
          </div>
          <div className="galbutton"><button type="submit">SUBMIT</button></div>
          {message && <p className="success-message">{message}</p>}
        </form>
      </div>

      <table className='galtable'>
        <thead>
          <tr>
            <th className='gatno'>No</th>
            <th>Menu Type</th>
            <th className='gattit'>Title</th>
            <th className='gatnone'></th>
          </tr>
        </thead>
        <tbody>
          {menuList.length > 0 ? (
            menuList.map((menu, index) => (
              <tr key={menu._id}>
                <td>{index + 1}</td>
                <td>{menu.type}</td>
                <td>{menu.menuName}</td>
                <td className='galdeletebtn'>
                  <button onClick={() => handleDelete(menu._id, menu.type)}>DELETE</button>
                  <button onClick={() => handleImageFetch(menu._id, menu.type)}>VIEW</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No menus found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for showing the image */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            {currentMenuImage && <img src={currentMenuImage} alt="Menu Preview" className="modal-image" />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Amenu;
