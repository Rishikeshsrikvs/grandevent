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
  
    // Fetch menu list on component mount
    useEffect(() => {
      fetchMenus();
    }, [token]);
  
    const fetchMenus = () => {
      api.get(`/api/admin/${menuType}`, {
        headers: {
          authorization: token,
        },
      })
        .then((response) => {
          setMenuList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching menu list:', error);
        });
    };
  
    // Handle form submission for uploading menu
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!pdfFile || !thumbnailFile || !menuTitle) {
        setMessage('Menu title, PDF, and thumbnail are required.');
        return;
      }
  
      const formData = new FormData();
      formData.append('menuTitle', menuTitle);
      formData.append('PDF', pdfFile);
      formData.append('Thumbnail', thumbnailFile);
  
      try {
        const response = await api.post(`/api/admin/${menuType}`, formData, {
          headers: {
            authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        });
  
        setMessage('Menu uploaded successfully!');
        setPdfFile(null);
        setThumbnailFile(null);
        setMenuTitle('');
        fetchMenus(); // Refetch the menu list after a successful upload
      } catch (error) {
        setMessage('There was an error uploading the menu.');
        console.error('Menu upload error:', error);
      }
    };
  
    // Handle delete menu
    const handleDelete = async (menuId) => {
      try {
        await api.delete(`/api/admin/${menuType}/${menuId}`, {
          headers: {
            authorization: token,
          },
        });
        setMessage('Menu deleted successfully!');
        fetchMenus(); // Refetch menus after successful deletion
      } catch (error) {
        setMessage('There was an error deleting the menu.');
        console.error('Menu delete error:', error);
      }
    };
  
  return (
    <div className='adashmmain'>
      <h1>GALLERY</h1>
      <div className="galmain">
        <h1>GALLERY LIST</h1>
        <form className="galform" onSubmit={handleSubmit}>
            <div className="galsub">
            <div className="galin">
              <label htmlFor="thumbnailFile">UPLOAD THUMBNAIL</label>
              <input
                type="file"
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
              
              <div className="galbutton"><button type="submit">SUBMIT</button></div>
              {message && <p className="success-message">{message}</p>}
            </div>
            <div className="galsub">
            <div className="galin">
              <label htmlFor="pdfFile">UPLOAD PDF</label>
              <input
                type="file"
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
             
              <div className="galbutton"><button type="submit">SUBMIT</button></div>
              {message && <p className="success-message">{message}</p>}
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
        </form>
      </div>
      <table className='galtable'>
        <thead>
          <tr>
            <th className='gatno'>No</th>
            <th className='gattit'>Title</th>
            <th className='gatnone'></th>
          </tr>
        </thead>
        <tbody>
          {imageList.length > 0 ? (
            imageList.map((image, index) => (
              <tr key={image._id}>
                <td>{index + 1}</td>
                <td>{image.imageTitle}</td>
                <td className='galdeletebtn'>
                  <button onClick={() => handleDelete(image.imageName)}>DELETE</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No images found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Amenu;
