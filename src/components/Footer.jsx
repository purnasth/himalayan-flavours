import React from 'react';
import Contact from './Contact';
import bgCuisine from '../assets/images/bg_cuisine.png';
import { MdFacebook, MdStarRate } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import TestimonialSlider from './ui/TestimonialSlider';

import { navLinks } from '../constants/data';
import Logo from './ui/Logo';
import ContactInfo from './ui/ContactInfo';

const Footer = () => {
  return (
    <main className="bg-orange-50 p-0">
      {/* <div className="absolute bottom-0 h-3/4 w-full bg-red-600 -z-10"></div> */}
      <div
        className="pointer-events-none absolute bottom-0 -z-10 h-3/4 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgCuisine})` }}
      ></div>
      <Contact />

      <section className="relative p-24">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-t from-white to-transparent"></div>
        <div className="z-10 flex items-center justify-center">
          <Logo className="h-40 w-auto object-contain" />
        </div>
        <div className="mt-16 grid grid-cols-7">
          <div className="col-span-2 w-full">
            <span className="text-xs font-bold uppercase text-dark/70">
              Web Pages
            </span>
            <ul className="links mt-8 flex flex-col items-start justify-start gap-2 md:gap-4">
              {navLinks.slice(1, 6).map((link) => (
                <li className="group w-full" key={link.id}>
                  <a
                    href={link.url}
                    className="navlink"
                    aria-label={link.title}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
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
                <strong className="font-bold text-dark">5.0</strong>/ 0 review
              </p>
            </div>
          </div>

          <div className="col-span-2 w-full text-right">
            <span className="text-xs font-bold uppercase text-dark/70">
              Contact Info
            </span>
            <div className="mt-8 space-y-8">
              <ContactInfo align="justify-end items-end text-right" />
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
