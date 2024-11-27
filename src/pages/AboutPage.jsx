import React from 'react';
import Title from '../components/ui/Title';
import LogoBar from '../components/ui/LogoBar';
import newariCuisine from '../assets/images/nepali_cuisine.jpg';
import UniversalFooter from '../layouts/UniversalFooter';
import FacilityList from '../components/ui/FacilityList';

import img2 from '../assets/images/update/9.webp';
import img3 from '../assets/images/update/thakali.webp';
import img4 from '../assets/images/update/8.webp';

const AboutPage = () => {
  return (
    <>
      <main className="px-0">
        <div className="px-4">
          <Title
            title="Welcome to Himalayan Flavours"
            description="Himalayan Flavours is more than just a restaurant; it's a celebration of the rich and diverse culinary heritage of the Himalayan region. Nestled in the heart of Victoria, B.C., our restaurant offers an authentic taste of India, Nepal, and China, bringing together the vibrant and bold flavors that define these cultures."
          />
        </div>
        <section className="mt-12 grid grid-cols-3 gap-3 md:mt-32 md:gap-12">
          <img src={img2} alt="Newari Cusine" />
          <img src={img4} alt="Newari Cusine" className="translate-y-16" />
          <img src={newariCuisine} alt="Newari Cusine" />
        </section>
      </main>
      <div className="mt-20">
        <LogoBar />
      </div>
      <main className="mx-auto grid w-full grid-cols-1 gap-8 md:w-4/5 md:grid-cols-2 md:gap-32">
        <img
          src={img3}
          alt="Newari Cusine"
          className="top-10 h-64 w-full object-cover md:sticky md:h-[90vh]"
        />
        <div className="flex flex-col gap-8">
          <div className="flex h-auto flex-col items-start justify-center gap-4 text-pretty md:h-screen">
            <span className="text-xl opacity-70">Our Story</span>
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
              Taste of Himalayas
            </h3>
            <p className="max-w-md text-pretty text-left text-dark/60">
              Inspired by the breathtaking landscapes and warm hospitality of
              the Himalayan region, Himalayan Flavours was founded with a
              passion for sharing the authentic tastes and culinary traditions
              of India, Nepal, and China. Our chefs, with years of experience
              and a deep love for these cuisines, carefully craft each dish
              using the finest ingredients, traditional techniques, and a touch
              of creativity.
            </p>
          </div>
          <div className="flex h-auto flex-col items-start justify-center gap-4 text-pretty md:h-screen">
            <span className="text-xl opacity-70">Our Values</span>
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
              Excellence in Every Dish
            </h3>
            <p className="max-w-md text-pretty text-left text-dark/60">
              Excellence in every dish is our promise to you. We meticulously
              select the freshest and finest ingredients, sourced both locally
              and from the regions that inspire our cuisine. From the spices we
              grind in-house to the meats and vegetables we prepare daily, we
              prioritize quality at every step. This ensures that each bite is
              not only flavorful but also wholesome and satisfying.
            </p>
          </div>
        </div>
      </main>
      <LogoBar />
      <FacilityList />
      <UniversalFooter />
    </>
  );
};

export default AboutPage;
