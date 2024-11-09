import React from 'react';
import useIconOrImage from '../../hooks/useIconOrImage';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    id: 1,
    type: 'location',
    title: '3945 Quadra St, Victoria, BC V8X 1J5, Canada',
    url: 'https://maps.app.goo.gl/ThmUvT8FABgwKMho7',
    icon: null,
    image: null,
  },
  {
    id: 2,
    type: 'phone',
    title: '+1 250 986 1755',
    url: 'tel:+12509861755',
    icon: null,
    image: null,
  },
  {
    id: 3,
    type: 'email',
    title: 'info@himalayan-flavours.com',
    url: 'mailto:info@himalayan-flavours.com',
    icon: null,
    image: null,
  },
  {
    id: 4,
    type: 'social',
    title: 'Facebook',
    url: '#',
    icon: 'MdFacebook',
    image: null,
  },
  {
    id: 5,
    type: 'social',
    title: 'Instagram',
    url: '#',
    icon: 'RiInstagramFill',
    image: null,
  },
];

const ContactInfo = ({ align }) => {
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
          .map((item) => (
            <li key={item.id} className="group">
              <Link
                to={item.url}
                rel="noreferrer noopener"
                aria-label={item.title}
                title={item.title}
                target="_blank"
              >
                {useIconOrImage({
                  icon: item.icon,
                  image: item.image,
                  title: item.title,
                  className:
                    'text-2xl transition-all duration-300 ease-linear group-hover:scale-125',
                })}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactInfo;
