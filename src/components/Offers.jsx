import React from 'react';
import { offersContent } from '../constants/data';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';

const Offers = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-24 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
            Promotions
          </h3>
          <p className="text-center text-sm text-dark/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam
            minus vero.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8">
          {offersContent.slice(0, 3).map((content, index) => (
            <div key={index} className="group relative">
              <div className="overlay transition-300 absolute inset-0 -z-0 size-full bg-black/70 group-hover:bg-black/80"></div>
              <img
                src={content.image}
                alt=""
                className="-z-10 h-[36rem] w-full object-cover object-left-top shadow"
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
                  Explore More
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
        {/* <div className="mx-auto mt-16 text-center">
              <Link to="#" className="rounded-full bg-orange-300 px-6 py-2">
                Explore more offers
              </Link>
            </div> */}
      </div>
    </main>
  );
};

export default Offers;
