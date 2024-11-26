import React from 'react';
import {
  TbWifi,
  TbArmchair,
  TbMicrophone,
  // TbBowlChopsticks,
  TbParkingCircle,
  TbChefHat,
} from 'react-icons/tb';
import bgCuisine from '../assets/images/bg_cuisine.png';
import { GiCryptEntrance } from 'react-icons/gi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TbPaperBag } from 'react-icons/tb';
import liveMusic from '../assets/images/fridaylive.webp';

const Facility = () => {
  return (
    <main className="container">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          Convenience <br /> and Facility
        </h3>
        <p className="text-center text-sm text-dark/60">
          Come and experience the flavors of the Himalayas at Himalayan Flavours
          & enjoy the convenience of our facilities and services that fulfills
          your every delicious desire & need.
        </p>
      </div>

      <div className="container mt-12 max-w-5xl">
        {/* <h5 className="mb-4 mt-16 text-center font-body text-3xl">We Offer</h5> */}
        <div className="mx-12 grid grid-cols-2 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <GiCryptEntrance className="text-5xl text-dark/80" />
            <p className="text-xs md:text-sm lg:text-base xl:text-xl">
              Catering
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <MdOutlineDeliveryDining className="text-5xl text-dark/80" />
            <p className="text-xs md:text-sm lg:text-base xl:text-xl">
              Home Delivery
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbPaperBag className="text-5xl text-dark/80" />
            <p className="text-xs md:text-sm lg:text-base xl:text-xl">
              Take Away
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
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
            <TbChefHat className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              11am - 3pm Lavish Buffet
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <TbParkingCircle className="text-4xl text-dark/80" />
            <p className="text-xs md:text-xs xl:text-base">
              Free Vehicle Parking
            </p>
          </div>
        </div>

        <img
          src={liveMusic}
          alt="Friday Live Music"
          className="h-[60 vh] mx-auto mt-12 min-h-[28rem] w-full rounded-3xl object-cover shadow"
        />
      </div>
    </main>
  );
};

export default Facility;
