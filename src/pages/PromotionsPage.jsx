import React from 'react';
import Title from '../components/ui/Title';
import { offersContent } from '../constants/data';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';
import UniversalFooter from '../layouts/UniversalFooter';

const PromotionsPage = () => {
  return (
    <>
      <main className="px-8">
        <Title
          title="Special Offers & Promotions"
          description="Check out our special offers and promotions. We have something for everyone. Grab your favorite deal before it's gone!"
        />
        <div className="mt-16 grid grid-cols-3 gap-8">
          {offersContent.map((content, index) => (
            <div
              key={index}
              className="transition-300 group relative outline outline-1 outline-offset-[12px] outline-dark/0 hover:outline-offset-0"
            >
              <div className="overlay transition-300 transition-300 absolute inset-0 -z-0 size-full bg-black/70 outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:bg-black/80 group-hover:outline-offset-0" />
              <img
                src={content.image}
                alt=""
                className="-z-10 aspect-square h-auto w-full object-cover object-left-top shadow"
              />

              <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-between px-12 py-16 text-center text-light">
                <span className="text-sm font-light uppercase tracking-wider md:text-sm">
                  {content.offer}
                </span>
                <div>
                  <h2 className="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl leading-relaxed md:mx-0 md:text-4xl md:leading-snug">
                    {content.title}
                  </h2>

                  <p className="line-clamp-2 text-center text-sm opacity-80">
                    {content.description}
                  </p>
                </div>

                <Link
                  to="#"
                  className="transition-300 flex items-center justify-center gap-2 rounded-full border border-light/50 bg-light/10 px-4 py-2 text-light backdrop-blur group-hover:bg-light/30"
                >
                  <img
                    src={fire}
                    alt="Fire"
                    className="filter-white transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                  />
                  Enquiry Now
                  <img
                    src={fire}
                    alt="Fire"
                    className="filter-white transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <UniversalFooter />
    </>
  );
};

export default PromotionsPage;
