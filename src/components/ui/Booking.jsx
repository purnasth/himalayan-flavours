import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { MdOutlineRoomService } from 'react-icons/md';

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
      to="#"
    //   target="_blank"
    //   rel="noreferrer"
      className={`${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transition-300 transition-1000 fixed bottom-4 right-1/2 z-40 inline-flex translate-x-1/2 translate-y-0 scale-100 animate-pulse items-center justify-center gap-2 rounded-full border border-orange-300/50 bg-dark/50 bg-orange-300 px-6 py-2 font-bold text-dark shadow backdrop-blur-sm`}
      title="Order Now"
      aria-label="Order Now"
    >
      <span className="text-base">Order Now</span>
      <MdOutlineRoomService className="animate-bounce text-2xl" />
    </Link>
  );
};

export default WhatsApp;