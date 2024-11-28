import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import LogoBar from '../components/ui/LogoBar';
// import Cuisine from '../components/Cuisine';
import Facility from '../components/Facility';
import Offers from '../components/Offers';
import Gallery from '../components/Gallery';
import OurMenu from '../components/OurMenu';
import Reservation from '../components/ui/Reservation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Cuisine /> */}
      <LogoBar />
      <OurMenu />
      <Reservation />
      <Facility />
      <LogoBar />
      <Offers />
      <Gallery limit={9} />
      <Footer />
    </>
  );
};

export default Home;
