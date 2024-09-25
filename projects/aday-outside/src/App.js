import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import WorkshopsAndEvents from './components/WorkshopsAndEvents';
import Gallery from './components/Gallery';
import Community from './components/Community';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <Intro />
        <About />
        <WorkshopsAndEvents />
        <Gallery />
        <Community />
        <JoinUs />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2023 A Day Outside. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
