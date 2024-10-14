import React from 'react';
import bgCuisine from '../assets/images/bg_cuisine.png';
import MasterSlider from './ui/MasterSlider';

const cuisineSection = [
  {
    title: 'Nepalese Cuisine',
    subtitle: 'Start your day with',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum cupiditate, excepturi totam nobis sunt assumenda, et eius porro a sit perferendis fugit ',
    image: bgCuisine,
  },
  {
    title: 'Indian Cuisine',
    subtitle: 'Experience the flavor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum cupiditate, excepturi totam nobis sunt assumenda, et eius porro a sit perferendis fugit ',
    image: bgCuisine,
  },
  {
    title: 'Chinese Cuisine',
    subtitle: 'Delight in every bite',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum cupiditate, excepturi totam nobis sunt assumenda, et eius porro a sit perferendis fugit ',
    image: bgCuisine,
  },
];

const Cuisine = () => (
  <MasterSlider
    slides={cuisineSection}
    hasContent={true}
    autoplay={true}
    effect="fade"
    speed={1000}
    delay={5000}
    navigation={true}

    
  />
);

export default Cuisine;