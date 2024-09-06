import Link from 'next/link';
import React from 'react';

const Footer2: React.FC = () => {
  const electronics = [
    { name: 'Cell Phones', href: '/shop-cell-phones' },
    { name: 'Headphones', href: '/shop-headphones' },
    { name: 'Television & Video', href: '/shop-television-video' },
    { name: 'Game Controller', href: '/shop-game-controller' },
    { name: 'Apple Watch', href: '/shop-apple-watch' },
    { name: 'HTC', href: '/shop-htc' },
    { name: 'iPad', href: '/shop-ipad' },
    { name: 'Keyboard', href: '/shop-keyboard' },
    { name: 'Samsung', href: '/shop-samsung' },
    { name: 'Wireless Speaker', href: '/shop-wireless-speaker' },
    { name: 'Samsung Galaxy', href: '/shop-samsung-galaxy' },
    { name: 'Gaming Mouse', href: '/shop-gaming-mouse' },
    { name: 'eBook Readers', href: '/shop-ebook-readers' },
    { name: 'Service Plans', href: '/shop-service-plans' },
    { name: 'Home Audio', href: '/shop-home-audio' },
    { name: 'Office Electronics', href: '/shop-office-electronics' },
    { name: 'Lenovo', href: '/shop-lenovo' },
    { name: 'MacBook Pro M1', href: '/shop-mackbook-pro-m1' },
    { name: 'HD Videos Player', href: '/shop-hd-videos-player' }
  ];

  const furniture = [
    { name: 'Sofa', href: '/shop-sofa' },
    { name: 'Chair', href: '/shop-chair' },
    { name: 'Dining Table', href: '/shop-dining-table' },
    { name: 'Living Room', href: '/shop-living-room' },
    { name: 'Table Lamp', href: '/shop-table-lamp' },
    { name: 'Night Stand', href: '/shop-night-stand' },
    { name: 'Computer Desk', href: '/shop-computer-desk' },
    { name: 'Bar Table', href: '/shop-bar-table' },
    { name: 'Pillow', href: '/shop-pillow' },
    { name: 'Radio', href: '/shop-radio' },
    { name: 'Clock', href: '/shop-clock' },
    { name: 'Bed Room', href: '/shop-bad-room' },
    { name: 'Stool', href: '/shop-stool' },
    { name: 'Television', href: '/shop-television' },
    { name: 'Wardrobe', href: '/shop-wardrobe' },
    { name: 'Living Room Tables', href: '/shop-living-room-tables' },
    { name: 'Dressers', href: '/shop-dressers' },
    { name: 'Patio Sofas', href: '/shop-patio-sofas' },
    { name: 'Nursery', href: '/shop-nursery' },
    { name: 'Kitchen', href: '/shop-kitchen' },
    { name: 'Accent Furniture', href: '/shop-accent-furniture' },
    { name: 'Replacement Parts', href: '/shop-replacement-parts' }
  ];

  const footerLinks = [
    { name: 'Conditions of Use', href: '/terms-of-use' },
    { name: 'Privacy Notice', href: '/privacy-notice' },
    { name: 'Interest-Based Ads', href: '/ads' },
  ];

  return (
    <div className="lg:px-7 py-8">
      <div className="footer-bottom-1">
        <div className="container">
          <div className="footer-2-top mb-20 w-2/3 flex items-center">
            <div>
              <Link href="/">
                <img alt="Ecom" src="assets/imgs/template/logo-2.svg" className='' />
              </Link>
            </div>
            <div className='text-xs lg:mt-4 ml-4 text-[#425A8B]'>
              <Link href="#" className="font-xs color-gray-1000 mx-2">EcomMarket.com</Link>
              <Link href="#" className="font-xs color-gray-1000 mx-2">Ecom Partners</Link>
              <Link href="#" className="font-xs color-gray-1000 mx-2">Ecom Business</Link>
              <Link href="#" className="font-xs color-gray-1000 mx-2">Ecom Factory</Link>
            </div>
          </div>
          <div className="footer-2-bottom  pb-4">
            <div className="flex items-start">
              <h6 className="color-gray-1000 text-[#0E224D] font-semibold">Electronic:</h6>
              <div className="tags-footer flex flex-wrap ml-4">
                {electronics.map(item => (
                  <Link key={item.name} href={item.href} className="text-sm text-[#425A8B] mr-1 px-1 mb-1 border-r border-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-2-bottom mt-4 border-b border-gray-300 pb-4 mb-8">
            <div className="flex items-start">
              <h6 className="color-gray-1000 text-[#0E224D] font-semibold">Furniture:</h6>
              <div className="tags-footer flex flex-wrap ml-4">
                {furniture.map(item => (
                  <Link key={item.name} href={item.href} className="text-sm text-[#425A8B] mr-1 mb-1 border-r px-1 border-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom mt-8">
          <div className="flex flex-col md:flex-row justify-between text-center text-[#425A8B]">
            <div className="text-center md:text-left">
              <span className="color-gray-900 font-sm">
                Copyright © 2022 Ecom Market. All rights reserved.
              </span>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0">
              <ul className="menu-bottom flex justify-center md:justify-end space-x-4">
                {footerLinks.map((link, index) => (
                  <li key={link.name} className={`flex items-center ${index < footerLinks.length - 1 ? 'pr-2' : ''}`}>
                    <Link href={link.href} className="font-sm color-gray-900">
                      {link.name}
                    </Link>
                    {index < footerLinks.length - 1 && (
                      <span className="h-6 mx-2" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
