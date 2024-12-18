import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "./auth/AuthContext";
import test from "./../assets/admin/testimonial.png";
import "./Aevents.css";

const Atestimonial = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const token = auth.token;

  const [testimonials, setTestimonials] = useState([]);
  const [editingId, setEditingId] = useState(null); // ID of the testimonial being modified
  const [editedDescription, setEditedDescription] = useState(""); // Updated description

  // Fetch testimonials on mount
  useEffect(() => {
    api
      .get("/api/admin/testimonials", {
        headers: { authorization: token },
      })
      .then((response) => {
        setTestimonials(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching testimonials!", error);
      });
  }, [token]);

  // Handler to cancel a testimonial
  const handleDenyClick = (testimonialId) => {
    api
      .delete(`/api/admin/deleteTestimonial/${testimonialId}`, {
        headers: { authorization: token },
      })
      .then(() => {
        setTestimonials((prev) =>
          prev.filter((testimonial) => testimonial._id !== testimonialId)
        );
      })
      .catch((error) => console.error("Error deleting testimonial!", error));
  };

  // Handler to approve a testimonial
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
      <h1>TESTIMONIALS</h1>
      <div className="aeventcon">
        <div className="aeventtitlecon">
          <button className="atestname">
            <span>
              <img src={test} alt="" />
            </span>
            <span>CLIENT FEEDBACK</span>
          </button>
          <button onClick={() => navigate("/admin/SHRA/Approvedtestimonials")}>
            <span>Approved</span>
          </button>
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
                              className="eadone"
                              onClick={() => handleDoneClick(testimonial._id)}
                            >
                              APPROVE
                            </button>
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
                    {" "}
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

export default Atestimonial;
