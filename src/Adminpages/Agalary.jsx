import React, { useEffect, useState } from 'react';
import './Agalary.css';
import { useAuth } from './auth/AuthContext';
import api from '../api/api';

const Agalary = () => {
  const token = useAuth().token;

  const [galleryImage, setGalleryImage] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [message, setMessage] = useState('');
  const [uploadedTitle, setUploadedTitle] = useState('');
  const [imageList, setImageList] = useState([]);

  // Fetch image list on component mount
  useEffect(() => {
    fetchImages();
  }, [token]);

  const fetchImages = () => {
    api.get('/api/admin/images', {
      headers: {
        authorization: token
      }
    })
    .then((response) => {
      setImageList(response.data);
    })
    .catch((error) => {
      console.error('Error fetching image list:', error);
    });
  };

  // Handle form submission for uploading images
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!galleryImage || !imageTitle) {
      setMessage('Both title and image are required.');
      return;
    }

    const formData = new FormData();
    formData.append('galleryImage', galleryImage);
    formData.append('imageTitle', imageTitle);

    try {
      const response = await api.post('/api/admin/imageUpload', formData, {
        headers: {
          authorization: token,
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Image uploaded successfully!');
      setUploadedTitle(response.data.imageTitle);
      setGalleryImage(null);
      setImageTitle('');
      fetchImages(); // Refetch the images after a successful upload
    } catch (error) {
      setMessage('There was an error uploading the image.');
      console.error('Image upload error:', error);
    }
  };

  // Handle delete image
  const handleDelete = async (imageName) => {
    try {
      await api.delete(`/api/admin/image/${imageName}`, {
        headers: {
          authorization: token
        }
      });
      setMessage('Image deleted successfully!');
      fetchImages(); // Refetch images after successful deletion
    } catch (error) {
      setMessage('There was an error deleting the image.');
      console.error('Image delete error:', error);
    }
  };
  
  return (
    <div className='adashmmain'>
      <h1>GALLERY</h1>
      <div className="galmain">
        <h1>GALLERY LIST</h1>
        <form className="galsub" onSubmit={handleSubmit}>
          <div className="galin">
            <label htmlFor="galleryImage">UPLOAD IMAGE</label>
            <input 
              type="file" 
              id="galleryImage" 
              onChange={(e) => setGalleryImage(e.target.files[0])}
              required 
            />
            <p>{galleryImage ? `Uploaded Image: ${galleryImage.name}` : ''}</p>
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
          <div className="galtitle">
            <label htmlFor="imageTitle" className='gaimagetitle'>IMAGE TITLE</label>
            <input 
              type="text" 
              id="imageTitle" 
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              required 
            />
          </div>
          <div className="galbtn"><button type="submit">SUBMIT</button></div>
          {message && <p className="success-message">{message}</p>}
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
              <tr key={image.imageTitle}>
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

export default Agalary;
