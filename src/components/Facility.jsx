import React from 'react';
import {
  TbWifi,
  TbArmchair,
  TbMicrophone,
  TbBowlChopsticks,
} from 'react-icons/tb';
import { MdOutlineLocationOn } from 'react-icons/md';
import bgCuisine from '../assets/images/bg_cuisine.png';

const Facility = () => {
  return (
    <main className="container">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          Convenience <br /> and Facility
        </h3>
        <p className="text-center text-sm text-dark/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum
          itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus
          vero. Similique magni nihil, quia provident soluta illo harum
          cupiditate.
        </p>
      </div>

      <div className="container mt-24 max-w-5xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
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
            <p className="text-xs md:text-xs xl:text-base">Welcoming Hospitality</p>
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

        <img
          src={bgCuisine}
          alt=""
          className="mx-auto mt-12 h-[60vh] w-full rounded-3xl object-cover shadow"
        />
      </div>
    </main>
  );
};

export default Facility;
