import React from 'react';
import FireButton from './ui/FireButton';

import nepali from '../assets/images/cuisine/nepali.png';
import indian from '../assets/images/cuisine/indian.png';
import chinese from '../assets/images/cuisine/chinese.png';

// const dishes = [
//   {
//     id: 1,
//     name: 'Chicken Curry',
//     category: 'Nepalese',
//     description:
//       'A flavorful and spicy chicken curry with traditional Nepalese spices.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 2,
//     name: 'Momos',
//     category: 'Nepalese',
//     description:
//       'Steamed dumplings filled with vegetables or meat, served with a spicy sauce.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 3,
//     name: 'Butter Chicken',
//     category: 'Indian',
//     description:
//       'A creamy and mildly spiced curry made with succulent chicken pieces.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 4,
//     name: 'Chow Mein',
//     category: 'Chinese',
//     description:
//       'Stir-fried noodles mixed with vegetables and your choice of protein.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 5,
//     name: 'Palak Paneer',
//     category: 'Indian',
//     description:
//       'A healthy and delicious dish made with spinach and paneer cheese.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 6,
//     name: 'Crispy Chicken',
//     category: 'Chinese',
//     description:
//       'Crispy chicken tossed in a sweet and tangy sauce with bell peppers and pineapple.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 7,
//     name: 'Thakali Set',
//     category: 'Nepalese',
//     description:
//       'A traditional Nepali meal with rice, lentils, pickles, and vegetables.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 8,
//     name: 'Tandoori Chicken',
//     category: 'Indian',
//     description:
//       'Chicken marinated in yogurt and spices, roasted in a traditional tandoor.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 9,
//     name: 'Spring Rolls',
//     category: 'Chinese',
//     description:
//       'Crispy rolls filled with vegetables and your choice of meat, served with a dipping sauce.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 10,
//     name: 'Chicken Tikka Masala',
//     category: 'Indian',
//     description:
//       'Grilled chicken in a creamy tomato sauce with traditional Indian spices.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 11,
//     name: 'Chicken Curry',
//     category: 'Nepalese',
//     description:
//       'A flavorful and spicy chicken curry with traditional Nepalese spices.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
//   {
//     id: 12,
//     name: 'Momos',
//     category: 'Chinese',
//     description:
//       'Steamed dumplings filled with vegetables or meat, served with a spicy sauce.',
//     imageUrl:
//       'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
//   },
// ];
// const groupedDishes = dishes.reduce((acc, dish) => {
//   acc[dish.category] = acc[dish.category] || [];
//   acc[dish.category].push(dish);
//   return acc;
// }, {});

