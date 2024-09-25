import React from 'react';

const defaultImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Hero() {
  return (
    <header className="hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${defaultImage})`}}>
      <h1>A Day Outside</h1>
      <p>Inspiring individuals to embrace the transformative power of the outdoors.</p>
      <button className="cta-button">Join Our Next Adventure</button>
    </header>
  );
}

export default Hero;