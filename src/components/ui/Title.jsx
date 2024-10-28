import React from 'react';

const Title = ({ title, description }) => {
  return (
    <>
      <div className="mx-auto mb-24 flex max-w-xl flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
          {title}
        </h3>
        <p className="max-w-lg text-center text-sm text-dark/60">
          {description}
        </p>
      </div>
    </>
  );
};

export default Title;
