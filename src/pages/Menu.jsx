import React from 'react';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';
import foodMenu from '../assets/menu/menu.pdf';
import FireButton from '../components/ui/FireButton';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';
import ReservationWhatsApp from '../components/ui/ReservationWhatsApp';

const Menu = () => {
  return (
    <>
      <main>
        <Title
          title="Cuisines inspired by the Himalayas"
          description="Check out our delicious menu. We have something for everyone. Grab your favorite dish before it's gone!"
        />

        <div className="mt-8 flex justify-center">
          <iframe
            src={foodMenu}
            className="h-[80vh] w-full border-none md:h-[90vh]"
            title="Food Menu"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="mx-auto h-32 w-px bg-orange-300/30" />
          <ReservationWhatsApp />
        </div>
      </main>
      <UniversalFooter />
    </>
  );
};

export default Menu;
