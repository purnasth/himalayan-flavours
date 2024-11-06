import React from 'react';
import { offersContent, testimonialsContent } from '../constants/data';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';
import FireButton from './ui/FireButton';

const Offers = () => {
  return (
    <main>
      <div className="mx-auto mb-32 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          Special Offers & Promotions
        </h3>
        <p className="text-center text-sm text-dark/60">
          Discover the latest offers and promotions from Himalayan Flavours and
          enjoy your favorite dishes at a discounted price. You, your friends,
          and your family are all welcome to join us!
        </p>
      </div>
      <div className="flex items-start justify-between gap-y-12 md:gap-12">
        <div className="grid grid-cols-2 gap-8">
          {offersContent.slice(0, 2).map((content, index) => (
            <div key={index} className="group relative">
              <div className="overlay transition-300 absolute inset-0 -z-0 size-full bg-black/70 group-hover:bg-black/80"></div>
              <img
                src={content.image}
                alt=""
                className="-z-10 h-[70vh] min-h-[36rem] w-full object-cover object-left-top shadow"
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
                  to="/offers"
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
        <div className="px-8">
          <p className="font-normal">
            We currently have
            <Link to="#" className="mx-1 bg-orange-300/50 px-2 font-extrabold">
              {offersContent.length} offers
            </Link>
            available with us. Grab your favorite dish at a discounted price
            before it's too late!
          </p>
          <p className="mt-4 max-w-xs text-sm opacity-70">
            For more information, please feel free to enquiry us via the enquiry
            button below.
          </p>
          <div className="ml-16 h-20 w-px bg-orange-300/30" />
          <div className="flex flex-col items-start justify-center gap-2 text-black">
            <FireButton value="Enquiry" router="/offers#enquiry" />
            <div className="flex flex-col items-start justify-center gap-0">
              <p>
                <span className="font-normal opacity-60">
                  or call us directly
                </span>
                <Link
                  rel="noopener noreferrer"
                  className="transition-linear ml-2 text-xl font-semibold"
                  to="tel:+12509861755"
                  target="_blank"
                >
                  +1 250 986 1755
                </Link>
              </p>
              <a
                rel="noopener noreferrer"
                className="transition-linear text-lg font-semibold"
                href="mailto:info@himalayan-flavours.com"
                target="_blank"
              >
                info@himalayan-flavours.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offers;
