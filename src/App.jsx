import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoBar from './components/ui/LogoBar';
import Cuisine from './components/Cuisine';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <LogoBar /> */}
      <Cuisine />
    </>
  );
};

export default App;
