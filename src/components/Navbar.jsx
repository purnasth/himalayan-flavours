import React from 'react';
import logo from '../assets/logos/logo.svg';
import { useState } from 'react';
import { CgMenuHotdog } from 'react-icons/cg';
import { MdOutlineRoomService } from 'react-icons/md';
import { useEffect } from 'react';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import foodMenu from '../assets/menu/menu.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full p-4 transition-all duration-1000 ease-in-out`}
      >
        <div className="flex items-start justify-between">
          <div className="flex gap-2">
            <button
              onClick={toggleNav}
              className="transition-300 rounded-full border border-white/50 bg-dark p-2 text-white hover:border-black/80 hover:bg-white hover:text-dark"
            >
              <CgMenuHotdog className="text-2xl" />
            </button>
            <Link
              to={foodMenu}
              className={`transition-1000 hidden items-center gap-2 rounded-full border border-light/50 bg-dark/50 px-4 py-2 font-bold text-light shadow backdrop-blur-sm md:inline-flex ${visible ? 'translate-y-0 scale-100' : '-translate-y-[200%] scale-0'}`}
              aria-label="View Menu"
              title="Menu"
              target="_blank"
              download
            >
              <MdOutlineRoomService className="text-2xl" />
              View Menu
            </Link>
          </div>
          <a
            href="/"
            className={`transition-1000 object-contain ${
              visible ? '' : ''
            } ${window.scrollY > 0 ? '' : ''}`}
          >
            <img
              src={logo}
              alt="Logo"
              className={`transition-1000 h-16 w-auto object-contain md:h-32 ${
                visible ? '-translate-y-0' : '-translate-y-full scale-0'
              } ${window.scrollY > 0 ? '-translate-y-full scale-0' : 'translate-y-0'}`}
            />
          </a>
        </div>
      </header>

      <div
        className={`transition-700 fixed inset-0 z-30 bg-black/50 backdrop-blur-sm ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeNav}
      />

      <nav
        className={`transition-700 fixed left-0 top-0 h-screen w-full overflow-y-auto bg-light md:w-[28rem] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={closeNav}
          className="absolute right-4 top-4 flex items-center justify-center gap-2 text-4xl text-black"
        >
          &times;
        </button>

        <div className="justify -evenly flex size-full flex-col items-start gap-0 px-8 text-dark">
          <div className="mt-12 w-full">
            <span className="text-xs uppercase text-dark/50">Navigation</span>
            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-4">
              <li className="group w-full">
                <a href="#" className="navlink" aria-label="Stay">
                  About Restaurant
                </a>
              </li>
              <li className="group w-full">
                <a href="#" className="navlink" aria-label="Menu">
                  Food Menu
                </a>
              </li>
              <li className="group w-full">
                <a href="#" className="navlink" aria-label="Gallery">
                  Food Gallery
                </a>
              </li>
              <li className="group w-full">
                <a href="#" className="navlink" aria-label="Contact">
                  Contact Info
                </a>
              </li>
              <li className="group w-full">
                <a href="#" className="navlink" aria-label="Promotions">
                  Promotions
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="w-full space-y-4">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
            <div className="space-y-8">
              <ul className="flex flex-col items-start justify-center gap-1 text-center">
                <li>
                  <a
                    href="https://maps.app.goo.gl/ThmUvT8FABgwKMho7"
                    className="inline-block text-sm font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Victoria, British Columbia, Canada"
                  >
                    Victoria, British Columbia, Canada
                  </a>
                </li>
                <li className="">
                  <a
                    href="tel:+12509861755 "
                    className="number inline-block text-sm font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={+12509861755}
                  >
                    +1 250 986 1755
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@himalayan-flavours.com"
                    className="inline-block text-sm font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="info@himalayan-flavours.com"
                  >
                    info@himalayan-flavours.com
                  </a>
                </li>
              </ul>
              <ul className="my-6 flex items-start justify-start gap-4 text-2xl">
                <li className="group">
                  <a
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    title="Facebook"
                    href="#"
                    target="_blank"
                  >
                    <MdFacebook className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </a>
                </li>
                <li className="group">
                  <a
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    title="Instagram"
                    href='#"'
                    target="_blank"
                  >
                    <RiInstagramFill className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr className="my-8 w-full border-dark/20" /> */}
          <div className="mt-12 flex w-full items-center justify-between border-t-2 border-dark/10">
            <span className="flex gap-0 text-base text-dark">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </span>
            <p className="my-4 text-sm text-dark/50">
              <strong className="font-bold text-dark">5.0</strong>/ 5,753
              reviews
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
