import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

import bgCuisine from '../assets/images/bg_cuisine.png';
import newariCuisine from '../assets/images/nepali_cuisine.jpg';
import newariKitchen from '../assets/images/nepali_kitchen.jpg';
import foodGallery from '../assets/images/foods_gallery.png';

const galleryImages = [
  {
    id: 'image1',
    url: 'https://www.pngarts.com/files/18/Indian-Cuisine-Curry-Dishes-Background-PNG.png',
    alt: 'Gallery Image 1',
  },
  {
    id: 'image2',
    url: 'https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/07/Terai-Cuisine-nepal.png',
    alt: 'Gallery Image 2',
  },
  {
    id: 'image3',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx31aEDUEZttmqpjhb-T5VGVfjb7kAaYCk5sJj1hRML1VWOOYamVL04md5FG0lolywwLE&usqp=CAU',
    alt: 'Gallery Image 3',
  },
  {
    id: 'image4',
    url: 'https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-195528000000000000/menu/items/8/item-1100000000148966358_1708122178.png?size=medium',
    alt: 'Gallery Image 4',
  },
  {
    id: 'image5',
    url: bgCuisine,
    alt: 'Gallery Image 5',
  },
  {
    id: 'image6',
    url: 'https://img.pikbest.com/origin/09/02/29/46NpIkbEsTeX3.png!sw800',
    alt: 'Gallery Image 6',
  },
  {
    id: 'image7',
    url: newariCuisine,
    alt: 'Gallery Image 7',
  },
  {
    id: 'image8',
    url: bgCuisine,
    alt: 'Gallery Image 8',
  },
  {
    id: 'image9',
    url: newariKitchen,
    alt: 'Gallery Image 9',
  },
  {
    id: 'image10',
    url: newariCuisine,
    alt: 'Gallery Image 10',
  },
  {
    id: 'image11',
    url: newariKitchen,
    alt: 'Gallery Image 11',
  },
  {
    id: 'image12',
    url: bgCuisine,
    alt: 'Gallery Image 12',
  },
  {
    id: 'image13',
    url: newariCuisine,
    alt: 'Gallery Image 13',
  },
  {
    id: 'image14',
    url: bgCuisine,
    alt: 'Gallery Image 14',
  },
  {
    id: 'image15',
    url: newariCuisine,
    alt: 'Gallery Image 15',
  },
  {
    id: 'image16',
    url: bgCuisine,
    alt: 'Gallery Image 16',
  },
  {
    id: 'image17',
    url: bgCuisine,
    alt: 'Gallery Image 17',
  },
  {
    id: 'image18',
    url: newariCuisine,
    alt: 'Gallery Image 18',
  },
  {
    id: 'image19',
    url: bgCuisine,
    alt: 'Gallery Image 19',
  },
  {
    id: 'image20',
    url: bgCuisine,
    alt: 'Gallery Image 20',
  },
  {
    id: 'image21',
    url: newariCuisine,
    alt: 'Gallery Image 21',
  },
  {
    id: 'image22',
    url: bgCuisine,
    alt: 'Gallery Image 22',
  },
  {
    id: 'image23',
    url: bgCuisine,
    alt: 'Gallery Image 23',
  },
  {
    id: 'image24',
    url: bgCuisine,
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: bgCuisine,
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: bgCuisine,
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: bgCuisine,
    alt: 'Gallery Image 24',
  },
  {
    id: 'image26',
    url: bgCuisine,
    alt: 'Gallery Image 24',
  },
  {
    id: 'image27',
    url: newariCuisine,
    alt: 'Gallery Image 21',
  },
  {
    id: 'image28',
    url: newariKitchen,
    alt: 'Gallery Image 11',
  },
  {
    id: 'image29',
    url: newariKitchen,
    alt: 'Gallery Image 11',
  },
];

const Gallery = ({ limit }) => {
  const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;
  return (
    <>
      <main className="bg-orange-100 px-0">
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
        <div className="overlay absolute inset-0 -z-10 size-full bg-gradient-to-b from-orange-200/80 to-orange-100"></div>
        <div className="absolute inset-0 flex h-28 -translate-y-1/3 flex-col items-center justify-center gap-2">
          <div className="mx-auto inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white p-12">
            <img
              src="https://thekayonresort.com/wp-content/uploads/2023/05/Traveller-Choice-TripAdvisor-2023-Square.jpg"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/48/de/67/caption.jpg?w=600&h=-1&s=1"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
            <img
              src="https://serendipitywilderness.com/wp-content/uploads/2024/03/2023-WLRA-Winner-Logo-1-1024x917.png"
              alt=""
              className="size-24 bg-white object-contain p-2"
            />
          </div>
          <p className="bg-orange-300/20 px-2 font-bold">
            The Awards & Recognization
          </p>
        </div>

        <div className="mx-auto mb-24 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
            Taste the difference
          </h3>
          <p className="text-center text-sm text-dark/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam
            minus vero. Similique magni nihil, quia provident soluta illo harum
            cupiditate, excepturi totam nobis sunt assumenda, et eius porro a
            sit perferendis fugit voluptate voluptas architecto exercitationem
            saepe. Velit!
          </p>
        </div>
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4"
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="group mb-2 break-inside-avoid overflow-hidden rounded-2xl border border-dark/20 bg-white shadow-md"
              data-src={image.url}
            >
              <img
                className="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </LightGallery>
      </main>
    </>
  );
};

export default Gallery;
