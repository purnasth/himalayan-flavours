import React from 'react';
import newariCuisine from '../assets/images/nepali_cuisine.jpg'

const About = () => {
  return (
    <main className="pt-0">
      <div className="grid grid-cols-1 content-center gap-16 md:grid-cols-3">
        <div className="hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src={newariCuisine}
              alt=""
              className="h-60 w-44 object-cover"
            />
          </div>
          <div className="flex items-end">
            <img
              src={newariCuisine}
              alt=""
              className="h-full w-80 object-cover"
            />
          </div>
        </div>
        <div className="sticky top-0 flex max-h-screen flex-col items-center gap-4 text-center">
          <div className="bottom-0 h-10 w-px bg-dark/50 md:h-40"></div>
          <h3 className="mt-16 text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
            Himalayan Flavours
          </h3>
          <p className="text-center text-sm text-dark/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam
            minus vero. Similique magni nihil, quia provident soluta illo harum
            cupiditate, excepturi totam nobis sunt assumenda, et eius porro a
            sit perferendis fugit voluptate voluptas architecto exercitationem
            saepe. Velit!
          </p>

          <button className="mt-12 bg-orange-300 px-8 py-2 rounded-full">Explore More</button>
        </div>
        <div className="hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src={newariCuisine}
              alt=""
              className="h-full w-80 object-cover"
            />
          </div>
          <div className="flex">
            <img
              src={newariCuisine}
              alt=""
              className="h-60 w-44 object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
