import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // Import axios for API requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Adminlogin.css";
import { useAuth } from "./auth/AuthContext"; // Import useAuth from your AuthContext
import api from "../api/api"; // Assume you have a custom API instance

const Adminlogin = () => {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Store each digit in an array
  const [errorMessage, setErrorMessage] = useState("");
  const otpPopupRef = useRef(null);
  const inputRefs = useRef([]); // Array to store input refs
  const navigate = useNavigate();

  // Access the auth context
  const { login, token } = useAuth();

  // Handle login submission
  const handleLoginSubmit = async () => {
    try {
      const response = await api.post("/api/admin/login", {
        adminEmail,
        adminPassword,
      });

      if (response.status === 200) {
        // Store the JWT token in the context using login function
        login(response.data.jwt);
        console.log(response.data.jwt);

        setShowOtpPopup(true);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  // Handle OTP popup close
  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false);
  };

  // Handle clicking outside the OTP popup
  const handleClickOutside = (event) => {
    if (otpPopupRef.current && !otpPopupRef.current.contains(event.target)) {
      setShowOtpPopup(false);
    }
  };

  useEffect(() => {
    if (showOtpPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOtpPopup]);

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      // Validate that the input is a digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if available
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key to move focus to the previous input
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle pasting full OTP
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(pasteData)) {
      // Only handle if exactly 6 digits are pasted
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5].focus(); // Focus on the last input
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async () => {
    const otpValue = otp.join(""); // Combine the OTP values into one string

    try {
      const response = await api.get(`/api/admin/verify/${otpValue}`, {
        headers: { authorization: `${token}` }, // Use the token from AuthContext
      });

      if (response.status === 200) {
        login(response.data.jwt); // Update token
        navigate("/admin/SHRA/dashboard"); // Redirect to dashboard on successful OTP verification
      } else {
        setErrorMessage("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during OTP verification.");
    }
  };

  return (
    <div className="aloginparent">
      <div className="aloginmain">
        <h1>ADMIN PAGE</h1>
        <div className="alogincontainer">
          <div className={`aloginsubcon ${showOtpPopup ? "blur" : ""}`}>
            <h1>GRAND CATERING</h1>
            <div className="aloginin">
              <label>Email</label>
              <input
                type="text"
                value={adminEmail}
                autoComplete="off"
                onChange={(e) => setAdminEmail(e.target.value)}
              />
            </div>
            <div className="aloginin">
              <label>Password</label>
              <input
                type="password"
                value={adminPassword}
                autoComplete="off"
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <button className="aloginbtn" onClick={handleLoginSubmit}>
              Submit
            </button>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>

          {showOtpPopup && (
            <div className="aloginpop" ref={otpPopupRef}>
              <button className="aloginclose" onClick={handleCloseOtpPopup}>
                X
              </button>
              <div className="aloginotpmain">
                <label>OTP</label>
                <div className="otp-field">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      ref={(el) => (inputRefs.current[index] = el)} // Store the input reference
                      type="text"
                      value={value}
                      autoComplete="off"
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      onPaste={handlePaste}
                      maxLength="1"
                    />
                  ))}
                </div>
                <button className="aloginotpbtn" onClick={handleOtpSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
