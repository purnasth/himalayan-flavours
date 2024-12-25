import React from 'react';
import Form from './ui/Form';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import ContactInfo from './ui/ContactInfo';
import { TbClockFilled } from 'react-icons/tb';

const Contact = () => {
  return (
    <section className="p-0">
      <div className="mx-auto grid w-[90%] max-w-6xl grid-cols-1 gap-4 border bg-white p-6 shadow-lg md:grid-cols-2 lg:gap-16 lg:p-12 xl:w-full">
        <div className="">
          <div className="mb-8 flex max-w-lg flex-col items-start justify-start gap-4 text-left lg:mb-24">
            <h3 className="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Looking for celebrations?
            </h3>
            <p className="text-pretty text-sm text-dark/60">
              Looking to make your event unforgettable, or have a question? Drop
              us a message, and we'll get back to you with a feast of ideas to
              make it happen!
            </p>

            <div className="mt-4">
              <h4 className="inline-flex items-center justify-center gap-1 font-body text-base text-dark">
                <TbClockFilled className="text-xl" />
                10:00 AM - 10:00 PM
              </h4>
            </div>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="hidden w-full space-y-4 md:block">
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
