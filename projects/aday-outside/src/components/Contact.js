import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: info@adayoutside.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Nature Trail, Outdoor City, OC 12345</p>
      </div>
    </section>
  );
}

export default Contact;