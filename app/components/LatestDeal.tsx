"use client";

import React, { useState } from "react";
import Countdown from "react-countdown";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./prodcutCard";

const HeartIcon = () => (
  <img
    src="assets/imgs/template/icons/wishlist.svg"
    alt="Heart"
    className="w-6 h-6"
  />
);
const CompareIcon = () => (
  <img
    src="assets/imgs/template/icons/compare.svg"
    alt="Compare"
    className="w-6 h-6"
  />
);
const QuickViewIcon = () => (
  <img
    src="assets/imgs/template/icons/view.svg"
    alt="Quick View"
    className="w-6 h-6"
  />
);
const TrendIcon = () => (
  <img
    src="assets/imgs/template/icons/trend.svg"
    alt="Trend"
    className="w-6 h-6"
  />
);

const products = [
  {
    id: 1,
    category: "all",
    brand: "Apple",
    name: "2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB",
    price: 2856.3,
    originalPrice: 3225.6,
    rating: 5,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp3.png",
    features: [
      "27-inch (diagonal) display",
    ],
  },
  {
    id: 2,
    category: "bestseller",
    brand: "Philips",
    name: "Philips H4205 On-Ear Wireless Headphones with 32mm",
    price: 154.3,
    originalPrice: 162.5,
    rating: 4,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp4.png",
    features: [
      "32mm drivers",
    ],
  },
  {
    id: 3,
    category: "mostviewed",
    brand: "Apple",
    name: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13 premium"',
    price: 2325.3,
    originalPrice: 2225.6,
    rating: 5,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp5.png",
    features: [
      "13.3-inch Retina display",
    ],
  },
  {
    id: 4,
    category: "mostviewed",
    brand: "Apple",
    name: "Apple Watch Series 8 [GPS 45mm] premium Smart Watch",
    price: 530.3,
    originalPrice: 560.6,
    rating: 5,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp6.png",
    features: [
      "45mm case",
    ],
  },
  {
    id: 5,
    category: "topbrands",
    brand: "Kami Tech",
    name: "Kami by YI 4pc 1080p Home Security Cameras",
    price: 156.3,
    originalPrice: 250.6,
    rating: 4,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp7.png",
    features: [
      "1080p HD resolution",
    ],
  },
  {
    id: 6,
    category: "bestseller",
    brand: "Philips",
    name: "Philips H4205 On-Ear Wireless Headphones with 32mm",
    price: 154.3,
    originalPrice: 162.5,
    rating: 4,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp4.png",
    features: [
      "32mm drivers",
    ],
  },
  // Add more product objects here as needed
];

