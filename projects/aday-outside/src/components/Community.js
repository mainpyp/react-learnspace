import React from 'react';

const defaultImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    text: "A Day Outside changed my life! I've made so many friends and discovered a love for hiking.",
  },
  {
    id: 2,
    name: "John Smith",
    text: "The workshops are incredible. I learned so much about nature photography!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    text: "I never thought I'd enjoy camping, but the Survival Skills Weekend was an eye-opening experience.",
  },
];

function Community() {
  return (
    <section id="community" className="community">
      <h2>Our Community</h2>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={defaultImage} alt={testimonial.name} className="testimonial-image" />
            <blockquote>
              <p>"{testimonial.text}"</p>
              <footer>- {testimonial.name}</footer>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="map-placeholder">
        <h3>Our Community Reach</h3>
        <p>Interactive map coming soon!</p>
        <img src={defaultImage} alt="Map placeholder" className="map-image" />
      </div>
    </section>
  );
}

export default Community;