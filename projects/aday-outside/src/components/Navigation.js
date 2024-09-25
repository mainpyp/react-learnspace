import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
      <img src="/images/ado_logo.png" alt="A Day Outside Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#workshops">Workshops & Events</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#join">Join Us/Volunteer</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;