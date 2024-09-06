"use client"
import React, { useMemo, useState } from 'react'
import Description from './description';
import Vendors from './Vendors';
import Specification from './Specification';
import Additonal from './Additional';

function SingleProductSection3() {
    const thumbnails = useMemo(
        () => [
          { src: '/slider/img-gallery-1.jpg', alt: 'Thumbnail 1' },
          { src: '/slider/img-gallery-2.jpg', alt: 'Thumbnail 2' },
          { src: '/slider/img-gallery-3.jpg', alt: 'Thumbnail 3' },
          { src: '/slider/img-gallery-4.jpg', alt: 'Thumbnail 4' },
          { src: '/slider/img-gallery-5.jpg', alt: 'Thumbnail 5' },
          { src: '/slider/img-gallery-6.jpg', alt: 'Thumbnail 6' },
          { src: '/slider/img-gallery-7.jpg', alt: 'Thumbnail 7' },
        ],
        []
      );
    const [activeSection, setActiveSection] = useState('description');
  const [main, setMain] = useState(thumbnails[2].src);
  const [currentIndex, setCurrentIndex] = useState(thumbnails.findIndex(thumb => thumb.src === main));

  return (
    <div> <div className="flex space-x-10 px-14">
    <div className="">
      <button
        onClick={() => setActiveSection('description')}
        className={`px-4 py-2 ${activeSection === 'description' ? 'text-2xl font-bold cursor-pointer text-[#425A8B]' : 'text-2xl font-bold cursor-pointer text-[#8c9ec5]'}`}
      >
        Description
      </button>
      <button
        onClick={() => setActiveSection('vendors')}
        className={`px-4 py-2 ${activeSection === 'vendors' ? 'text-2xl font-bold cursor-pointer text-[#425A8B]' : 'text-2xl font-bold cursor-pointer text-[#8c9ec5]'}`}
      >
        Vendors
      </button>
      <button
        onClick={() => setActiveSection('specification')}
        className={`px-4 py-2 ${activeSection === 'specification' ? 'text-2xl font-bold cursor-pointer text-[#425A8B]' : 'text-2xl font-bold cursor-pointer text-[#8c9ec5]'}`}
      >
        Specification
      </button>
      <button
        onClick={() => setActiveSection('additional')}
        className={`px-4 py-2 ${activeSection === 'additional' ? 'text-2xl font-bold cursor-pointer text-[#425A8B]' : ''}text-2xl font-bold cursor-pointer text-[#8c9ec5]`}
      >
        Additional
      </button>
    </div>
  </div>
  <div className="mt-6">
    {activeSection === 'description' && <Description />}
    {activeSection === 'vendors' && <Vendors />}
    {activeSection === 'specification' && <Specification />}
    {activeSection === 'additional' && <Additonal />}
  </div></div>
  )
}

export default SingleProductSection3