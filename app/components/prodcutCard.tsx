"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ProductCard = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const slides = [
    "/assets/imgs/page/homepage1/screen.png",
    "/assets/imgs/page/homepage1/screen-2.png",
    "/assets/imgs/page/homepage1/screen-3.png",
  ];

  return (
    <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4 md:p-6 border rounded-lg shadow-lg bg-white hover:border-[#425A8B] px-2">
      <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-600 text-white px-2 md:px-4 py-1 text-xs md:text-sm font-bold rounded-sm z-10">
        Hurry Up!
      </div>
      <div className="mb-2 md:mb-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={600}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-2 md:mt-4">
        <div className="flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                (swiperRef.current as any)?.swiper.slideTo(index)
              }
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mx-1 md:mx-2 ${
                index === currentSlideIndex
                  ? "bg-[#FD9636]"
                  : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-2 md:mt-4 mb-2 w-full">
        <h4 className="text-[#425A8B] text-xl md:text-2xl font-bold">Special Offer</h4>
        <p className="text-[#425A8B] text-sm md:text-base">Remains until the end of the offer</p>
      </div>
      <div className="flex space-x-1 justify-center mb-2 md:mb-4 border-b border-gray-300 pb-2 md:pb-4">
        <div className="bg-[#FD9636] text-white p-1 md:p-2 rounded">
          <span className="block text-center text-xs md:text-sm">00</span>
        </div>
        <span className="text-[#425A8B] text-xs md:text-sm">:</span>
        <div className="bg-[#FD9636] text-white p-1 md:p-2 rounded">
          <span className="block text-center text-xs md:text-sm">00</span>
        </div>
        <span className="text-[#425A8B] text-xs md:text-sm">:</span>
        <div className="bg-[#FD9636] text-white p-1 md:p-2 rounded">
          <span className="block text-center text-xs md:text-sm">00</span>
        </div>
        <span className="text-[#425A8B] text-xs md:text-sm">:</span>
        <div className="bg-[#FD9636] text-white p-1 md:p-2 rounded">
          <span className="block text-center text-xs md:text-sm">00</span>
        </div>
      </div>
      <div className="text-left mb-2 md:mb-4 pb-2 md:pb-4">
        <span className="block text-xs md:text-sm text-gray-500">Apple</span>
        <h5 className="text-base md:text-lg font-bold text-[#425A8B]">
          2022 Apple iMac Retina 5K Display
        </h5>
        <div className="flex justify-center items-center mt-2 mb-2 md:mb-4">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/assets/imgs/template/icons/star.svg"
              alt="star"
              width={16}
              height={16}
            />
          ))}
          <span className="text-xs md:text-sm text-[#425A8B] ml-2">(65)</span>
        </div>
        <div className="flex justify-center items-baseline">
          <span className="text-xl md:text-2xl font-bold text-[#425A8B]">$2856.3</span>
          <span className="text-xs md:text-sm text-gray-500 line-through ml-2">
            $3225.6
          </span>
        </div>
      </div>
      <div className="mb-2 md:mb-4 border-b border-gray-300 pb-2 md:pb-4">
      <div className="relative w-full mt-1 md:mt-2">
  <input
    type="range"
    className="w-full h-2 bg-gray-200 rounded-full appearance-none focus:outline-none"
    style={{
      background: `linear-gradient(to right, #FD9636 52%, #e5e7eb 52%)`,
    }}
  />
  <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      background-color: #FD9636;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      top: -1px;
    }
    input[type='range']::-moz-range-thumb {
      width: 15px;
      height: 15px;
      background-color: #FD9636;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-ms-thumb {
      width: 15px;
      height: 15px;
      background-color: #FD9636;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
</div>

        <div className="mt-1 md:mt-2 flex justify-between text-xs md:text-sm text-gray-500">
          <span>
            Available: <span className="font-bold text-[#425A8B]">568</span>
          </span>
          <span>
            Sold: <span className="font-bold text-[#425A8B]">289</span>
          </span>
        </div>
      </div>
      <div>
        <ul className="list-none text-xs md:text-sm text-[#425A8B] space-y-1">
          <li className="ml-3 list-disc">27-inch (diagonal) Retina 5K display</li>
          <li className="ml-3 list-disc">3.1GHz 6-core 10th-generation Intel Core i5</li>
          <li className="ml-3 list-disc">AMD Radeon Pro 5300 graphics</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
