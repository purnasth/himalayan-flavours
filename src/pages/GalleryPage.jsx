import React from 'react';
import FoodGallery from '../components/ui/FoodGallery';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';

const GalleryPage = () => {
  return (
    <>
      <main className="px-4">
        <Title
          title="Happiness in Every Bite"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam
            minus vero. Similique magni nihil."
        />

        <FoodGallery galleryClassName="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4" />
      </main>
      <UniversalFooter />
    </>
  );
};

export default GalleryPage;
