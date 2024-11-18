import React from 'react';
import FireButton from './ui/FireButton';

import img1 from '../assets/images/update/5.webp';
import img2 from '../assets/images/update/9.webp';
import img3 from '../assets/images/update/10.webp';
import img4 from '../assets/images/update/8.webp';

const About = () => {
  return (
    <main className="pt-0">
      <div className="grid grid-cols-1 content-center gap-16 md:grid-cols-3">
        <div className="hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src={img4}
              alt="Foods"
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end">
            <img
              src={img2}
              alt="Foods"
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
        </div>
        <div className="sticky top-0 flex max-h-fit flex-col items-center gap-4 text-center">
          <div className="bottom-0 h-10 w-px bg-dark/50 md:h-40"></div>
          <h3 className="mt-16 text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug 2xl:text-8xl 2xl:leading-normal">
            Himalayan Flavours
          </h3>
          <p className="mb-12 text-center text-sm text-dark/60 2xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam
            minus vero. Similique magni nihil, quia provident soluta illo harum
            cupiditate, excepturi totam nobis sunt assumenda, et eius porro a
            sit perferendis fugit voluptate voluptas architecto exercitationem
            saepe. Velit!
          </p>

          {/* <button className="mt-12 bg-orange-300 px-8 py-2 rounded-full">Explore More</button> */}

          <FireButton value="Explore More" router="/about" />
        </div>
        <div className="hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src={img1}
              alt="Foods"
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
          <div className="flex">
            <img
              src={img3}
              alt="Foods"
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
