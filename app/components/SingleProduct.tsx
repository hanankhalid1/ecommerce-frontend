"use client"
import React from 'react';
import BestSellers from './shopCartLikes'
import ShopCartSwiper from '../components/ShopCartSwiper'
import ImageMagnifier from './ImageZoom'
import Image from 'next/image';
import { useState } from 'react';
import { useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { IoIosArrowForward } from "react-icons/io";
import Description from '../components/description';
import Vendors from '../components/Vendors';
import Specification from '../components/Specification';
import { FaFacebookSquare, FaSquare } from "react-icons/fa";
import Additonal from '../components/Additional';
import { FaPlus } from "react-icons/fa";
import { useEffect } from 'react';
import { FaMinus } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Navbar from './Navbar';
import Navigation from './Navigation';
import FeatureList from './FeatureList';
import NewsLetterSection from './NewsLetterSection';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import SingleProductSection1 from './SingleProductSection1';
import SingleProductSection2 from './SingleProductSection2';
import SingleProductSection3 from './SingleProductSection3';
import BestSeller from './BestSeller';
import ShopCartLikes from './shopCartLikes';

const navigationItems = [
  { label: 'Home', href: '#' },
  { label: 'Electronics', href: '#' },
  { label: 'Cell Phone', href: '#' },
  { label: 'Accessories', href: '#' },
];

const ProductSection = () => {

  const [count, setcount] = useState(0)


  const hadelminus = () => {

    count <= 0 ? count : setcount(count - 1)
  }
  const hadeladd = () => {

    setcount(count + 1)
  }
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


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % thumbnails.length;
        setMain(thumbnails[nextIndex].src);
        return nextIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [thumbnails]);

  const handleThumbnailClick = (src: any) => {
    setMain(src);
    const newIndex = thumbnails.findIndex(thumb => thumb.src === src);
    setCurrentIndex(newIndex);
  };
  const sale = [
    { src: '/product/sp1.png', alt: 'Ecom 1' },
    { src: '/product/sp2.png', alt: 'Ecom 2' },
    { src: '/product/sp3.png', alt: 'Ecom 3' }
  ];


  return (
    <>
      <section className="w-full py-1">
        <TopBar />
        <Navbar />
        
        
       
      </section >
      <div className='ml-12'>
        <div className='border-b border-gray-300 my-14'>
          <h4 className="text-2xl font-bold text-[#425a8b]">Related Products</h4>
          <ShopCartLikes />
        </div>
        <div className='border-b border-gray-300 my-14 '>
          <h4 className="text-2xl font-bold text-[#425a8b]">You Also may like Products</h4>
          <ShopCartLikes />
        </div>
      
      </div>
    </>

  );
};

export default ProductSection;
