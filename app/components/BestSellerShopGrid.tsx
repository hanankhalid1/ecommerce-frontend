"use client";
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Swipe1 from './Swipe1BestSeller';
import Swipe2 from './Swipe2BestSeller';

function BestSllerShopGrid() {
    const slides = [<Swipe1 key="1" />, <Swipe2 key="2" />];
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className='flex flex-row mt-12'>
            <div className='w-full'>
                <div className=''>
                    <div className='flex justify-between items-center mb-3 border-b-2 border-gray-300'>
                        <h3 className="text-[#42528b] text-2xl font-bold">Best Sellers</h3>
                        <div className='flex items-center'>
                            <button className='mr-2' onClick={prevSlide}>
                                <IoIosArrowBack className="text-[#8c9ec5]" />
                            </button>
                            <button onClick={nextSlide}>
                                <IoIosArrowForward className="text-[#8c9ec5]" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex overflow-hidden'>
                    <div
                        className='carousel-track'
                        style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.concat(slides).map((slide, index) => (
                            <div key={index} className='w-full flex-shrink-0'>
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSllerShopGrid;
