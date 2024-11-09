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

import bgCuisine from '../../assets/images/bg_cuisine.png';
import newariCuisine from '../../assets/images/nepali_cuisine.jpg';
import newariKitchen from '../../assets/images/nepali_kitchen.jpg';

const galleryImages = [
  {
    id: 'image1',
    url: bgCuisine,
    alt: 'Gallery Image 1',
  },
  {
    id: 'image2',
    url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1b9cf8ab8d7260b89009f07a935e33bb/fdf52d66534809b650058f41d517d74a.jpeg',
    alt: 'Gallery Image 2',
  },
  {
    id: 'image3',
    url: 'https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.681xw:1.00xh;0.196xw,0&resize=640:*',
    alt: 'Gallery Image 3',
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
    id: 'image5',
    url: bgCuisine,
    alt: 'Gallery Image 5',
  },
  {
    id: 'image4',
    url: 'https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64ecfa1fad20286493de9568_r094aj5e10gjt9vzy87jjw7s3dq9xvy1.jpeg',
    alt: 'Gallery Image 4',
  },
  {
    id: 'image8',
    url: 'https://hips.hearstapps.com/hmg-prod/images/220907-delish-seo-chicken-tikka-masala-0212-eb-1675093094.jpg',
    alt: 'Gallery Image 8',
  },
  {
    id: 'image9',
    url: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg",
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

const FoodGallery = ({ limit, galleryClassName }) => {
  const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`${galleryClassName}`}
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-dark/20 bg-white shadow-md"
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
    </>
  );
};

export default FoodGallery;
