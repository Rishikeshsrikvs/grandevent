import React from 'react'
import './TestimonialApprove.css';
import form from "./image/Form.png"
const TestimonialApprove = () => {
  return (
    <div className='testimonialApprove'>
      <div className="testimonialApprove-heading">
        <h3>testimonials / Approved</h3>
      </div>
      <div className="testimonialApprove-container">
        <div className="testimonialApprove-header">
            <div className="test-left">
                <img src={form} alt="feedback" />
                <h1>client feedback</h1>
            </div>
            <div className="test-right">
                <button className='feed-approved'>approved</button>
            </div>
        </div>
        <div className="testimonialApprove-body">
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
                    <div className="testapp-row">
                        <button class="TestApp-approve">Modify</button>
                        <button class="TestApp-deny">Deny</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>GOPAL LAKSHMINAN</td>
                    <td>7879707172</td>
                    <td>GRAND EVENT CATERING SERVICES IS THE FINEST IN CHENNAI</td>
                    <td>
                        <div className="testapp-row">
                        <button class="TestApp-approve">Modify</button>
                        <button class="TestApp-deny">Deny</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default TestimonialApprove
