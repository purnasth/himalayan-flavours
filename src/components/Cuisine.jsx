import React from 'react';

const Cuisine = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <img
        src="https://mayurstay.com/prestigio/assets/images/Artboard%201%20copy%205.png"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="mt-12 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <span>Start your day with</span>
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-8xl lg:leading-none">
          Nepalese Cuisine
        </h3>
        <p className="text-center text-sm text-dark/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum
          itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus
          vero. Similique magni nihil, quia provident soluta illo harum
          cupiditate, excepturi totam nobis sunt assumenda, et eius porro a sit
          perferendis fugit voluptate voluptas architecto exercitationem saepe.
          Velit!
        </p>
      </div>
    </main>
  );
};

export default Cuisine;
