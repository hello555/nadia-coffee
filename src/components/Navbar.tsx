import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
