import React from 'react';

const events = [
  { id: 1, name: 'Beekeeping Workshop', date: '2023-06-15' },
  { id: 2, name: 'Nature Photography Hike', date: '2023-06-22' },
  { id: 3, name: 'Survival Skills Weekend', date: '2023-07-01' },
  { id: 4, name: 'Yoga in the Park', date: '2023-07-08' },
];

const defaultImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function WorkshopsAndEvents() {
  return (
    <section id="workshops" className="workshops-events">
      <h2>Workshops & Events</h2>
      <div className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={defaultImage} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <button className="event-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkshopsAndEvents;