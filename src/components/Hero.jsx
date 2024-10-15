import React from 'react';
import fire from '../assets/logos/fire.png';
import bgCuisine from '../assets/images/bg_cuisine.png';

const Hero = () => {
  return (
    <>
      <section className="group relative m-0 p-0">
        {/* <div className="overlay absolute inset-0 z-10 size-full bg-black/50"></div> */}
        <div className="overlay absolute inset-0 z-10 size-full bg-gradient-to-b from-black/60 to-transparent"></div>
        <img
          src='https://img.freepik.com/free-photo/lamp-design-with-digital-art-style_23-2151153878.jpg?w=1480&t=st=1728962212~exp=1728962812~hmac=2dfa5864e80f000c728df8eedf9e40d0565538e0dfdd54c8cf0a1f4f17cc4b2a'
          // src="https://img.freepik.com/free-photo/green-woman-energy-department-interior_1253-741.jpg?w=1480&t=st=1728962326~exp=1728962926~hmac=8f6717b1d9c77cd9c2bd46eea93639c9d2c01977de0c7a99a01a6949af4f4713"
          alt=""
          className="h-screen w-full object-cover object-center"
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
