import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-screen w-full items-center justify-center">
        <h1 className="text-7xl">Himalayan Flavours</h1>
      </main>

      <section className="h-screen bg-red-600"></section>
    </>
  );
};

export default App;
