import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

// Define a type for navigation items
type NavigationItem = {
  label: string;
  href: string;
};

type NavigationProps = {
  items: NavigationItem[];
};

function Navigation({ items }: NavigationProps) {
  return (
    <div className='w-full bg-[#f0f3f8] py-2'>
      <ul className='flex flex-wrap items-center text-[#8c9ec5] text-sm p-3 space-x-2'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center mb-1'>
            {index !== 0 && (
              <span className='mx-1'>
                <IoIosArrowForward className='text-xs md:text-sm' />
              </span>
            )}
            <a 
              href={item.href} 
              className='hover:text-sky-300 text-xs md:text-sm'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
