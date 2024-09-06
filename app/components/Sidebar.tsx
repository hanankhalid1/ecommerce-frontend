'use client'
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarData, SidebarItem } from '@/Data/menuData'; // Adjust path as needed

const Sidebar: FC = () => {
  const [hoveredItem, setHoveredItem] = useState<SidebarItem | null>(null);
  const [isDetailsHovered, setIsDetailsHovered] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<SidebarItem | null>(null);

  const handleMouseEnterSidebar = (item: SidebarItem) => {
    if (!isButtonClicked) {
      setHoveredItem(item);
    }
  };

  const handleMouseLeaveSidebar = () => {
    if (!isDetailsHovered) {
      setHoveredItem(null);
    }
  };

  const handleMouseEnterDetails = () => {
    setIsDetailsHovered(true);
  };

  const handleMouseLeaveDetails = () => {
    setIsDetailsHovered(false);
    if (!hoveredItem) {
      setHoveredItem(null);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    setActiveItem(null); // Reset active item when button is clicked
  };

  const handleArrowClick = (item: SidebarItem) => {
    setActiveItem(item);
  };

  return (
    <div className="relative flex h-screen">
      {/* Original Sidebar */}
      <div className="w-16 bg-white border-r border-t border-gray-300 flex flex-col items-center pt-8 h-full relative z-10 hidden md:flex">
        <button
          className="mb-4"
          onClick={handleButtonClick}
        >
          <Image
            src='/assets/imgs/template/open.svg'
            alt="Button Icon"
            width={24}
            height={24}
          />
        </button>
        {sidebarData.map((item: SidebarItem) => (
          <div
            key={item.id}
            className="relative mb-8 flex items-center group transition-all duration-200"
            onMouseEnter={() => handleMouseEnterSidebar(item)}
            onMouseLeave={handleMouseLeaveSidebar}
          >
            <Link href={item.href} className="flex items-center group-hover:border-r-2 group-hover:border-blue-500 px-5">
              <Image
                src={item.src}
                alt={item.alt}
                width={24}
                height={24}
                className="transition-all duration-200"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* New Sidebar */}
      {isButtonClicked && (
        <div
          className="w-48 bg-white border-r border-t border-gray-300 flex flex-col items-start pt-8 h-full fixed top-0 right-0 z-20 md:hidden"
          style={{ marginTop: '80px' }} // Adjust if necessary
        >
          {sidebarData.map((item: SidebarItem) => (
            <div key={item.id} className="flex items-center justify-between w-full px-4 py-2">
              <span className="text-blue-900">{item.alt}</span>
              <button
                className="ml-2 text-blue-500 hover:text-blue-900"
                onClick={() => handleArrowClick(item)}
              >
                ▸
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Details Overlay */}
      {(hoveredItem || activeItem) && (
        <div
          className="p-12 bg-white border transition-all duration-200 fixed left-16 z-30 md:hidden"
          style={{ top: '115px', width: '300px' }} // Adjust top for increased margin
          onMouseEnter={handleMouseEnterDetails}
          onMouseLeave={handleMouseLeaveDetails}
        >
          <h3 className="text-xl font-semibold text-blue-900">{(activeItem || hoveredItem)?.alt}</h3>
          <ul className="text-blue-900">
            {(activeItem || hoveredItem)?.details.map((detail, index) => (
              <li key={index} className="py-4 hover:underline hover:text-blue-900">
                <Link href='#'>
                  {detail}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
