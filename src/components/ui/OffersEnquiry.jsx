import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fire from '../../assets/logos/fire.svg';

const offersForm = [
  //   {
  //     name: 'offersTitle',
  //     type: 'text',
  //     label: 'Offer Title',
  //     required: true,
  //   },
  {
    name: 'fullName',
    type: 'text',
    label: 'Full Name',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    required: true,
  },
  {
    name: 'phoneNumber',
    type: 'text',
    label: 'Phone Number',
    required: true,
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Message',
    required: true,
  },
];

const schema = yup.object().shape({
  //   offersTitle: yup.string().required('Offer Title is required'),
  fullName: yup.string().required('Enter your full name*'),
  email: yup.string().email('Invalid email').required('Enter your email*'),
  phoneNumber: yup.string().required('Enter your phone number*'),
  message: yup.string().required('Enter your message*'),
});

const OffersEnquiry = ({ offerTitle, onClose }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success('Form submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-dark/50 opacity-100 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-xl rounded-lg bg-light p-6 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-xl text-gray-700"
          >
            &#x2715;
          </button>
          <div className="space-y-2">
            <h3 className="font-body text-xl font-bold">Enquiry Form</h3>
            <p>Send your information and query.</p>
          </div>
          <h4 className="my-8 font-body text-xl font-bold">
            {offerTitle || 'Special Offer'}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            {offersForm.map((input) => (
              <div key={input.name} className="relative mb-4">
                <label htmlFor={input.name} className="block text-dark/80">
                  {input.label}
                </label>
                {input.type === 'textarea' ? (
                  <textarea
                    {...register(input.name)}
                    rows={2}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-1 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                      errors[input.name] ? 'border-red-500' : 'border-gray-200'
                    } `}
                  />
                ) : (
                  <input
                    {...register(input.name)}
                    type={input.type}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-1 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                      errors[input.name] ? 'border-red-500' : 'border-gray-200'
                    } `}
                  />
                )}
                {errors[input.name] && (
                  <p className="pointer-events-none absolute bottom-3 select-none text-sm text-red-500">
                    {errors[input.name].message}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className={`transition-300 group mt-8 flex items-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-5 py-2 font-semibold hover:bg-orange-200/80 hover:text-orange-500 ${
                isSubmitting ? 'cursor-not-allowed opacity-75' : ''
              }`}
              disabled={isSubmitting}
            >
              <img
                src={fire}
                alt="Fire"
                className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
              />
              {isSubmitting ? 'Sending...' : 'Submit'}

              <img
                src={fire}
                alt="Fire"
                className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
              />
            </button>
            <p className="mt-4 text-sm text-dark/80">
              or Call us at
              <a
                href="tel:+12509861755"
                className="mx-1 font-body font-bold underline underline-offset-2"
              >
                +1 250 986 1755
              </a>
              for direct booking.
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default OffersEnquiry;
