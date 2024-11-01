import React, { useState, useEffect } from 'react';

const nearbyLocations = [
  {
    name: 'Himalayan Flavourasdfdsfasds',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
  {
    name: 'Himalayan Flavours',
    distance: '0.5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.052758047153!2d-73.9821195845944!3d40.76142197932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f5f5f0e1%3A0x7f1f2b9e2a5d4d1e!2sHimalayan%20Flavours!5e0!3m2!1sen!2sus!4v1632938473166!5m2!1sen!2sus',
  },
];
const Nearby = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (nearbyLocations && nearbyLocations.length > 0) {
      setSelectedLocation(nearbyLocations[0]);
      setMapUrl(nearbyLocations[0].map);
      setIsMapOpen(true);
    }
  }, [nearbyLocations]);

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    setTimeout(() => {
      const mapSection = document.getElementById('mapSection');
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 0);
  };

  const handleLocationClick = (location) => {
    openMapModal(location.map, location);
  };

  return (
    <div className="flex flex-col items-center">
      <ul className="nearby-scroll sticky top-0 z-30 mb-12 flex max-w-full flex-nowrap items-start justify-start gap-3 overflow-x-auto bg-orange-50 pb-1">
        {nearbyLocations.map((location) => (
          <li
            key={location.name}
            className={`my-2 min-w-64 cursor-pointer rounded-lg border border-orange-200 px-2 py-1 shadow transition-all duration-300 ease-linear hover:bg-orange-200/50 sm:px-4 sm:py-3 ${
              selectedLocation === location ? 'bg-orange-200 text-black' : ''
            }`}
            onClick={() => handleLocationClick(location)}
            aria-label={location.name}
            title="Get Direction"
          >
            <span className="text-xs font-semibold md:text-sm">
              {location.name}
            </span>

            <br />
            <button
              className="text-sm font-bold text-orange-600"
              onClick={(e) => {
                e.stopPropagation();
                handleLocationClick(location);
              }}
              title="Get Direction"
              aria-label={location.name}
            >
              Get Direction
            </button>
            <span className="ml-2 text-xs font-bold md:text-sm">
              - {location.distance}
            </span>
          </li>
        ))}
      </ul>
      <div className="size-full">
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative w-full scroll-mt-32 rounded-lg md:scroll-mt-28 2xl:scroll-mt-32"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="h-64 w-full rounded-lg md:h-96 lg:h-[85vh]"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nearby;
