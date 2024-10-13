import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsApp from './components/ui/WhatsApp';
import useLenisScroll from './hooks/useLenisScroll';

const App = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <WhatsApp/>
      </Router>
    </>
  );
};

export default App;
