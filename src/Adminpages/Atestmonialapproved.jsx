import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api"; // Ensure api is properly configured with Axios
import { useAuth } from "./auth/AuthContext";
import test from "./../assets/admin/testimonial.png";
import "./Aevents.css";
const Atestimonialapproved = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [testimonials, setTestimonials] = useState([]); // Initialize as an empty array
  const [editingId, setEditingId] = useState(null); // ID of the testimonial being modified
  const [editedDescription, setEditedDescription] = useState(""); // Updated description

  // Fetch testimonials from the API on component mount
  useEffect(() => {
    api
      .get("/api/admin/approvedTestimonial", {
        headers: {
          authorization: token, // Ensure the token is passed correctly
        },
      })
      .then((response) => {
        setTestimonials(response.data.message || []); // Ensure response is handled properly
      })
      .catch((error) => {
        console.error("There was an error fetching the testimonials!", error);
      });
  }, [token]);

  // Handler to cancel the testimonial
  const handleDenyClick = (testimonialId) => {
    console.log(testimonialId);

    api
      .delete(
        `/api/admin/deleteTestimonial/${testimonialId}`,

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: token, // Add the authorization token
          },
        }
      )
      .then((response) => {
        console.log("Testimonial canceled successfully", response.data);
        // Optionally, remove the canceled testimonial from the UI or refetch testimonials
        setTestimonials(
          testimonials.filter(
            (testimonial) => testimonial._id !== testimonialId
          )
        );
      })
      .catch((error) => {
        console.error("There was an error cancelling the testimonial!", error);
      });
  };

  const handleDoneClick = (testimonialId) => {
    api
      .put(
        "/api/admin/approveTestimonial",
        { testimonialId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token,
          },
        }
      )
      .then(() => {
        setTestimonials((prev) =>
          prev.filter((testimonial) => testimonial._id !== testimonialId)
        );
      })
      .catch((error) => console.error("Error approving testimonial!", error));
  };

  // Enable editing mode for the selected testimonial
  const handleModifyClick = (testimonial) => {
    setEditingId(testimonial._id);
    setEditedDescription(testimonial.description); // Prepopulate with the current description
  };

  // Save modified description
  const handleSaveModify = (testimonialId) => {
    api
      .put(
        "/api/admin/editTestimonial",
        {
          testimonialId,
          description: editedDescription, // Send updated description
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token,
          },
        }
      )
      .then(() => {
        setTestimonials((prev) =>
          prev.map((testimonial) =>
            testimonial._id === testimonialId
              ? { ...testimonial, description: editedDescription }
              : testimonial
          )
        );
        setEditingId(null); // Exit editing mode
      })
      .catch((error) =>
        console.error("Error modifying the testimonial!", error)
      );
  };

  return (
    <div className="adashmmain">
      <h1>TESTIMONIALS / APPROVED</h1>
      <div className="aeventcon">
        <div className="aeventtitlecon">
          <button className="atestname">
            <span>
              <img src={test} alt="" />
            </span>
            <span>CLIENT FEEDBACK</span>
          </button>
          {/* <button onClick={() => navigate('/admin/SHRA/Approvedtestimonials')}>
            <span>
              <img src="" alt="" />
            </span>
            <span>Approved Testomonials</span>
          </button> */}
        </div>
        <div className="aeventtable">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <tr key={testimonial._id} className="eventdetail">
                    <td>{index + 1}</td>
                    <td>{testimonial.name}</td>
                    <td>{testimonial.contact}</td>
                    <td>
                      {editingId === testimonial._id ? (
                        <input
                          type="text"
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                        />
                      ) : (
                        testimonial.description
                      )}
                    </td>
                    <td>
                      <div className="eventbuttonstr">
                        {editingId === testimonial._id ? (
                          <>
                            <button
                              className="easave"
                              onClick={() => handleSaveModify(testimonial._id)}
                            >
                              SAVE
                            </button>
                            <button
                              className="eacancel"
                              onClick={() => setEditingId(null)}
                            >
                              CANCEL
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="eadeny"
                              onClick={() => handleDenyClick(testimonial._id)}
                            >
                              DENY
                            </button>
                            <button
                              className="eamodify"
                              onClick={() => handleModifyClick(testimonial)}
                            >
                              MODIFY
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="nocontent">
                    No testimonials available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Atestimonialapproved;
