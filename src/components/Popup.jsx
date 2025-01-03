// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import 'swiper/css/effect-fade';
// import useFetchAPI from '../hooks/useFetchAPI';

// const Popup = () => {
//   const {
//     data: popup,
//     isLoading,
//     isError,
//   } = useFetchAPI('popup', `/himalayanflavours/api/popup.json`);

//   const [isOpen, setIsOpen] = useState(true);

//   const closePopup = () => setIsOpen(false);

//   if (isLoading) return null;
//   if (isError) {
//     console.error(isError);
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
//           onClick={closePopup}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//         >
//           <motion.div
//             className="relative mx-auto size-auto max-w-3xl overflow-hidden rounded-xl bg-white p-0 shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <button
//               className="absolute right-2 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 p-1 text-xl text-white"
//               onClick={closePopup}
//             >
//               &times;
//             </button>
//             {popup.length === 1 ? (
//               <div className="text-center">
//                 <img
//                   src={popup[0].img.src}
//                   alt={popup[0].img.alt}
//                   className="aspect-square size-full object-cover shadow"
//                 />
//               </div>
//             ) : (
//               <>
//                 <Swiper
//                   modules={[Navigation, Autoplay, EffectFade]}
//                   navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                   }}
//                   autoplay={{ delay: 3000 }}
//                   effect="fade"
//                   fadeEffect={{ crossFade: true }}
//                   speed={2000}
//                   loop={true}
//                 >
//                   {popup.map((content, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="flex flex-col items-center">
//                         <img
//                           src={content.img.src}
//                           alt={content.img.alt}
//                           className="aspect-square size-full object-cover shadow"
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//                 <div className="swiper-button-prev absolute left-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
//                   &larr;
//                 </div>
//                 <div className="swiper-button-next absolute right-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
//                   &rarr;
//                 </div>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Popup;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import useFetchAPI from '../hooks/useFetchAPI';

const Popup = () => {
  const {
    data: popup,
    isLoading,
    isError,
  } = useFetchAPI('popup', `/himalayanflavours/api/popup.json`);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem('isPopupShown');
    if (!isPopupShown) {
      setIsOpen(true);
      sessionStorage.setItem('isPopupShown', 'true');
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('isPopupShown');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closePopup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="relative mx-auto size-auto max-w-3xl overflow-hidden rounded-xl bg-white p-0 shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <button
              className="absolute right-2 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 p-1 text-xl text-white"
              onClick={closePopup}
            >
              &times;
            </button>
            {popup.length === 1 ? (
              <div className="text-center">
                <img
                  src={popup[0].img.src}
                  alt={popup[0].img.alt}
                  className="aspect-square size-full object-cover shadow"
                />
              </div>
            ) : (
              <>
                <Swiper
                  modules={[Navigation, Autoplay, EffectFade]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  autoplay={{ delay: 3000 }}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={2000}
                  loop={true}
                >
                  {popup.map((content, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center">
                        <img
                          src={content.img.src}
                          alt={content.img.alt}
                          className="aspect-square size-full object-cover shadow"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-prev absolute left-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
                  &larr;
                </div>
                <div className="swiper-button-next absolute right-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
                  &rarr;
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
