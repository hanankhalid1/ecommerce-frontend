"use client";
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SwiperProducts from './SwiperProducts';
import SwiperProducts2 from './SwiperProducts2';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  <SwiperProducts key="swiper-products-1" />,
  <SwiperProducts2 key="swiper-products-2" />,
];

function TopProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slideIntervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    slideIntervalRef.current = window.setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [totalSlides]);

  return (
    <div className="w-full flex flex-col lg:flex-row lg:pr-12">
      {/* Product Section */}
      <div className="w-full sm:p-1 lg:w-3/4 p-4 lg:p-6">
        <div className=" border-1 border-gray-300 rounded-md p-4  ">
          <div className="w-full flex justify-between items-center">
            <div className='  border-gray-300'>
              <h3 className="sm:text-xs md:text-3xl font-extrabold text-[#42528b] mt-4 mb-2 sm:mt-6 sm:mb-4 md:mt-8 md:mb-4 lg:mt-10 lg:mb-6">
                Top Selling Products
              </h3>
              <p className="sm:text-base text-[#8c9ec5]">
                Special products this month.
              </p>
            </div>
            <div className=" sm:hidden md:flex mt-12 space-x-2 hidden lg:flex p-4">
              <button
                className="border border-[#42528b] rounded-md p-2"
                onClick={prevSlide}
              >
                <IoIosArrowBack className="text-[#42528b]" />
              </button>
              <button
                className="border border-[#42528b] rounded-md p-2"
                onClick={nextSlide}
              >
                <IoIosArrowForward className="text-[#42528b]" />
              </button>
            </div>
          </div>
        </div>
        <div className="transition-transform duration-500 ease-in-out">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/4 h-[500px] lg:h-auto flex flex-col justify-start lg:justify-start bg-topsell rounded py-4 lg:py-[50px] px-4 lg:px-[10px]">
        <div className="banner-right text-center flex flex-col justify-start lg:justify-start items-center space-y-4 lg:space-y-4 mt-4 lg:mt-0">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-white bg-sky-400 rounded-lg">
            No.9
          </span>
          <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide text-[#0EE224D] font-extrabold">
            Sensitive Touch <br className="hidden md:block" /> without fingerprint
          </h5>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#42528b] tracking-widest">
            Smooth handle and accurate click
          </p>
        </div>
      </div>



    </div >

  );
}

export default TopProducts;
