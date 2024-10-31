import React from 'react';
import fire from '../../assets/logos/fire.png';
import { MdDoneAll } from 'react-icons/md';

const facilities = [
  { id: 1, name: 'Free Wi-Fi' },
  { id: 2, name: 'Outdoor Patio Seating' },
  { id: 3, name: 'Live Entertainment' },
  { id: 4, name: 'Private Event Space' },
  { id: 5, name: 'Wheelchair Accessible' },
  { id: 6, name: 'Parking Available' },
  { id: 7, name: 'Pet-Friendly Patio' },
  { id: 8, name: 'Family-Friendly Dining' },
  { id: 9, name: 'Climate-Controlled Indoor Seating' },
  { id: 10, name: 'Online Reservations' },
  { id: 11, name: 'Vegan & Vegetarian Options' },
  { id: 12, name: 'Gluten-Free Options' },
  { id: 13, name: 'Licensed Full Bar' },
  { id: 14, name: 'Takeout and Curbside Pickup' },
  { id: 15, name: 'Catering & Event Services' },
  { id: 16, name: 'Free Birthday Dessert' },
  { id: 17, name: 'Loyalty Rewards Program' },
  { id: 18, name: 'Chef’s Tasting Menu' },
  { id: 19, name: 'Seasonal Specialties' },
  { id: 20, name: 'Scenic View Dining' },
];

const FacilityList = () => {
  return (
    <>
      <main>
        <div className="mb-24 flex flex-col items-start justify-start gap-4 text-pretty">
          <span className="text-xl opacity-70">Facilities</span>
          <h3 className="max-w-3xl text-xl leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-tight">
            The restaurant is equipped with:
          </h3>
        </div>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {facilities.map((facility) => (
            <li
              key={facility.id}
              className="group relative overflow-hidden text-pretty border border-y px-4 py-3 text-left transition-all duration-150 ease-linear hover:border-orange-300 hover:bg-orange-300/20 hover:font-bold hover:text-orange-600"
            >
              <MdDoneAll className="mr-2 inline-block" />
              <img
                src={fire}
                alt="Fire Icon"
                className="absolute right-2 top-1/2 -z-10 size-8 -translate-y-1/2 object-contain opacity-0 transition-all duration-300 ease-in group-hover:opacity-80"
              />
              {facility.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default FacilityList;
