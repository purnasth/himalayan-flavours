import React from 'react';
import Contact from './Contact';
import logo from '../assets/logos/logo.svg';
import bgCuisine from '../assets/images/bg_cuisine.png';
import { MdFacebook, MdStarRate } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import TestimonialSlider from './ui/TestimonialSlider';

const Footer = () => {
  return (
    <main className="bg-orange-100 p-0">
      {/* <div className="absolute bottom-0 h-3/4 w-full bg-red-600 -z-10"></div> */}
      <div
        className="pointer-events-none absolute bottom-0 -z-10 h-3/4 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgCuisine})` }}
      ></div>
      <Contact />

      <section className="relative p-24">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-t from-white to-transparent"></div>
        <div className="z-10 flex items-center justify-center">
          <a href="/" className="cursor-pointer">
            <img
              src={logo}
              alt=""
              className="h-40 w-auto object-contain"
            />
          </a>
        </div>
        <div className="mt-16 grid grid-cols-7">
          <div className="col-span-2 w-full">
            <span className="text-xs font-bold uppercase text-dark/70">
              Navigation
            </span>
            <ul className="links mt-8 flex flex-col items-start justify-start gap-2 md:gap-4">
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

          <div className="col-span-3">
            <div className="w-full text-center">
              {/* <img
                src="https://www.manigrambishrambatika.com/template/web/img/testi-qoute-1.png"
                alt=""
              /> */}
              <span className="text-center text-xs font-bold uppercase text-dark/70">
                Reviews
              </span>

              <TestimonialSlider />
            </div>

            <div className="mt-10 flex w-full items-center justify-between border-t-2 border-dark/10">
              <span className="flex gap-0 text-base text-dark">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MdStarRate key={index} />
                ))}
              </span>
              <p className="my-4 text-sm text-dark/50">
                <strong className="font-bold text-dark">5.0</strong>/ 5,753
                reviews
              </p>
            </div>
          </div>

          <div className="col-span-2 w-full text-right">
            <span className="text-xs font-bold uppercase text-dark/70">
              Contact Info
            </span>
            <div className="mt-8 space-y-8">
              <ul className="flex flex-col items-end justify-center gap-1 text-center">
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
              <ul className="my-6 flex items-end justify-end gap-4 text-2xl">
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
        </div>

        {/* <hr className="my-8 w-full border-dark/20" /> */}

        <div className="mt-16 flex flex-col items-center justify-center gap-2 text-sm md:flex-row md:justify-between md:text-base">
          <span>© 2024 Himalayan Flavours </span>
          <span>
            Website by: &nbsp;
            <a
              className="font-bold"
              href="https://www.longtail.info/"
              target="_blank"
            >
              Longtail e-Media
            </a>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Footer;
