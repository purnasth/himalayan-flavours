import React from 'react';
import FoodGallery from '../components/ui/FoodGallery';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';

const GalleryPage = () => {
  return (
    <>
      <main className="px-4">
        <Title
          title="Feel the Happiness in Every Bite"
          description="At Himalayan Flavours, we believe that every bite should bring joy and satisfaction. Our diverse menu is crafted with the finest ingredients and traditional recipes to offer you an unforgettable dining experience. Join us and discover the true essence of culinary happiness."
        />

        <FoodGallery galleryClassName="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 md:gap-4" />
      </main>
      <UniversalFooter />
    </>
  );
};

export default GalleryPage;
