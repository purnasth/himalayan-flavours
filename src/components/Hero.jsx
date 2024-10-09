import React from 'react';
import fire from '../assets/logos/fire.png';

const Hero = () => {
  return (
    <>
      <section className="group relative m-0 p-0">
        <img
          src="https://mayurstay.com/prestigio/assets/images/Artboard%201%20copy%205.png"
          alt=""
          className="h-screen w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 z-0 flex size-full flex-col items-center justify-end bg-gradient-to-t from-black/60 to-black/0 text-light">
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
