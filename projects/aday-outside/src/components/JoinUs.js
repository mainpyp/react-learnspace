import React from 'react';

function JoinUs() {
  return (
    <section id="join" className="join-us">
      <h2>Join Us / Volunteer</h2>
      <div className="join-us-content">
        <div className="sign-up-form">
          <h3>Sign Up for Events</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="volunteer-form">
          <h3>Volunteer With Us</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Tell us why you'd like to volunteer" required></textarea>
            <button type="submit">Apply to Volunteer</button>
          </form>
        </div>
        <div className="membership-options">
          <h3>Membership Options</h3>
          <ul>
            <li>Basic Membership: Access to all events</li>
            <li>Premium Membership: Early registration and discounts</li>
            <li>VIP Membership: Exclusive workshops and retreats</li>
          </ul>
          <button>View Membership Details</button>
        </div>
      </div>
      <div className="social-media-integration">
        <h3>Follow Our Adventures</h3>
        {/* Add Instagram feed integration here */}
      </div>
    </section>
  );
}

export default JoinUs;