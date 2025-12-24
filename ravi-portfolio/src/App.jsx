import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-darker min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Freelance />
      <Contact />
    </div>
  );
}

export default App;
