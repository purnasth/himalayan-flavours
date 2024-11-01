import React from 'react';
import Title from '../components/ui/Title';
import LogoBar from '../components/ui/LogoBar';
import newariCuisine from '../assets/images/nepali_cuisine.jpg';
import UniversalFooter from '../layouts/UniversalFooter';
import FacilityList from '../components/ui/FacilityList';

const AboutPage = () => {
  return (
    <>
      <main className="px-0">
        <Title
          title="Welcome to Himalayan Flavours"
          description="We are a family-owned restaurant that serves delicious food with love and care. Our mission is to provide the best dining experience to our customers."
        />
        <section className="mt-32 grid grid-cols-3 gap-12">
          <img src={newariCuisine} alt="Newari Cusine" />
          <img
            src={newariCuisine}
            alt="Newari Cusine"
            className="translate-y-16"
          />
          <img src={newariCuisine} alt="Newari Cusine" />
        </section>
      </main>
      <div className="mt-20">
        <LogoBar />
      </div>
      <main className="mx-auto grid w-4/5 grid-cols-2 gap-32">
        <img
          src={newariCuisine}
          alt="Newari Cusine"
          className="sticky top-10 h-[90vh] w-full object-cover"
        />
        <div className="flex flex-col">
          <div className="flex h-screen flex-col items-start justify-center gap-4 text-pretty">
            <span className="text-xl opacity-70">Himalayan Flavours</span>
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
              Why Choose Us?
            </h3>
            <p className="max-w-md text-pretty text-left text-dark/60">
              We are a family-owned restaurant that serves delicious food with
              love and care. Our mission is to provide the best dining
              experience to our customers. We have a wide range of dishes to
              choose from, including authentic Nepalese, Chinese, and Indian
              dishes. We have something for everyone!
            </p>
          </div>
          <div className="flex h-screen flex-col items-start justify-center gap-4 text-pretty">
            <span className="text-xl opacity-70">Our Values</span>
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
              Excellence in Every Dish
            </h3>
            <p className="max-w-md text-pretty text-left text-dark/60">
              From the spices we grind in-house to the meats and vegetables we
              prepare daily, we prioritize quality at every step. This ensures
              that each bite is not only flavorful but also wholesome and
              satisfying. Join us at Himalayan Flavours and experience the true
              essence of Himalayan cuisine, where every dish is crafted with
              care and passion.
            </p>
          </div>
        </div>
      </main>
      <div className="mt-20">
        <LogoBar />
      </div>
      <FacilityList />
      <UniversalFooter />
    </>
  );
};

export default AboutPage;
