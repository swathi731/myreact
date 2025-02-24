import React from "react";

function Aboutus() {
  return (
    <div className="container-fluid mt-5 px-4">  {/* Use container-fluid to span full width */}
      <h1 className="text-primary mb-4">About Us</h1>
      <p className="lead text-muted">
        Welcome to FreshMart, your one-stop destination for fresh produce and dairy products. We are passionate about delivering high-quality,
        locally sourced food items to our community.
      </p>
      
      <h2 className="text-success">Our Mission</h2>
      <p className="text-dark">
        Our mission is to provide fresh, sustainable, and nutritious food options while supporting local farmers and businesses. We believe in transparency, quality, and the importance of healthy living.
      </p>
      
      <h2 className="text-warning">Our Values</h2>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Quality:</strong> We prioritize the freshness and quality of every product.
        </li>
        <li className="list-group-item">
          <strong>Sustainability:</strong> We are committed to environmentally responsible practices.
        </li>
        <li className="list-group-item">
          <strong>Community:</strong> We support local farmers and contribute to the local economy.
        </li>
        <li className="list-group-item">
          <strong>Integrity:</strong> We operate with honesty and transparency.
        </li>
      </ul>
      
      <h2 className="text-info">Our Team</h2>
      <p className="text-dark">
        Our dedicated team is committed to providing the best service. From our quality assurance experts to our friendly customer service representatives, every member of FreshMart is here to serve you.
      </p>
      
      <p className="text-dark">
        If you have any questions, please don't hesitate to{" "}
        <a href="/contactus" className="text-decoration-none text-primary">contact us</a>.
      </p>
    </div>
  );
}

export default Aboutus;
