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
import { useState } from 'react';

const galleryImages = [
  {
    id: 'image1',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 1',
  },
  {
    id: 'image2',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 2',
  },
  {
    id: 'image3',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 3',
  },
  {
    id: 'image4',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 4',
  },
  {
    id: 'image5',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 5',
  },
  {
    id: 'image6',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 6',
  },
  {
    id: 'image7',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 7',
  },
  {
    id: 'image8',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 8',
  },
  {
    id: 'image9',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 9',
  },
  {
    id: 'image10',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 10',
  },
  {
    id: 'image11',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 11',
  },
  {
    id: 'image12',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 12',
  },
  {
    id: 'image13',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 13',
  },
  {
    id: 'image14',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 14',
  },
  {
    id: 'image15',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 15',
  },
  {
    id: 'image16',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 16',
  },
  {
    id: 'image17',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 17',
  },
  {
    id: 'image18',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 18',
  },
  {
    id: 'image19',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 19',
  },
  {
    id: 'image20',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 20',
  },
  {
    id: 'image21',
    url: 'https://rachelgouk.com/wp-content/uploads/2020/05/nepali-kitchen-nepalese-restaurant-shanghai-37.jpg',
    alt: 'Gallery Image 21',
  },
  {
    id: 'image22',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 22',
  },
  {
    id: 'image23',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 23',
  },
  {
    id: 'image24',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 24',
  },
];

const Gallery = () => {
  return (
    <>
      <main>
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group overflow-hidden"
              data-src={image.url}
            >
              <img
                className="h-80 w-full cursor-pointer overflow-hidden rounded-3xl object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125"
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
