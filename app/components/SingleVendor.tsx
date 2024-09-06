import React from 'react';
import Topbar from './TopBar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Footer1 from './Footer1';
import FeatureList from './FeatureList';
import Image from 'next/image';
import ModalFilters from './ModalFilters';
import ShopgridItemsListing from './ShopgridItemsListing';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Footer2 from './Footer2';
import NewsLetterSection from './NewsLetterSection';
const paginationItems = [
  { type: 'icon', component: <IoIosArrowBack />, label: 'Previous' },
  { type: 'number', label: '1' },
  { type: 'number', label: '2' },
  { type: 'number', label: '3' },
  { type: 'number', label: '4' },
  { type: 'number', label: '5' },
  { type: 'number', label: '6' },
  { type: 'icon', component: <IoIosArrowForward />, label: 'Next' },
];


type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
const quantityOptions = [
  { id: '30', label: '30 items' },
  { id: '50', label: '50 items' },
  { id: '100', label: '100 items' },
];

const fastfox = "/assets/imgs/page/vendor/fasfox.png"

const features: Feature[] = [
  {
    id: 1,
    icon: '/assets/imgs/template/delivery.svg',
    title: 'Free Delivery',
    description: 'From all orders over $10',
  },
  {
    id: 2,
    icon: '/assets/imgs/template/support.svg',
    title: 'Support 24/7',
    description: 'Shop with an expert',
  },

  {
    id: 4,
    icon: '/assets/imgs/template/return.svg',
    title: 'Return & Refund',
    description: 'Free return over $200',
  },
  {
    id: 5,
    icon: '/assets/imgs/template/secure.svg',
    title: 'Secure payment',
    description: '100% Protected',
  },
];

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Ecom JSC", href: "#" },
];

const stars = Array(5).fill('assets/imgs/template/icons/star.svg'); // Adjust the path to your star icon

const VendorSection = () => {
  return (
    <section>
      <div className="w-full flex px-6 my-12 gap-4">
        {/* Main Section (4/5) */}
        <div className="w-4/5 flex flex-col">
          {/* Image Section */}
          <div className="banner-vendor">
            <img src="assets/imgs/page/vendor/featured.png" alt="Ecom" className="w-full" />
          </div>
          {/* Content Section */}
          <div className=" flex box-info-vendor  items-center justify-center gap-4 mx-13">
            <div className=" mx-4  rounded-md relative top-[-45%] w-1/4 bg-white border border-l-gray-300 p-6   flex flex-col  justify-center items-center">
              <div className='flex justify-center items-center mb-4'>
                <Image
                  src={fastfox}
                  alt='fastfox'
                  width={120}
                  height={120}
                />
              </div>
              <div className='flex justify-start items-start mt-4'>
                <button className="bg-[#425a8b] text-center inline-flex p-1 mx-12 rounded-lg text-xs text-white mb-4 hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
                  360 Products
                </button>
              </div>
            </div>

            <div className="w-[30%] flex flex-col">
              <h4 className="text-[#425a8b] font-semibold text-lg">Fasfox Corporation</h4>
              <div className="flex space-x-2 items-center mt-2">
                <span className="text-[10px] text-[#8c9ec5]">Member since 2012</span>
                <div className='flex items-center'>
                  {stars.map((src, index) => (
                    <img key={index} src={src} alt="Ecom" className='w-3 h-3' />
                  ))}
                  <span className="text-xs text-[#8c9ec5]"> (65)</span>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="w-[58%] text-md text-gray-500 flex items-center space-x-2">
              <span><CiLocationOn className='text-[#425a8b] text-2xl' /></span>
              <h1 className='text-[#8c9ec5] text-md'>
                5171 W Campbell Ave, Kent, Utah 53127, United States
              </h1>
            </div>

            {/* Phone Section */}
            <div className="w-[41%] text-md text-gray-500 flex items-center space-x-2">
              <span><BsTelephone className='text-[#425a8b] text-2xl' /></span>
              <div className='text-[#8c9ec5] text-md'>
                (+91) - 540-025-124553<br />
                (+91) - 540-025-235688
              </div>
            </div>
          </div>

        </div>
        {/* Right Section (1/5) */}
        <div className="w-1/5">
          <section className=" lg: lg:">
            <div className="container mx-auto">
              <ul className="flex flex-col space-y-4">
                {features.map((feature) => (
                  <li key={feature.id} className="flex items-center border border-gray-200 py-3 px-4 hover:border-[#425A8B] hover:bg-blue-100 rounded-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mr-3">
                        <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-[#425A8B]">{feature.title}</h5>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div className='mx-2'>
          <ModalFilters />
        </div>
        <div className='mx-4'>
          <ShopgridItemsListing columns={5} />
          <div className=" my-6 flex items-center ml-3">
            <ul className="flex items-center  space-x-1 ">
              {paginationItems.map((item, index) => (
                <li key={index} >
                  {item.type === 'icon' ? (
                    <span>{item.component}</span>
                  ) : (
                    <span className="border border-gray-300 text-[#425a8b] px-3 py-2 font-bold active:bg-[#fd9636] active:text-white rounded-md">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navigation items={navigationItems} />
          <VendorSection />
          <FeatureList />
          <NewsLetterSection />
          <Footer1 />
          <Footer2 />

        </div>
      </div>
    </>
  );
}
export default Page;
