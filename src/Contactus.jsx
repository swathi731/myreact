import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send the data to a server here.
    alert(`Thank you for contacting us, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out to us through this page. We are here to answer any questions you might have.
      </p>
      <div className="row">
        {/* Contact Details Section */}
        <div className="col-md-6">
          <h3>Our Contact Details</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fa-solid fa-map-marker-alt me-2"></i>
              123 Main Street, City, Country
            </li>
            <li>
              <i className="fa-solid fa-phone me-2"></i>
              +1 (234) 567-890
            </li>
            <li>
              <i className="fa-solid fa-envelope me-2"></i>
              contact@freshmart.com
            </li>
          </ul>
        </div>
        {/* Contact Form Section */}
        <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
