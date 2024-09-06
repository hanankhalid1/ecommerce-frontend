"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { navbarData } from "@/Data/navbarData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout) clearTimeout(leaveTimeout);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 500);
    setLeaveTimeout(timeout);
  };

  const toggleSubMenu = (index: number) => {
    setSubMenuOpen(subMenuOpen === index ? null : index);
  };

  useEffect(() => {
    return () => {
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, [leaveTimeout]);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={navbarData.logo.link}>
              <Image
                alt={navbarData.logo.alt}
                src={navbarData.logo.src}
                width={80}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex-grow max-w-xs sm:max-w-sm hidden custom-lg:flex">
            <div className="flex items-center rounded-md border-2 border-gray-200 overflow-hidden">
              <select className="bg-white px-2 py-1 rounded-l-md appearance-none focus:outline-none text-[#425A8B]">
                {navbarData.categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <span className="px-2 py-1 bg-white flex items-center">
                <IoMdArrowDropdown className="text-[#425A8B]" />
              </span>
              <span className="h-6 w-[2px] bg-gray-400 mx-1" />
              <input
                className="px-2 py-1 w-full focus:outline-none text-[#425A8B]"
                type="text"
                placeholder="Search for items"
              />
            </div>
          </div>

          {/* Desktop Navigation and Icons */}
          <div className="hidden custom-lg:flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                {navbarData.mainMenu.map((menuItem, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={menuItem.link}
                      className="flex items-center text-[#425A8B] hover:text-blue-600"
                    >
                      {menuItem.title}
                      {menuItem.subMenu && (
                        <IoMdArrowDropdown className="ml-1 text-[#425A8B]" />
                      )}
                    </Link>
                    {menuItem.subMenu && (
                      <ul
                        className={`absolute left-0 mt-6 w-48 bg-white shadow-lg border border-gray-200 ${
                          hoveredItem === index ? "block" : "hidden"
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-100 text-sm" // Adjust font size here
                          >
                            <Link
                              href={subMenuItem.link}
                              className="text-[#425A8B] hover:text-blue-600 text-sm" // Adjust font size here
                            >
                              {subMenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4 items-center">
              <Link
                href="/account"
                className="flex items-center text-[#425A8B] hover:text-blue-600"
              >
                <Image
                  src="/assets/imgs/template/account.svg"
                  alt="Account"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="/shop-wishlist"
                className="relative flex items-center text-[#425A8B] hover:text-blue-600"
              >
                <Image
                  src="/assets/imgs/template/icons/wishlist.svg"
                  alt="Wishlist"
                  width={24}
                  height={24}
                />
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </div>
              </Link>
              <Link
                href="/shop-cart"
                className="relative flex items-center text-[#425A8B] hover:text-blue-600"
              >
                <Image
                  src="/assets/imgs/template/cart.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                />
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </div>
              </Link>
              <Link
                href="/another-page"
                className="flex items-center text-[#425A8B] hover:text-blue-600"
              >
                <Image
                  src="/assets/imgs/template/icons/compare.svg"
                  alt="Compare"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button and Icons */}
          <div className="custom-lg:hidden flex items-center space-x-4">
            <Link
              href="/account"
              className="flex items-center text-[#425A8B] hover:text-blue-600"
            >
              <Image
                src="/assets/imgs/template/account.svg"
                alt="Account"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="/shop-wishlist"
              className="relative flex items-center text-[#425A8B] hover:text-blue-600"
            >
              <Image
                src="/assets/imgs/template/icons/wishlist.svg"
                alt="Wishlist"
                width={24}
                height={24}
              />
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </div>
            </Link>
            <Link
              href="/shop-cart"
              className="relative flex items-center text-[#425A8B] hover:text-blue-600"
            >
              <Image
                src="/assets/imgs/template/cart.svg"
                alt="Cart"
                width={24}
                height={24}
              />
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </div>
            </Link>
            <Link
              href="/another-page"
              className="flex items-center text-[#425A8B] hover:text-blue-600"
            >
              <Image
                src="/assets/imgs/template/icons/compare.svg"
                alt="Compare"
                width={24}
                height={24}
              />
            </Link>
            <button
              className="flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <IoClose className="text-[#425A8B] w-6 h-6" />
              ) : (
                <IoMenuSharp className="text-[#425A8B] w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="custom-lg:hidden mt-4">
            <ul className="space-y-4">
              {navbarData.mainMenu.map((menuItem, index) => (
                <li key={index} className="relative group">
                  <div className="flex items-center justify-between">
                    <Link
                      href={menuItem.link}
                      className="flex items-center text-[#425A8B] hover:text-blue-600 text-sm"
                    >
                      {menuItem.title}
                    </Link>
                    {menuItem.subMenu && (
                      <button
                        onClick={() => toggleSubMenu(index)}
                        className="text-[#425A8B] text-sm"
                      >
                        <IoMdArrowDropdown />
                      </button>
                    )}
                  </div>
                  {menuItem.subMenu && (
                    <ul
                      className={`mt-2 space-y-2 ${subMenuOpen === index ? "block" : "hidden"}`}
                    >
                      {menuItem.subMenu.map((subMenuItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <Link
                            href={subMenuItem.link}
                            className="text-[#425A8B] hover:text-blue-600 text-sm"
                          >
                            {subMenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
