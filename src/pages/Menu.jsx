import React from 'react';
import UniversalFooter from '../layouts/UniversalFooter';
import Title from '../components/ui/Title';
// import foodMenu from '../assets/menu/menu.pdf';
import ReservationWhatsApp from '../components/ui/ReservationWhatsApp';
import useFetchAPI from '../hooks/useFetchAPI';

const Menu = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: menuPage,
    isLoading,
    isError,
  } = useFetchAPI('menuPage', `/himalayanflavours/api/menuPage.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { heading, description, menuPdf } = menuPage;

  return (
    <>
      <main>
        <Title title={heading} description={description} />

        <div className="mx-auto mt-8 flex justify-center">
          <iframe
            src={menuPdf}
            className="h-[80vh] w-full border-none md:h-[110vh]"
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
