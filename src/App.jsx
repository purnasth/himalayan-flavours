import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsApp from './components/ui/WhatsApp';
import useLenisScroll from './hooks/useLenisScroll';
import Menu from './pages/Menu';
import GalleryPage from './pages/GalleryPage';
import PromotionsPage from './pages/PromotionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RouterToTop from './utils/RouterToTop';

const App = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food-menu" element={<Menu />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/offers" element={<PromotionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <WhatsApp />
      </Router>
    </>
  );
};

export default App;
