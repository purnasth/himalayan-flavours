import React from 'react';
import Form from './ui/Form';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <section className="p-0">
      <div className="mx-auto grid w-2/3 grid-cols-2 gap-16 bg-white p-12 border shadow-lg">
        <div className="">
          <div className="mx-auto mb-24 flex max-w-lg flex-col items-center justify-center gap-4">
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Hungry for happiness?
            </h3>
            <p className="text-pretty text-sm text-dark/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              cum itaque nulla iste rem tempora, sequi ducimus a sit dicta,
              ullam minus vero. Similique magni nihil, quia provident soluta
              illo harum
            </p>
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
                    <MdFacebook className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125"/>
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
                    <RiInstagramFill
                      className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
