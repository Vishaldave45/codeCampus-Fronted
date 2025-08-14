// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

import "../styles.css"; 
export default function Navbar() {
  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">CodeCampus</Link>
      </div>

      {/* Center: Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
      </nav>

      {/* Right: Search + Profile */}
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile">
          <span>👤</span>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}
