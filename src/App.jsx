import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./layouts/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatsApp from "./components/ui/WhatsApp";
import useLenisScroll from "./hooks/useLenisScroll";
import Menu from "./pages/Menu";
import GalleryPage from "./pages/GalleryPage";
import PromotionsPage from "./pages/PromotionsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RouterToTop from "./utils/RouterToTop";
import CaptchaTest from "./pages/CaptchaTest";
import Preloader from "./layouts/Preloader";

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  useLenisScroll();

  // No delay for content to appear after preloader finishes
  const handlePreloaderFinish = () => {
    setIsPreloading(false);
  };

  return (
    <>
      {/* Preloader with immediate transition */}
      {isPreloading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        // Wrap the entire Router content in a motion.div
        <motion.div
          initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
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
              <Route path="/test" element={<CaptchaTest />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <WhatsApp />
            <Footer />
          </Router>
        </motion.div>
      )}
    </>
  );
};

export default App;
