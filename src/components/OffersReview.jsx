import React from 'react';

const OffersReview = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-12">
          <div className="col-span-2">
            <div className="space-y-4">
              <h5 className="caps text-2xl capitalize md:text-4xl">
                Offers & Packages
              </h5>
              <p className="max-w-lg text-xs text-dark/60 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                quas alias ipsam expedita facere provident amet voluptatem
                reprehenderit.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div className="group relative">
                <div className="overlay absolute inset-0 -z-0 size-full bg-black/70"></div>
                <img
                  src="https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg"
                  alt=""
                  className="-z-10 h-[36rem] w-full object-cover shadow"
                />

                <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-around p-12 text-center text-light ">
                  <span className="text-sm font-light uppercase tracking-wider md:text-sm">
                    On Every Dish 10% Off
                  </span>
                  <div>
                    <h2 className="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl leading-relaxed md:mx-0 md:text-4xl md:leading-snug">
                      Nepalese Cuisine
                    </h2>
                    <p class="text-center text-sm opacity-80">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <button class="rounded-full border border-light/50 bg-light/10 px-8 py-2 font-bold text-light backdrop-blur">
                    Explore More
                  </button>
                </div>
              </div>
              <div className="group relative">
                <div className="overlay absolute inset-0 -z-0 size-full bg-black/70"></div>
                <img
                  src="https://www.avenuecalgary.com/wp-content/uploads/2024/02/BR2024-Aama-scaled.jpg"
                  alt=""
                  className="-z-10 h-[36rem] w-full object-cover shadow"
                />

                <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-around p-12 text-center text-light ">
                  <span className="text-sm font-light uppercase tracking-wider md:text-sm">
                    On Every Dish 10% Off
                  </span>
                  <div>
                    <h2 className="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl leading-relaxed md:mx-0 md:text-4xl md:leading-snug">
                      Nepalese Cuisine
                    </h2>
                    <p class="text-center text-sm opacity-80">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <button class="rounded-full border border-light/50 bg-light/10 px-8 py-2 font-bold text-light backdrop-blur">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-4">
              <h5 className="caps text-4xl capitalize">Feedback</h5>
              <p className="max-w-xs text-xs text-dark/60 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia maxime
              </p>
            </div>
            <div className="mt-12 max-h-[36rem] space-y-16 overflow-y-auto pr-2">
              <div>
                <img
                  src="https://www.manigrambishrambatika.com/template/web/img/testi-qoute-1.png"
                  alt=""
                />
                <p className="review mt-2 text-justify text-sm sm:text-base md:text-pretty">
                  Himalayan Flavours is a great place to enjoy authentic
                  Nepalese cuisine. The food is delicious and the service is
                  excellent. The staff is very friendly and welcoming. I highly
                  recommend this restaurant to anyone looking for a taste of
                  Nepal.
                </p>
                <div className="mt-6 flex items-center justify-between gap-12">
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src="https://www.manigrambishrambatika.com/images/testimonial/00LYd-expedia-(1).png"
                      alt=""
                      className="size-12 rounded-full object-contain"
                    />
                    <div className="space-y-0">
                      <p className="caps text-base font-bold">Purna Shrestha</p>
                      <p className="text-xs">via Tripadvisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OffersReview;
