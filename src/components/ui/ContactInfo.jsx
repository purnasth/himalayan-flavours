import React from 'react';
// import useIconOrImage from '../../hooks/useIconOrImage';
import { Link } from 'react-router-dom';
import useFetchAPI from '../../hooks/useFetchAPI';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa';
import { TbPhone } from 'react-icons/tb';

// const contactInfo = [
//   {
//     id: 1,
//     type: 'location',
//     title: '3945 Quadra St, Victoria, BC V8X 1J5, Canada',
//     url: 'https://maps.app.goo.gl/ThmUvT8FABgwKMho7',
//     icon: null,
//     image: null,
//   },
//   {
//     id: 2,
//     type: 'phone',
//     title: '+1 250 986 1755',
//     url: 'tel:+12509861755',
//     icon: null,
//     image: null,
//   },
//   {
//     id: 3,
//     type: 'email',
//     title: 'info@himalayan-flavours.com',
//     url: 'mailto:info@himalayan-flavours.com',
//     icon: null,
//     image: null,
//   },
//   {
//     id: 4,
//     type: 'social',
//     title: 'Facebook',
//     url: 'https://www.facebook.com/HimalayanFlavourRestaurant',
//     icon: 'FaFacebookF',
//     image: null,
//   },
//   {
//     id: 5,
//     type: 'social',
//     title: 'Instagram',
//     url: '#',
//     icon: 'RiInstagramFill',
//     image: null,
//   },
//   {
//     id: 6,
//     type: 'social',
//     title: 'Tiktok',
//     url: '#',
//     icon: 'IoLogoTiktok',
//     image: null,
//   },
// ];

const iconMap = {
  FaFacebookF,
  AiFillInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  TbBrandFacebook,
  FaInstagram,
  TbPhone,
};

const ContactInfo = ({ align }) => {
  const {
    data: contactInfo = [],
    isLoading,
    isError,
  } = useFetchAPI(
    'contactInfo',
    'https://mayurstay.com/himalayanflavours/api/api_location.php',
  );

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <ul className={`flex flex-col ${align} gap-1 text-center`}>
        {contactInfo
          .filter((item) => item.type !== 'social')
          .map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="inline-block text-sm font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                {item.title}
              </a>
            </li>
          ))}
      </ul>

      <ul className={`my-6 flex ${align} gap-4 text-2xl`}>
        {contactInfo
          .filter((item) => item.type === 'social')
          .map((item) => {
            const IconComponent = iconMap[item.icon];

            return (
              <li key={item.id} className="group">
                <Link
                  to={item.url}
                  rel="noreferrer noopener"
                  aria-label={item.title}
                  title={item.title}
                  target="_blank"
                >
                  {/* {useIconOrImage({
                  icon: item.icon,
                  image: item.image,
                  title: item.title,
                  className:
                    'size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125',
                })} */}

                  {IconComponent ? (
                    <IconComponent className="transition-all duration-300 ease-linear group-hover:scale-125" />
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactInfo;
