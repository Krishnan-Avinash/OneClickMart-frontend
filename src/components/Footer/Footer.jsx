import React from "react";
import { Link } from "react-router-dom";
import insta from "../../assets/instagram2.png";
import li from "../../assets/li2.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-first">
        <h1>OneClickMart</h1>
        <h3>Subscribe</h3>
        <p>Get 10% off on your first order</p>
        <section>
          <input type="text" placeholder="Enter your email" />
          <span>&rarr;</span>
        </section>
      </div>
      <div className="footer-second">
        <h2>Support</h2>
        <h6>Gurugram Haryana</h6>
        <h6>avinash.krishnan1605@gmail.com</h6>
        <h6>+91 - 8373927883</h6>
      </div>
      <div className="footer-third">
        <h2>Account</h2>
        <h6>Cart</h6>
      </div>
      <div className="footer-forth">
        <h2>Quick Link</h2>
        <h6>Privacy Policy</h6>
        <h6>Terms Of Use</h6>
        <h6>FAQ</h6>
        <h6>Contact</h6>
      </div>
      <div className="footer-fifth">
        <h2>Social Media</h2>
        <div className="footer-links">
          <Link
            to="https://www.instagram.com/_avinashkrishnan?utm_source=qr&igsh=MTFxZHltNW5maWRjZw=="
            target="_blank"
          >
            <img src={insta} alt="Err" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/avinashkrishnan1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img src={li} alt="Err" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
