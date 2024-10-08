import React from 'react';
import fire from '../assets/logos/fire.png';

const Hero = () => {
  return (
    <>
      <section className="group relative m-0 p-0">
        {/* <div className="overlay absolute inset-0 z-10 size-full bg-black/50"></div> */}
        <img
          //   src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A="
          //   src="https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg"
            src="https://wallpapers.com/images/hd/chicken-tikka-masala-with-rice-indian-food-2mfh759068n3lwbr.jpg"
        //   src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?t=st=1728533324~exp=1728536924~hmac=e095de06d72d78ab8038f62393baee41b0e352569e962ea1ff39a997f0ad1f5b&w=1060"
        //   src="https://img.freepik.com/free-photo/vegetables-cup-with-garnish_23-2148181580.jpg?t=st=1728533945~exp=1728537545~hmac=b122d0b265c2d097927fddcb6f2ea2bafe63f60d9347e3ebe13c465fa9182f5c&w=996"
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
