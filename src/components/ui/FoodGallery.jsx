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
import useFetchAPI from '../../hooks/useFetchAPI';

const FoodGallery = ({ limit, galleryClassName }) => {
  const {
    data: galleryImages,
    isLoading,
    isError,
  } = useFetchAPI(
    'gallery',
    'https://mayurstay.com/himalayanflavours/api/api_gallery.php',
  );

  if (isLoading) return <></>;
  if (isError) return console.error(isError);

  // Ensure galleryImages is always an array before calling map
  const displayedImages = limit
    ? (galleryImages || []).slice(0, limit)
    : galleryImages || [];

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
            className="group mb-2 break-inside-avoid overflow-hidden rounded-lg border border-dark/20 bg-white shadow-md md:mb-4 md:rounded-2xl"
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
