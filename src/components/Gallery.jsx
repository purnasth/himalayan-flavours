import React from 'react';
import foodGallery from '../assets/images/foods_gallery.png';
import FoodGallery from './ui/FoodGallery';

const Gallery = ({ limit }) => {
  return (
    <>
      <main className="px-0">
        {/* <div
          className="pointer-events-none absolute inset-0 top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-20"
          style={{ backgroundImage: `url(${bgCuisine})` }}
        ></div> */}
        <div
          className="pointer-events-none absolute inset-0 top-0 -z-10 h-full w-full bg-cover bg-top opacity-60"
          style={{
            backgroundImage: `url(${foodGallery})`,
          }}
        ></div>
        <div className="overlay absolute inset-0 -z-10 size-full bg-gradient-to-b from-orange-200/80 to-orange-50"></div>
        <div className="absolute inset-0 flex h-28 -translate-y-1/3 flex-col items-center justify-center gap-2">
          <div className="mx-auto inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white p-12">
            <img
              // src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/48/de/67/caption.jpg?w=600&h=-1&s=1"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/04/skipthedishes-logo-freelogovectors.net_.png"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
            <img
              // src="https://thekayonresort.com/wp-content/uploads/2023/05/Traveller-Choice-TripAdvisor-2023-Square.jpg"
              src="https://pics.paypal.com/00/c/gifts/gb/ue.png"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
            <img
              // src="https://serendipitywilderness.com/wp-content/uploads/2024/03/2023-WLRA-Winner-Logo-1-1024x917.png"
              src="https://cdn.prod.website-files.com/60414b21f1ffcdbb0d5ad688/63c95ba382cdf0a911766466_5e8ce484664eae0004085467.png"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
          </div>
          <p className="bg-orange-300/20 px-2 font-bold">
            {/* The Awards & Recognization */}
            Our Delivery Partners
          </p>
        </div>

        <div className="mx-auto mb-24 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
            Taste the difference
          </h3>
          <p className="text-center text-sm text-dark/60">
            Witness the flavors of the Himalayas captured in the frames of our
            gallery. Our dishes are prepared with the finest ingredients and
            authentic recipes to give you a taste of the Himalayas.
          </p>
        </div>

        <FoodGallery
          galleryClassName="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4"
          limit={limit}
        />
      </main>
    </>
  );
};

export default Gallery;
