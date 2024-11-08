import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';

const MasterSlider = ({
  slides = [],
  hasContent = false,
  autoplay = true,
  effect = 'fade',
  speed = 2000,
  delay = 5000,
  navigation = true,
  sizeClassName = 'relative flex h-screen items-center justify-center',
}) => (
  <>
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={
        navigation && {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      autoplay={autoplay ? { delay } : false}
      effect={effect}
      fadeEffect={{ crossFade: true }}
      loop={true}
      speed={speed}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={`${sizeClassName}`}>
          <img
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          {hasContent && (
            <div className="mt-12 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
              {slide.subtitle && (
                <span className="text-base 2xl:text-lg">{slide.subtitle}</span>
              )}
              {slide.title && (
                <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-8xl lg:leading-none 2xl:text-9xl">
                  {slide.title}
                </h3>
              )}
              {slide.description && (
                <p className="text-center text-sm text-dark/60">
                  {slide.description}
                </p>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}

      {navigation && (
        <>
          <button
            aria-label="Next"
            title="Next"
            className="swiper-button-next transition-300 absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowRight />
          </button>
          <button
            aria-label="Previous"
            title="Previous"
            className="swiper-button-prev transition-300 absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowLeft />
          </button>
        </>
      )}
    </Swiper>
    <style jsx>{`
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none !important;
      }
    `}</style>
  </>
);

export default MasterSlider;
