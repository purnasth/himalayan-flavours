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
  {
    id: 'image25',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: 'https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg',
    alt: 'Gallery Image 24',
  },
];

const Gallery = () => {
  return (
    <>
      <main className="bg-gray-100">
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
          <span className="opacity-70">The Awards & Recognization</span>
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
          elementClassNames="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-md"
              data-src={image.url}
            >
              <img
                className="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125"
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
