import React from 'react';
import Form from './ui/Form';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import ContactInfo from './ui/ContactInfo';

const Contact = () => {
  return (
    <section className="p-0">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 border bg-white p-12 shadow-lg">
        <div className="">
          <div className="mb-24 flex max-w-lg flex-col items-center justify-start gap-4">
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Hungry for happiness?
            </h3>
            <p className="text-pretty text-sm text-dark/60">
              Can't find what you're looking for or got a question ? Send us a
              message and we'll get back to you as soon as possible.
            </p>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="w-full space-y-4">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
            <div className="space-y-8">
              <ContactInfo align="items-start justify-start" />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
