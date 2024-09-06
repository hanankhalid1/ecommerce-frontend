// components/FeaturedCategories.tsx

import React from 'react';
import Image from 'next/image';

const FeaturedCategories: React.FC = () => {
  const brands = [
    { src: '/assets/imgs/slider/logo/acer.svg', alt: 'Acer', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/nokia.svg', alt: 'Nokia', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/assus.svg', alt: 'Assus', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/casio.svg', alt: 'Casio', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/dell.svg', alt: 'Dell', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/panasonic.svg', alt: 'Panasonic', href: '/shop-grid' },
    { src: '/assets/imgs/slider/logo/vaio.svg', alt: 'Vaio', href: '/shop-grid' },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
        <div className="mb-6 lg:mb-0">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#425A8B]">Featured Categories</h3>
          <p className="text-sm lg:text-base text-[#425A8B]">
            Choose your necessary products from these featured categories.
          </p>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <div className="w-full lg:w-[600px] border border-[#D5DFE4] items-center flex justify-center rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center ${index >= 3 ? 'hidden sm:block' : ''} ${index >= 3 ? 'hidden md:block' : ''}`}
                >
                  <a href={brand.href} className="block text-center">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={70}
                      height={40}
                      className="object-contain opacity-30 hover:opacity-100"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
