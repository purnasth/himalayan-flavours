import React from 'react';
import Title from '../components/ui/Title';
import Nearby from '../components/ui/Nearby';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <main className="bg-orange-50">
        <Title
          title="Reach Himalayan Flavours"
          description="Get the directions to our restaurant and contact us for any reservations whether it's a small gathering or a large event."
        />
        <Nearby />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
