import React from 'react';
import logo from '../assets/logos/logo.svg';
import { useState } from 'react';
import { CgMenuHotdog } from 'react-icons/cg';
import { MdOutlineRoomService } from 'react-icons/md';
import { useEffect } from 'react';

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
      {/*
       <nav
        className={`fixed top-0 z-40 w-full font-serif transition-all duration-[1s] ${
          window.scrollY > 0 ? '' : ''
        } ${visible ? '' : '-translate-y-full'}`}
      >
        <div
          className={`z-40 flex items-start justify-between px-4 py-6 md:px-8 ${
            visible
              ? 'bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)]'
              : 'bg-transparent'
          }${window.scrollY > 0 ? 'flex items-center justify-between' : ''} `}
        >
          <div
            className={`mt-1 cursor-pointer text-amber-300 transition-all duration-[1s] ${
              visible ? 'translate-x-0 scale-100' : 'translate-x-full scale-0'
            } ${window.scrollY > 0 ? '' : ''}`}
          >
            <button class="hover-outline pointer-events-auto relative flex items-center gap-2 rounded-full bg-amber-500/50 px-5 py-2 text-amber-200 outline outline-2 outline-amber-200 transition-all duration-700 ease-linear">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 scale-75 text-xl opacity-0 transition-all duration-700 ease-linear"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 scale-100 text-xl opacity-100 transition-all duration-700 ease-linear"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
              <span class="ml-6">Menu</span>
            </button>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2">
            <a
              href="/"
              className={`object-contain transition-all duration-[1s] ${
                visible ? '' : ''
              } ${window.scrollY > 0 ? '' : ''}`}
            >
              <img
                src="https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg"
                alt="logo"
                className={`h-36 w-40 object-contain transition-all duration-[1s] ${
                  visible ? '-translate-y-0' : '-translate-y-6 scale-0'
                } ${
                  window.scrollY > 0
                    ? '-translate-y-6 scale-0'
                      ''
                }`}
              />
            </a>
          </h1>

          <button
            className={`bg-goldDark hover-outline pointer-events-auto flex cursor-pointer items-center gap-2 rounded-full bg-amber-500/50 px-5 py-2 text-amber-200 outline outline-2 outline-amber-200 transition-all duration-[1s] ${
              visible ? 'translate-x-0 scale-100' : '-translate-x-full scale-0'
            } ${window.scrollY > 0 ? 'filter-black' : ''}`}
            onClick={toggleNav}
            title="Menu"
            aria-label="Menu"
          >
            Book{' '}
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            </svg>
          </button>
        </div>
      </nav> */}
      <header
        className={`fixed top-0 z-50 w-full p-4 transition-all duration-1000 ease-in-out`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={toggleNav}
              className="round-full transition-300 rounded-full border border-white/50 bg-dark p-2 text-white hover:border-black/80 hover:bg-white hover:text-dark"
            >
              <CgMenuHotdog className="text-2xl" />
            </button>
            <button
              type="button"
              className={`transition-1000 hidden items-center gap-2 rounded-full border border-black bg-white px-4 py-2 font-bold text-dark shadow md:inline-flex ${visible ? 'translate-y-0 scale-100' : '-translate-y-[200%] scale-0'}`}
              aria-label="Book Now"
              title="Book"
            >
              <MdOutlineRoomService className="text-2xl" />
              View Menu
            </button>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className={`transition-1000 object-contain ${
                visible ? '' : ''
              } ${window.scrollY > 0 ? '' : ''}`}
            >
              <img
                src={logo}
                alt="Logo"
                className={`transition-1000 h-32 w-full object-contain ${
                  visible ? '-translate-y-0' : '-translate-y-full scale-0'
                } ${window.scrollY > 0 ? '-translate-y-full scale-0' : 'translate-y-0'}`}
              />
            </a>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={closeNav}
        />
      )}

      <nav
        className={`fixed left-0 top-0 h-screen w-[28rem] overflow-y-auto bg-light transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={closeNav}
          className="absolute right-4 top-4 flex items-center justify-center gap-2 text-4xl text-black"
        >
          &times;
        </button>

        <div className="flex size-full flex-col items-start justify -evenly gap-0 px-8 text-dark">
          <div className="mt-12 w-full">
            <span className="text-xs uppercase text-dark/50">Navigation</span>
            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-4">
              <li className="w-full">
                <a
                  href="#"
                  className="navlink inline-block w-full pb-2 text-2xl font-bold capitalize text-dark"
                  aria-label="Stay"
                >
                  About Restaurant{' '}
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="navlink inline-block w-full pb-2 text-2xl font-bold capitalize text-dark"
                  aria-label="Menu"
                >
                  Food Menu
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="navlink inline-block w-full pb-2 text-2xl font-bold capitalize text-dark"
                  aria-label="Gallery"
                >
                  Food Gallery
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="navlink inline-block w-full pb-2 text-2xl font-bold capitalize text-dark"
                  aria-label="Contact"
                >
                  Contact Info
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="navlink inline-block w-full pb-2 text-2xl font-bold capitalize text-dark"
                  aria-label="Promotions"
                >
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
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                    </svg>
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
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr class="my-8 w-full border-dark/20" /> */}
          <div className="mt-12 flex w-full items-center justify-between border-t-2 border-dark/10">
            <span className="flex gap-0 text-base text-dark">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
              </svg>
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
