import React, { useState } from "react";
import api from "../../../api/api";
import "./Menuview.css";
import img1 from "../Menuview/menuimage/Marriageimage.png";
import img2 from "../Menuview/menuimage/Rectangle1.png";
import img3 from "../Menuview/menuimage/menuimg2.jpg";
import img4 from "../Menuview/menuimage/weddingcat.png";
import img5 from "../Menuview/menuimage/Rectangle7.png";
import img6 from "../Menuview/menuimage/menuimg.png";
import { useNavigate, useLocation } from "react-router-dom";

const Menuview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuType = location.state?.menuType || "breakfast";

  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true); // Indicate submission is in progress

      // Make API request using Axios
      try {
        const response = await api.post("/brocher", {
          contactName: formData.name,
          contact: formData.mobile,
        });

       // Handle success response
        

        // After successful form submission, navigate to MenuList
        navigate("/menulist", { state: { menuType } });
      } catch (error) {
        console.error("There was an error submitting the form:", error);
        alert("Failed to create contact. Please try again.");
      } finally {
        setIsSubmitting(false); // Reset submission state
      }
    }
  };

  return (
    <div className="menuview">
      <div className="menu-heading">
        <h1>
          Explore culinary <i>delish</i>
        </h1>
      </div>
      <div className="container">
        <div className="gallery">
          <div className="grid grid1">
            <div className="menu-box">
              <img src={img1} alt="image1" className="image1" />
            </div>
            <div className="menu-box">
              <img src={img2} alt="image2" className="image2" />
            </div>
          </div>
          <div className="grid grid2">
            <div className="menu-box">
              <img src={img3} alt="image3" className="image3" />
            </div>
            <div className="menu-box">
              <img src={img4} alt="image4" className="image2" />
            </div>
          </div>
          <div className="grid">
            <div className="menu-box">
              <img src={img5} alt="image5" className="image1" />
            </div>
            <div className="menu-box">
              <img src={img6} alt="image6" className="image2" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}

            <button className="sub-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menuview;
