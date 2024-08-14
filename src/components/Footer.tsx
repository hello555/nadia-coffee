import React from "react";
import "./Footer.css";

import instagramIcon from "../assets/instagram-icon.svg";
import naverIcon from "../assets/naver-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Nadia Coffee is committed to providing the finest blends of coffee
            sourced from the best farms around the world.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@nadiacoffee.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>Address: 경기도 화성시 동탄치동천로2길 4-13, 1층</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/nadiaxcoffee/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://smartstore.naver.com/nadiacoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={naverIcon} alt="Naver" className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/@nadiaxcoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nadia Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
