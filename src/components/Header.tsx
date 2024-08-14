import React, { useState } from "react";
import "./Header.css"; // Import the CSS file for styling

import instagramIcon from "../assets/instagram-icon.svg";
import naverIcon from "../assets/naver-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import menuIcon from "../assets/burger-menu-icon.svg"; // Hamburger menu icon

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="social-media">
        <a
          href="https://www.instagram.com/nadiaxcoffee/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
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
      <div className="company-name">nadia coffee</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <a
            href="https://www.instagram.com/nadiaxcoffee/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://smartstore.naver.com/nadiacoffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naver
          </a>
          <a
            href="https://www.youtube.com/@nadiaxcoffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
