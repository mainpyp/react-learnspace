import React from 'react';

const images = [
  { id: 1, alt: 'Hiking group' },
  { id: 2, alt: 'Nature photography' },
  { id: 3, alt: 'Campfire gathering' },
  { id: 4, alt: 'Mountain view' },
  { id: 5, alt: 'River rafting' },
  { id: 6, alt: 'Stargazing' },
];

const defaultImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="photo-grid">
        {images.map(image => (
          <div key={image.id} className="photo-item">
            <img src={defaultImage} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;