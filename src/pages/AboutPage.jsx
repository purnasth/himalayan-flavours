import React from 'react';
import Title from '../components/ui/Title';
import LogoBar from '../components/ui/LogoBar';
import newariCuisine from '../assets/images/nepali_cuisine.jpg';
import UniversalFooter from '../layouts/UniversalFooter';

import {
  TbWifi,
  TbArmchair,
  TbMicrophone,
  TbBowlChopsticks,
} from 'react-icons/tb';
import { MdOutlineLocationOn } from 'react-icons/md';
import FacilityList from '../components/ui/FacilityList';

const AboutPage = () => {
  return (
    <>
      <main className="px-0">
        <Title
          title="Welcome to Himalayan Flavours"
          description="We are a family-owned restaurant that serves delicious food with love and care. Our mission is to provide the best dining experience to our customers."
        />
        <section className="mt-32 grid grid-cols-3 gap-12">
          <img src={newariCuisine} alt="Newari Cusine" />
          <img
            src={newariCuisine}
            alt="Newari Cusine"
            className="translate-y-16"
          />
          <img src={newariCuisine} alt="Newari Cusine" />
        </section>
      </main>
      <div className="mt-20">
        <LogoBar />
      </div>
      <FacilityList />
      <UniversalFooter />
    </>
  );
};

export default AboutPage;
