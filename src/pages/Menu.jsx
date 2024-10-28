import React from 'react';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';
import foodMenu from '../assets/menu/menu.pdf';

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
      </main>
      <UniversalFooter />
    </>
  );
};

export default Menu;
