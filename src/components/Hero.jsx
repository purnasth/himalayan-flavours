import React from 'react';
import fire from '../assets/logos/fire.png';
import bgCuisine from '../assets/images/bg_cuisine.png';

const Hero = () => {
  return (
    <>
      <section className="group relative m-0 p-0">
        <div className="overlay pointer-events-none absolute inset-0 z-10 size-full bg-black/20"></div>
        {/* <div className="overlay absolute inset-0 z-10 size-full bg-gradient-to-b from-transparent to-black"></div> */}
        <div className="overlay pointer-events-none absolute inset-0 z-10 size-full bg-gradient-to-b from-black/60 to-black/20"></div>
        <img
          // src="https://images5.alphacoders.com/312/312472.jpg"
          src="https://wallpapers.com/images/hd/food-4k-anl1yr892h6ccjeb.jpg"
          alt=""
          className="contrast-1 25 h-screen w-full object-cover object-center contrast-125"
        />

        <div className="pointer-events-none absolute inset-0 z-10 flex size-full flex-col items-center justify-end bg-gradient-to-t from-black/60 to-black/0 text-light">
          <span className="text-sm font-light uppercase tracking-wider md:text-sm">
            Himalayan Flavours
          </span>
          <h2 className="text-shadow-dark-glow mx-8 mb-5 mt-3 max-w-xl text-center text-xl leading-relaxed text-light md:mx-0 md:text-4xl md:leading-snug">
            The Best of Indian, Nepalese & Chinese Cuisines
          </h2>
          <img
            src={fire}
            alt="Fire Icon"
            className="size-12 rounded-full border border-light object-contain p-1"
          />
          <div className="bottom-0 h-10 w-px bg-light/50 md:h-12"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
