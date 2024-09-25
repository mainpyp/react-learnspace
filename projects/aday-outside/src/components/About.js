import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        At 'A Day Outside,' our goal is to create a vibrant, inclusive community
        that encourages meaningful connection with nature and promotes well-being
        through outdoor experiences.
      </p>
      <div className="about-grid">
        <div className="about-item">
          <h3>Our Vision</h3>
          <p>To inspire a world where everyone can experience the joy and benefits of outdoor activities.</p>
        </div>
        <div className="about-item">
          <h3>Our Mission</h3>
          <p>To provide accessible, engaging, and educational outdoor experiences for people of all backgrounds and skill levels.</p>
        </div>
        <div className="about-item">
          <h3>Our Values</h3>
          <ul>
            <li>Environmental Stewardship</li>
            <li>Community Building</li>
            <li>Personal Growth</li>
            <li>Inclusivity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;