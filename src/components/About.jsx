import React from 'react';
import FireButton from './ui/FireButton';

import img1 from '../assets/images/update/5.webp';
import img2 from '../assets/images/update/9.webp';
import img3 from '../assets/images/update/10.webp';
import img4 from '../assets/images/update/8.webp';

const About = () => {
  return (
    <main className="pt-0">
      <div className="grid grid-cols-1 content-center gap-8 lg:grid-cols-3">
        <div className="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64">
          <div className="flex items-end justify-end">
            <img
              src={img4}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end">
            <img
              src={img2}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"
            />
          </div>
        </div>
        <div className="top-0 flex max-h-fit flex-col items-center gap-4 bg-white text-center lg:sticky">
          <div className="bottom-0 h-0 w-px bg-dark/50 lg:h-10 xl:h-40"></div>
          <h3 className="mt-5 text-3xl capitalize leading-snug sm:text-2xl md:mt-16 md:text-4xl lg:text-6xl lg:leading-snug 2xl:text-8xl 2xl:leading-normal">
            Himalayan Flavours
          </h3>
          <p className="mb-3 text-center text-sm text-dark/60 md:mb-12 2xl:text-base">
            Discover the best place to enjoy authentic Himalayan cuisine at
            Himalayan Flavours! Soon, we will become your favorite spot in the
            city for genuine Himalayan dishes. Our commitment is to deliver
            outstanding service and top-quality food.
          </p>

          {/* <button className="mt-12 bg-orange-300 px-8 py-2 rounded-full">Explore More</button> */}

          <FireButton value="Explore More" router="/about" />
        </div>
        <div className="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64">
          <div className="flex items-end justify-end">
            <img
              src={img1}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"
            />
          </div>
          <div className="flex">
            <img
              src={img3}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
