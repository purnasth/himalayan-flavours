import React from 'react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ReservationWhatsApp = () => {
  return (
    <>
      <Link
        to="https://wa.me/+12509861755"
        target="_blank"
        rel="noreferrer"
        className="transition-300 group flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-8 py-4 text-sm font-semibold hover:bg-orange-300/20 hover:text-orange-500 md:text-base"
        aria-label="Reservation"
        title="Reservation"
      >
        Make a Reservation
        <TbBrandWhatsapp className="text-xl" />
      </Link>
    </>
  );
};

export default ReservationWhatsApp;
