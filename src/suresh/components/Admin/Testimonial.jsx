import React from 'react'
import './Testimonial.css';
import form from "./image/Form.png"
const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="testimonial-heading">
        <h3>testimonials</h3>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-header">
            <div className="test-left">
                <img src={form} alt="feedback" />
                <h1>client feedback</h1>
            </div>
            <div className="test-right">
                <button className='feed-approved'>approved</button>
            </div>
        </div>
        <div className="testimonial-body">
        <table >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Comments</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>BALA BALA</td>
                    <td>6786869061</td>
                    <td>VERY GOOD TASTE AND NEAT SERVICE</td>
                    <td>
                    <div className="row">
                        <button class="approve">Approve</button>
                        <button class="deny">Deny</button>
                        </div>
                        <button class="modify">Modify</button>
                    </td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>GOPAL LAKSHMINAN</td>
                    <td>7879707172</td>
                    <td>GRAND EVENT CATERING SERVICES IS THE FINEST IN CHENNAI</td>
                    <td>
                        <div className="row">
                        <button class="approve">Approve</button>
                        <button class="deny">Deny</button>
                        </div>
                        <button class="modify">Modify</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
