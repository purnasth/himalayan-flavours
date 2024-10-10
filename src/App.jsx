import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoBar from './components/ui/LogoBar';
import Cuisine from './components/Cuisine';
import Facility from './components/Facility';
import OffersReview from './components/OffersReview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <LogoBar /> */}
      <Cuisine />
      <Facility />
      <LogoBar />
      <OffersReview />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
