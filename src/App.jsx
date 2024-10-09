import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoBar from './components/ui/LogoBar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LogoBar />
    </>
  );
};

export default App;
