import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Marquee from "react-fast-marquee";
import api from "../../api/api";
import test1 from "./../../assets/testimonial/cart.webp";
import test2 from "./../../assets/testimonial/central.jpg";
import test3 from "./../../assets/testimonial/images.jpeg";
import test4 from "./../../assets/testimonial/eifil.jpg";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the API using Axios
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/testimonials");
        // Sort testimonials by date in descending order
        const sortedTestimonials = response.data.message.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setTestimonials(sortedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Random images array
  const randomImages = [test1, test2, test4, test3];

  return (
    <div className="landfeedcon">
      <div className="landfeedback">
        <Marquee className="marq" gradient={false} speed={100}>
          {testimonials.map((testimonial, index) => (
            <div className="feedcard" key={index}>
              <div className="land3feedimg">
                <img
                  src={randomImages[index % randomImages.length]}
                  alt={`testimonial ${index + 1}`}
                />
              </div>
              <h1>{testimonial.description}</h1>
              <div className="land3feedbtn">{testimonial.name}</div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="landfeedmain">
        <div className="mainfeedcard">
          <p>
            I recently used Grand events for a birthday party , and everything
            was fantastic. The food was delicious, beautifully presented, and
            the service was top-notch. The team was professional and attentive,
            making the event seamless and enjoyable. Highly recommend!
          </p>
          <div className="mainfeedprofile">
            <img src={test1} alt="" />
            <h5>Saraswathi</h5>
          </div>
        </div>
        <div className="mainfeedcard">
          <p>
            Great food and Professional Staff. Very Friendly. Best part is book
            and forget, they will do the rest. We ordered Vegetarian menu and
            all the guests gave positive feedback including the critics.
          </p>
          <div className="mainfeedprofile">
            <img src={test2} alt="" />
            <h5>Shanmugamk K</h5>
          </div>
        </div>
        <div className="mainfeedcard">
          <p>
            I have opted only for the catering services for my daughter’s first
            birthday and planned for 300 members in combination of veg and non
            veg. Guests were happy about the taste of the food and the servings
            were also managed well. Thank you.
          </p>
          <div className="mainfeedprofile">
            <img src={test3} alt="" />
            <h5>Sri Kanth</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
