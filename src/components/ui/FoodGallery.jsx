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
