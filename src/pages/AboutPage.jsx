import React from 'react';
import Title from '../components/ui/Title';
import LogoBar from '../components/ui/LogoBar';
import Offers from '../components/Offers';
import newariCuisine from '../assets/images/nepali_cuisine.jpg';
import UniversalFooter from '../layouts/UniversalFooter';

import {
  TbWifi,
  TbArmchair,
  TbMicrophone,
  TbBowlChopsticks,
} from 'react-icons/tb';
import { MdOutlineLocationOn } from 'react-icons/md';

const AboutPage = () => {
  return (
    <>
      <main className="px-0 pb-0">
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
        <div className="mb-40 mt-60">
          <LogoBar />
        </div>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5 px-4">
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbWifi className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              Complementary Wi-Fi
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbMicrophone className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              Karaoke & Music Room
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbArmchair className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              Welcoming Hospitality
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbBowlChopsticks className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">Authentic Cuisine</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <MdOutlineLocationOn className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              Convenient Location
            </p>
          </div>
        </div>
        <Offers />
      </main>
      <UniversalFooter />
    </>
  );
};

export default AboutPage;