const cuisines = [
  {
    id: 1,
    name: 'Nepalese',
    description:
      'Authentic Nepalese dishes made with traditional spices and flavors.',
    imageUrl: nepali,
    foodMenu: [
      {
        name: 'Dal Bhat',
      },
      {
        name: 'Momo',
      },
      {
        name: 'Sel Roti',
      },
      {
        name: 'Chatamari',
      },
      {
        name: 'Kheer',
      },
      {
        name: 'Thakali Set',
      },
      {
        name: 'Sukuti',
      },
      {
        name: 'Thukpa',
      },
      {
        name: 'Yomari',
      },
      {
        name: 'Kwati',
      },
      {
        name: 'Gundruk',
      },
      {
        name: 'Aloo Tama',
      },
      {
        name: 'Chhoyla',
      },
      {
        name: 'Dhido',
      },
      {
        name: 'Gundruk',
      },
      {
        name: 'Kodo Ko Roti',
      },
      {
        name: 'Kwati',
      },
      {
        name: 'Laphing',
      },
      {
        name: 'Sekuwa',
      },
      {
        name: 'Sisno',
      },
      {
        name: 'Sukuti',
      },
      {
        name: 'Tingmo',
      },
    ],
  },
  {
    id: 2,
    name: 'Indian',
    description:
      'Delicious Indian dishes made with aromatic spices and fresh ingredients.',
    imageUrl: indian,
    foodMenu: [
      {
        name: 'Butter Chicken',
      },
      {
        name: 'Biryani',
      },
      {
        name: 'Chole Bhature',
      },
      {
        name: 'Dosa',
      },
      {
        name: 'Idli',
      },
      {
        name: 'Jalebi',
      },
      {
        name: 'Kadhi Pakora',
      },
      {
        name: 'Kulfi',
      },
      {
        name: 'Litti Chokha',
      },
      {
        name: 'Pav Bhaji',
      },
      {
        name: 'Rogan Josh',
      },
      {
        name: 'Samosa',
      },
      {
        name: 'Shahi Paneer',
      },
      {
        name: 'Tandoori Chicken',
      },
      {
        name: 'Vada Pav',
      },
      {
        name: 'Vindaloo',
      },
      {
        name: 'Masala Dosa',
      },
    ],
  },
  {
    id: 3,
    name: 'Chinese',
    description:
      'Classic Chinese dishes made with fresh ingredients and bold flavors.',
    imageUrl: chinese,
    foodMenu: [
      {
        name: 'Sweet and Sour Pork',
      },
      {
        name: 'Kung Pao Chicken',
      },
      {
        name: 'Mapo Tofu',
      },
      {
        name: 'Dumplings',
      },
      {
        name: 'Spring Rolls',
      },
      {
        name: 'Chow Mein',
      },
      {
        name: 'Peking Duck',
      },
      {
        name: 'Hot and Sour Soup',
      },
      {
        name: 'Dim Sum',
      },
      {
        name: 'Fried Rice',
      },
      {
        name: 'Orange Chicken',
      },
      {
        name: 'General Tso Chicken',
      },
      {
        name: 'Wonton Soup',
      },
    ],
  },
];
const OurMenu = () => {
  return (
    <main>
      <div className="mx-auto mb-32 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          Highlighted Dishes & Specialties
        </h3>
        <p className="text-center text-sm text-dark/60">
          Discover the diverse flavors of our menu with authentic Nepalese,
          Chinese, and Indian dishes. We have something for everyone! Enjoy your
          favorite dish with your friends and family.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {Object.entries(groupedDishes).map(
          ([category, categoryDishes, index]) => (
            <div key={index} className="mb-8">
              <h4 className="mb-4 font-body text-sm font-bold uppercase text-orange-500">
                {category} Dishes
              </h4>
              {categoryDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="flex items-center justify-start gap-1"
                >
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="size-32 -translate-x-3 object-contain object-left"
                  />
                  <div className="p-2">
                    <h3 className="font-body text-base font-bold">
                      {dish.name}
                    </h3>
                    <p className="line-clamp-2 text-xs text-gray-600">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ),
        )}
      </div> */}

      {/* <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cuisines.map((cuisine) => (
          <div key={cuisine.id} className="mb-8">
            <div className="flex items-center justify-center">
              <img
                src={cuisine.imageUrl}
                alt={cuisine.name}
                className="size-64 animate-spin hover:animation-paused  rounded-full bg-white object-cover p-4"
                draggable="false"
              />
            </div>
            <div className="-mt-32 rounded-2xl bg-orange-300/60 p-10 pt-40">
              <h4 className="mb-4 font-title text-3xl font-bold text-dark">
                {cuisine.name} Dishes
              </h4>
              <ul className="flex flex-wrap gap-2 gap-y-0">
                {cuisine.foodMenu.map((dish, index) => (
                  <li key={dish.id} className="text-gray-600">
                    {dish.name}
                    {index < cuisine.foodMenu.length - 1 && ','}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cuisines.map((cuisine, index) => (
          <div key={cuisine.id}>
            {index === 1 ? (
              <>
                <div className="rounded-2xl bg-orange-300/60 p-10 pb-40">
                  <h4 className="mb-4 font-title text-3xl font-bold text-dark">
                    {cuisine.name} Dishes
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
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src={cuisine.imageUrl}
                    alt={cuisine.name}
                    className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                    draggable="false"
                  />
                </div>
                <div className="-mt-32 rounded-2xl bg-orange-300/60 p-10 pt-40">
                  <h4 className="mb-4 font-title text-3xl font-bold text-dark">
                    {cuisine.name} Dishes
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
              </>
            )}
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
