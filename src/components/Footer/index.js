import React from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1728123150/33af368e1471bcf0efe704356a08337d_ab9wxl.png"
            alt="Food Truck"
            className="footer-logo"
          />
        </div>
        <div className="footer-center">
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>Email: example2020@gmail.com</p>
          <p>Phone: (904) 443-0343</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>More</h3>
            <ul>
              <li>About Us</li>
              <li>Products</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h3>Social Links</h3>
          <ul>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Food Truck Example</p>
      </div>
    </footer>
  );
};

export default Footer;
