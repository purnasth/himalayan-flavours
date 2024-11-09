import React from 'react';
import { getIconComponent } from '../utils/iconMap';

const useIconOrImage = ({ icon, image }) => {
  if (icon) {
    const IconComponent = getIconComponent(icon);
    return IconComponent ? <IconComponent className="text-2xl" /> : null;
  }
  if (image) {
    return <img src={image} alt="" className="h-6 w-6" />;
  }
  return null;
};

export default useIconOrImage;
