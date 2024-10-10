import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success('Form submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
    }
  };

  const contactFormFields = [
    { name: 'name', label: 'Name', type: 'text' },
    // { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'text' },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {contactFormFields.map((input) => (
          <div key={input.name} className="relative mb-4">
            <label
              htmlFor={input.name}
              className="mb-2 block text-dark/80"
            >
              {input.label}
            </label>
            {input.type === 'textarea' ? (
              <textarea
                {...register(input.name)}
                rows={4}
                id={input.name}
                className={`w-full rounded-none border-b border-dark/20 bg-transparent py-1 text-base text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                  errors[input.name] ? 'border-red-500' : 'border-gray-200'
                } `}
              />
            ) : (
              <input
                {...register(input.name)}
                id={input.name}
                type={input.type}
                className={`w-full rounded-none border-b border-dark/20 bg-transparent py-1 text-base text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                  errors[input.name] ? 'border-red-500' : 'border-gray-200'
                } `}
              />
            )}
            {errors[input.name] && (
              <span className="pointer-events-none absolute left-0 top-1/2 select-none text-sm text-red-500">
                {errors[input.name].message}*
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className={`mt-8 rounded-full bg-orange-300 px-8 py-2 ${
            isSubmitting ? 'cursor-not-allowed opacity-75' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        <p class="mt-4 text-sm text-dark/80">
          or Call us at
          <a
            href="tel:+12509861755"
            class="navlink mx-1 font-body font-bold underline underline-offset-2"
          >
            +1 250 986 1755
          </a>
          for direct booking.
        </p>
      </form>

      <ToastContainer />
    </>
  );
};

export default Form;
