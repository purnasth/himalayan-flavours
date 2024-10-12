import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';

const WhatsApp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      to="https://wa.me/+12509861755"
      target="_blank"
      rel="noreferrer"
      className={`${
        showButton
          ? 'translate-y-0 scale-75 sm:scale-100'
          : 'translate-y-20 scale-0'
      } transition-300 fixed bottom-4 right-4 z-20 flex size-11 items-center justify-center rounded-full border border-green-600/30 bg-light p-1 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-light animate-pulse`}
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      <TbBrandWhatsapp className="text-4xl p-px" />
    </Link>
  );
};

export default WhatsApp;
