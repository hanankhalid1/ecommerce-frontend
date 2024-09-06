// components/SmallCard.js
import React from 'react';
import Image from 'next/image';
import { FaCaretRight } from "react-icons/fa";

const SmallCard = ({ imageSrc, altText, category, links } : any) => {
  return (
    <div className="relative border border-gray-300 p-4 flex flex-col justify-between h-full rounded-lg transition-all duration-200 hover:border-blue-300">
      <div className="flex flex-row items-start mb-4">
        <div className="flex-shrink-0">
          <Image src={imageSrc} alt={altText} width={100} height={100} className="rounded-lg" />
        </div>
        <div className="flex flex-col flex-grow">
          <div className="text-left font-bold text-base mb-2" style={{ color: '#425A8B' }}>
            {category}
          </div>
          <div className="text-[#425A8B] text-sm mr-6">
            {links.map((link : any, index : any) => (
              <div key={index} className="flex items-center mb-2">
                <FaCaretRight className="text-[#6B83B6] mr-2" />
                <span className="font-light text-[#6B83B6]">{link}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <button className="bg-blue-100 text-blue-700 py-1 px-3 text-sm rounded-s-lg">View all</button>
      </div>
    </div>
  );
};

export default SmallCard;
