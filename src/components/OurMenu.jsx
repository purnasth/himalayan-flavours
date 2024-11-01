import React from 'react';
import FireButton from './ui/FireButton';

const dishes = [
  {
    id: 1,
    name: 'Chicken Curry',
    category: 'Nepalese',
    description:
      'A flavorful and spicy chicken curry with traditional Nepalese spices.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 2,
    name: 'Momos',
    category: 'Nepalese',
    description:
      'Steamed dumplings filled with vegetables or meat, served with a spicy sauce.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 3,
    name: 'Butter Chicken',
    category: 'Indian',
    description:
      'A creamy and mildly spiced curry made with succulent chicken pieces.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 4,
    name: 'Chow Mein',
    category: 'Chinese',
    description:
      'Stir-fried noodles mixed with vegetables and your choice of protein.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 5,
    name: 'Palak Paneer',
    category: 'Indian',
    description:
      'A healthy and delicious dish made with spinach and paneer cheese.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 6,
    name: 'Crispy Chicken',
    category: 'Chinese',
    description:
      'Crispy chicken tossed in a sweet and tangy sauce with bell peppers and pineapple.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 7,
    name: 'Thakali Set',
    category: 'Nepalese',
    description:
      'A traditional Nepali meal with rice, lentils, pickles, and vegetables.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 8,
    name: 'Tandoori Chicken',
    category: 'Indian',
    description:
      'Chicken marinated in yogurt and spices, roasted in a traditional tandoor.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 9,
    name: 'Spring Rolls',
    category: 'Chinese',
    description:
      'Crispy rolls filled with vegetables and your choice of meat, served with a dipping sauce.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 10,
    name: 'Chicken Tikka Masala',
    category: 'Indian',
    description:
      'Grilled chicken in a creamy tomato sauce with traditional Indian spices.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 11,
    name: 'Chicken Curry',
    category: 'Nepalese',
    description:
      'A flavorful and spicy chicken curry with traditional Nepalese spices.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
  {
    id: 12,
    name: 'Momos',
    category: 'Chinese',
    description:
      'Steamed dumplings filled with vegetables or meat, served with a spicy sauce.',
    imageUrl:
      'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
  },
];
const groupedDishes = dishes.reduce((acc, dish) => {
  acc[dish.category] = acc[dish.category] || [];
  acc[dish.category].push(dish);
  return acc;
}, {});

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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mx-auto h-20 w-px bg-orange-300/30" />
        <FireButton value="View Full Menu" router="#" />
      </div>
    </main>
  );
};

export default OurMenu;
