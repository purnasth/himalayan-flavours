import React from 'react';
import bgCuisine from '../../assets/images/bg_cuisine.png';
import bgFoods from '../../assets/images/bg_foods.webp';
import FireButton from './FireButton';
import ReservationWhatsApp from './ReservationWhatsApp';

const Reservation = () => {
  return (
    <>
      <div className="bg-alt-bg/40 container relative max-w-5xl p-8 shadow">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-dark/80" />
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-r from-black/50 via-black/90 to-black/50" /> */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-[url('https://static.vecteezy.com/system/resources/previews/005/725/807/large_2x/fast-food-seamless-pattern-vector.jpg')] bg-cover bg-repeat mix-blend-multiply" /> */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full bg-cover bg-repeat mix-blend-multiply"
          style={{ backgroundImage: `url(${bgFoods})` }}
        />
        <div className="z-10 contents text-white">
          <div className="container mx-auto my-16 max-w-xl text-center">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Reserve a Table
            </h3>
            <p className="mt-4 text-base font-light text-gray-300">
              Looking to reserve a table? If you have any queries or would like
              to make a reservation at our restaurant, please don't hesitate to
              contact us.
            </p>

            <div className="my-12 flex items-center justify-center text-black">
              <ReservationWhatsApp />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <p>
                <span className="font-light text-gray-300">
                  or call us directly
                </span>
                <a
                  rel="noopener noreferrer"
                  className="transition-linear ml-2 text-base md:text-xl font-semibold"
                  href="tel:+12509861755"
                  target="_blank"
                >
                  +1 250 986 1755
                </a>
              </p>
              <a
                rel="noopener noreferrer"
                className="transition-linear text-base md:text-lg font-semibold"
                href="mailto:info@himalayan-flavours.com"
                target="_blank"
              >
                info@himalayan-flavours.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
