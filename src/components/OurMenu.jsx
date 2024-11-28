import React from 'react';
import FireButton from './ui/FireButton';

import nepali from '../assets/images/cuisine/nepali.png';
// import indian from '../assets/images/cuisine/indian.png';
// import chinese from '../assets/images/cuisine/chinese.png';

import seafood from '../assets/images/menu/seafood.png';
import chicken from '../assets/images/menu/butterchicken.png';
import veg from '../assets/images/menu/veg.png';
import lamb from '../assets/images/menu/lamb.png';
import sizzler from '../assets/images/menu/sizzler.png';

const menu = [
  {
    id: 1,
    name: 'Himalayan Sizzlers',
    description:
      'Authentic Nepalese dishes made with traditional spices and flavors.',
    imageUrl: sizzler,
    foodMenu: [
      {
        name: 'Chicken Tikka',
      },
      {
        name: 'Himalayan Chicken',
      },
      {
        name: 'Malai Tikka Chicken',
      },
      {
        name: 'Tangri Kebab',
      },
      {
        name: 'Chicken Seekh Kebab',
      },
      {
        name: 'Himalayan Lamb Seekh Kebab',
      },
      {
        name: 'Himalayan Fish Tikka',
      },
      {
        name: 'Himalayan Flavours Prawns',
      },
      {
        name: 'Haryali Tikka',
      },
      {
        name: 'Tandoor Chicken Wings',
      },
      {
        name: 'Assorted Tandoori Platter',
      },
      {
        name: 'Paneer Tikka',
      },
    ],
  },
  {
    id: 2,
    name: 'Lamb Specialties',
    description:
      'Experience the rich flavors of India with our authentic Indian dishes.',
    imageUrl: lamb,
    foodMenu: [
      {
        name: 'Lamb Curry',
      },
      {
        name: 'Lamb Vindaloo',
      },
      {
        name: 'Lamb Palak',
      },
      {
        name: 'Lamb Kadhai',
      },
      {
        name: 'Goat Curry',
      },
      {
        name: 'Lamb Kebab Masala',
      },
      {
        name: 'Lamb Coconut',
      },
      {
        name: 'Lamb Mango',
      },
      {
        name: 'Lamb Pasanda',
      },
      {
        name: 'Lamb Korma',
      },
    ],
  },
  {
    id: 3,
    name: 'Seafood Specialties',
    description:
      'Enjoy the delicious flavors of China with our authentic Chinese dishes.',
    imageUrl: seafood,
    foodMenu: [
      {
        name: 'Fish Curry',
      },
      {
        name: 'Fish Masala',
      },
      {
        name: 'Prawn Masala',
      },
      {
        name: 'Prawn Curry',
      },
      {
        name: 'Kadai Prawns',
      },
      {
        name: 'Fish or Prawn Malabar',
      },
      {
        name: 'Fish Curry',
      },
      {
        name: 'Fish Masala',
      },
      {
        name: 'Prawn Masala',
      },
      {
        name: 'Prawn Curry',
      },
      {
        name: 'Kadai Prawns',
      },
      {
        name: 'Fish or Prawn Malabar',
      },
    ],
  },
  {
    id: 4,
    name: 'Vegetarian Specialties',
    description: 'Served with pure Basmati Rice',
    imageUrl: veg,
    foodMenu: [
      {
        name: 'Malai Kofta',
      },
      {
        name: 'Dal Makhni',
      },
      {
        name: 'Shahi Paneer',
      },
      {
        name: 'Palak Paneer',
      },
      {
        name: 'Kadhai Paneer',
      },
      {
        name: 'Bindi Masala',
      },
      {
        name: 'Channa Masala',
      },
      {
        name: 'Vegetable Korma',
      },
      {
        name: 'Aloo Gobi',
      },
      {
        name: 'Matter Paneer',
      },
      {
        name: 'Dal Fry',
      },
      {
        name: 'Chili Paneer',
      },
      {
        name: 'Butter Paneer',
      },
      {
        name: 'Mixed Vegetables',
      },
      {
        name: 'Aloo Jerra',
      },
      {
        name: 'Veggie Manchurian',
      },
    ],
  },

  {
    id: 5,
    name: 'Chicken Specialties',
    description: 'Served with Special Basmati Rice',
    imageUrl: chicken,
    foodMenu: [
      {
        name: 'Butter Chicken',
      },
      {
        name: 'Curry Chicken',
      },
      {
        name: 'Chicken Tikka Masala',
      },
      {
        name: 'Vindaloo Chicken',
      },
      {
        name: 'Korma Chicken',
      },
      {
        name: 'Kadai Chicken',
      },
      {
        name: 'Palak Chicken',
      },
      {
        name: 'Coconut Chicken',
      },
      {
        name: 'Mango Chicken',
      },
      {
        name: 'Chicken Chilli',
      },
      {
        name: 'Chicken Pasanda',
      },
      {
        name: 'Chicken Manchurian',
      },
    ],
  },

  {
    id: 6,
    name: 'Himalayan Flavours Special Menu',
    description: 'Served with Special Basmati Rice',
    imageUrl: nepali,
    foodMenu: [
      {
        name: 'Himalayan Thali (Veg, Chicken, Goat, Lamb, Fish)',
      },
      {
        name: 'Chicken/Vegetable/Pork Momo (Fry or Steam)',
      },
      {
        name: 'Vegetable/Chicken Thukpa',
      },
      {
        name: 'Duck/Chicken/Lamb Choila',
      },
      {
        name: 'Peanut Bhatta Sadeko',
      },
      {
        name: 'Chicken/Egg/Vegetable Chowmein',
      },
      {
        name: 'Momo Chilly Chicken/Vegetable/Pork',
      },
      {
        name: 'Chicken/Veg/Pork Fried Rice',
      },
    ],
  },
];
const OurMenu = () => {
  return (
    <main>
      <div className="mx-auto mb-8 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-12 lg:mb-32">
        <h3 className="text-3xl capitalize leading-snug md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">
          Highlighted Dishes & Specialties
        </h3>
        <p className="text-center text-sm text-dark/60">
          Discover the diverse flavors of our menu with authentic Nepalese,
          Chinese, and Indian dishes. We have something for everyone! Enjoy your
          favorite dish with your friends and family.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-3">
        {menu.map((cuisine, index) => (
          <div key={cuisine.id}>
            {/* Mobile devices: unified design */}
            <div className="block lg:hidden">
              <div className="flex items-center justify-center">
                <img
                  src={cuisine.imageUrl}
                  alt={cuisine.name}
                  className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                  draggable="false"
                />
              </div>
              <div className="-mt-32 rounded-2xl bg-orange-300/40 p-4 pt-36 md:p-8 md:pt-40">
                <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                  {cuisine.name}
                </h4>
                <ul className="scroll flex h-24 flex-wrap gap-2 gap-y-0 overflow-y-auto">
                  {cuisine.foodMenu.map((dish, idx) => (
                    <li
                      key={dish.id}
                      className="text-sm text-gray-600 2xl:text-base"
                    >
                      {dish.name}
                      {idx < cuisine.foodMenu.length - 1 && ','}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Non-mobile devices: conditional design */}
            <div className="hidden lg:block">
              {index === 1 || index === 4 ? (
                <>
                  <div className="rounded-2xl bg-orange-300/40 p-4 pb-36 md:p-8 md:pb-40">
                    <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                      {cuisine.name}
                    </h4>
                    <ul className="flex flex-wrap gap-2 gap-y-0">
                      {cuisine.foodMenu.map((dish, idx) => (
                        <li
                          key={dish.id}
                          className="text-sm text-gray-600 2xl:text-base"
                        >
                          {dish.name}
                          {idx < cuisine.foodMenu.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-32 flex items-center justify-center">
                    <img
                      src={cuisine.imageUrl}
                      alt={cuisine.name}
                      className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                      draggable="false"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center md:mt-8">
                    <img
                      src={cuisine.imageUrl}
                      alt={cuisine.name}
                      className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                      draggable="false"
                    />
                  </div>
                  <div className="-mt-32 rounded-2xl bg-orange-300/40 p-4 pt-36 md:p-8 md:pt-40">
                    <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                      {cuisine.name}
                    </h4>
                    <ul className="scroll flex h-24 flex-wrap gap-2 gap-y-0 overflow-y-auto">
                      {cuisine.foodMenu.map((dish, idx) => (
                        <li
                          key={dish.id}
                          className="text-sm text-gray-600 2xl:text-base"
                        >
                          {dish.name}
                          {idx < cuisine.foodMenu.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mx-auto h-28 w-px bg-orange-300/30" />
        <FireButton value="View Full Menu" router="/food-menu" />
      </div>
    </main>
  );
};

export default OurMenu;
