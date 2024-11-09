import React from 'react';
import useIconOrImage from '../../hooks/useIconOrImage';

const contactInfo = [
  {
    id: 1,
    type: 'location',
    title: 'Victoria, British Columbia, Canada',
    url: 'https://maps.app.goo.gl/ThmUvT8FABgwKMho7',
    icon: null,
    image: null,
  },
  {
    id: 2,
    type: 'phone',
    title: '+1 250 986 1755',
    url: 'tel:+12509861755',
    icon: 'TbPhone',
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
    url: 'https://www.facebook.com/MithilaYatriNiwas',
    icon: 'MdFacebook',
    image: null,
  },
  {
    id: 5,
    type: 'social',
    title: 'Instagram',
    url: 'https://instagram.com/mithilayatriniwas?igshid=MzRlODBiNWFlZA==',
    icon: 'RiInstagramFill',
    image: null,
  },
];

const ContactInfo = () => {
  return (
    <>
      <ul className="flex flex-col items-start justify-center gap-1 text-center">
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

      <ul className="my-6 flex items-start justify-start gap-4 text-2xl">
        {contactInfo
          .filter((item) => item.type === 'social')
          .map((item) => (
            <li key={item.id} className="group">
              <a
                href={item.url}
                rel="noreferrer noopener"
                aria-label={item.title}
                title={item.title}
                target="_blank"
              >
                {useIconOrImage(item)}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactInfo;