const LatestDeal = () => {
  const [shuffledProducts, setShuffledProducts] = useState(products);

  const countdownDate = new Date("2023/08/25 00:00:00").getTime();

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="flex space-x-1">
      <div className="bg-[#FD9636] text-white p-2 rounded">
        <span className="block text-center text-sm">
          {String(days).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#425A8B]">:</span>
      <div className="bg-[#FD9636] text-white p-2 rounded">
        <span className="block text-center text-sm">
          {String(hours).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#425A8B]">:</span>
      <div className="bg-[#FD9636] text-white p-2 rounded">
        <span className="block text-center text-sm">
          {String(minutes).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#425A8B]">:</span>
      <div className="bg-[#FD9636] text-white p-2 rounded">
        <span className="block text-center text-sm">
          {String(seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );

  return (
    <section className="pt-12 lg:mr-10 my-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#425A8B]">Latest Deals</h2>
        <div className="flex flex-col lg:flex-row lg:justify-between text-[#425A8B] items-center mb-2">
          <p className="text-[#425A8B] lg:text-left text-center">
            Special products in this month.
          </p>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="text-center lg:text-right">
              <span className="font-bold text-gray-900 text-md">Hurry up!</span>
              <br />
              <span className="text-xs text-gray-500">Offers end in:</span>
            </div>
            <Countdown date={countdownDate} renderer={renderer} />
            <a
              className="flex items-center text-[#425A8B] font-semibold hover:text-[#FD9636]"
              href="shop-single-product.html"
            >
              View All <FaArrowRight className="ml-1" />
            </a>
          </div>
        </div>
        <hr className="border-gray-300 lg:mb-10 lg:mt-2" />
        <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/3">
            <ProductCard />
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-3">
            {shuffledProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-lg shadow-md p-2 relative group flex flex-col hover:border-[#425A8B]"
              >
                <div className="flex-grow">
                  <div className="relative">
                    <span className="bg-[#FD9636] text-white px-1 py-0 rounded-xl absolute left-1 top-0">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                    <a href="#">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full"
                      />
                    </a>
                  </div>
                  <div className="mt-4">
                    <a className="text-xs text-[#425A8B] block" href="#">
                      {product.brand}
                    </a>
                    <a
                      className="text-xs text-[#425A8B] font-bold block"
                      href="#"
                    >
                      {product.name}
                    </a>
                    <div className="flex items-center my-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-yellow-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 .293l1.47 2.97 3.28.477-2.378 2.309.561 3.263L8 8.549l-2.944 1.548.561-3.263L3.44 3.74l3.28-.477L8 .293z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        {product.reviews} reviews
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#425A8B]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-5 items-center flex justify-center">
                      <a
                        className="bg-white text-[#425A8B] py-1 px-12 rounded border border-[#425A8B] hover:bg-[#425A8B] hover:text-white"
                        href="#"
                      >
                        Add to cart
                      </a>
                    </div>
                    <div className="mt-3">
                      <ul className="list-disc pl-4">
                        {product.features.map((feature: string, index: number) => (
                          <li key={index} className="text-[#425A8B] text-xs">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-8 flex flex-col space-y-1 p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 rounded-full bg-white shadow">
                    <HeartIcon />
                  </button>
                  <button className="p-1 rounded-full bg-white shadow">
                    <CompareIcon />
                  </button>
                  <button className="p-1 rounded-full bg-white shadow">
                    <QuickViewIcon />
                  </button>
                  <button className="p-1 rounded-full bg-white shadow">
                    <TrendIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full space-y-4 mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 px-3">
    {shuffledProducts.slice(0, 5).map((product) => (
      <div
        key={product.id}
        className="border border-gray-300 rounded-lg shadow-md p-2 relative group flex flex-col hover:border-[#425A8B] transition-all"
      >
        <div className="relative flex-grow">
          <span className="bg-[#FD9636] text-white px-1 py-0 rounded-xl absolute left-1 top-0">
            {Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            )}
            %
          </span>
          <a href="#">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-contain rounded-t-lg"
            />
          </a>
        </div>
        <div className="mt-4">
          <a className="text-xs text-[#425A8B] block" href="#">
            {product.brand}
          </a>
          <a className="text-xs text-[#425A8B] font-bold block" href="#">
            {product.name}
          </a>
          <div className="flex items-center my-1">
            {[...Array(product.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-yellow-500"
                viewBox="0 0 16 16"
              >
                <path d="M8 .293l1.47 2.97 3.28.477-2.378 2.309.561 3.263L8 8.549l-2.944 1.548.561-3.263L3.44 3.74l3.28-.477L8 .293z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {product.reviews} reviews
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#425A8B]">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="mt-5 flex justify-center">
            <a
              className="bg-white text-[#425A8B] py-1 px-4 rounded border border-[#425A8B] hover:bg-[#425A8B] hover:text-white transition-all"
              href="#"
            >
              Add to cart
            </a>
          </div>
          <div className="mt-3">
            <ul className="list-disc pl-4 space-y-1">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="text-[#425A8B] text-xs">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute right-0 top-8 flex flex-col space-y-1 p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1 rounded-full bg-white shadow">
            <HeartIcon />
          </button>
          <button className="p-1 rounded-full bg-white shadow">
            <CompareIcon />
          </button>
          <button className="p-1 rounded-full bg-white shadow">
            <QuickViewIcon />
          </button>
          <button className="p-1 rounded-full bg-white shadow">
            <TrendIcon />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default LatestDeal;
