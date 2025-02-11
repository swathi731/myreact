import React from "react";

function Aboutus() {
  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>
        Welcome to FreshMart, your one-stop destination for fresh produce and
        dairy products. We are passionate about delivering high-quality,
        locally sourced food items to our community.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide fresh, sustainable, and nutritious food options
        while supporting local farmers and businesses. We believe in transparency,
        quality, and the importance of healthy living.
      </p>
      
      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Quality:</strong> We prioritize the freshness and quality of every product.
        </li>
        <li>
          <strong>Sustainability:</strong> We are committed to environmentally responsible practices.
        </li>
        <li>
          <strong>Community:</strong> We support local farmers and contribute to the local economy.
        </li>
        <li>
          <strong>Integrity:</strong> We operate with honesty and transparency.
        </li>
      </ul>
      
      <h2>Our Team</h2>
      <p>
        Our dedicated team is committed to providing the best service. From our
        quality assurance experts to our friendly customer service representatives,
        every member of FreshMart is here to serve you.
      </p>
      
      <p>
        If you have any questions, please don't hesitate to{" "}
        <a href="/contactus">contact us</a>.
      </p>
    </div>
  );
}

export default Aboutus;
