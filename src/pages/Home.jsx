import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import LogoBar from '../components/ui/LogoBar';
import Cuisine from '../components/Cuisine';
import Facility from '../components/Facility';
import Offers from '../components/Offers';
import Gallery from '../components/Gallery';
import OurMenu from '../components/OurMenu';
import Reservation from '../components/ui/Reservation';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Cuisine />
      <OurMenu />
      <Reservation />
      {/* <LogoBar /> */}
      <Facility />
      <LogoBar />
      <Offers />
      <Gallery limit={12} />
    </>
  );
};

export default Home;
