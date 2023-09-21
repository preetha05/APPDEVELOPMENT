// Navbar.js

import React from 'react';
import '../assets/Css/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Student Result Management</div>
      
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/academic">Services</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>
    </nav>
  );
}

export default NavBar;
