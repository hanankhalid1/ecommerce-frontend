"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaFacebookSquare,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

type Thumbnail = {
  src: string;
  alt: string;
};

type ProductDetailsProps = {
  thumbnails: Thumbnail[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ thumbnails }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount((prevCount) => Math.min(prevCount + 1, 10));
  const handleMinus = () => setCount((prevCount) => Math.max(prevCount - 1, 1));

  const isDisabled = () => count >= 10;

  return (
    <div className="w-full p-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#425A8B] mb-4">
        Samsung Galaxy S22 Ultra, 8K Camera & Video, Brightest Display Screen, S
        Pen Pro
      </h3>
      <div className="flex flex-wrap items-center mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <span className="text-[#8c9ec5] text-sm font-medium">by</span>
          <a
            className="text-[#425A8B] text-sm font-medium"
            href="shop-vendor-single.html"
          >
            Ecom Tech
          </a>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                className="w-4 h-4"
                src="/template/icons/star.svg"
                alt="Star"
                width={16}
                height={16}
              />
            ))}
            <span className="text-[#8c9ec5] text-xs font-medium ml-2">
              (65 reviews)
            </span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-start sm:justify-end">
          <div className="flex items-center">
            <Image
              src="/icons/wishlist.svg"
              alt="wishlist"
              width={20}
              height={20}
              className="border-2 rounded-md cursor-pointer hover:fill-red-400"
            />
            <a
              className="mr-4 px-2 text-sm text-[#425A8B] hover:text-blue-500"
              href="shop-wishlist.html"
            >
              Add to Wishlist
            </a>
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/compare.svg"
              alt="compare"
              width={20}
              height={20}
              className="border-2 rounded-md cursor-pointer hover:fill-red"
            />
            <a
              className="text-sm text-[#425A8B] hover:text-blue-500"
              href="shop-compare.html"
            >
              Add to Compare
            </a>
          </div>
        </div>
      </div>
      <div className="border border-gray-200"></div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full">
          <div className="flex items-baseline mb-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#425A8B] mr-4">
              $2856.3
            </h3>
            <span className="text-lg sm:text-xl text-[#8c9ec5] line-through">
              $3225.6
            </span>
          </div>
          <div
            className="relative bg-brand-600 h-2"
            style={{ width: "50%" }}
          ></div>
          <span className="text-sm text-gray-500">Sold: 135/320</span>
        </div>
        <div className="w-full mt-4 flex flex-wrap">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-4 sm:mb-0">
            <ul className="list-disc list-inside text-[#425A8B]">
              <li>8k super steady video</li>
              <li>Nightography plus portrait mode</li>
              <li>50mp photo resolution plus bright display</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <ul className="list-disc list-inside text-[#425A8B]">
              <li>Adaptive color contrast</li>
              <li>Premium design & craftsmanship</li>
              <li>Long lasting battery plus fast charging</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-900">
          Color: <span className="text-[#fd9636]">Pink Gold</span>
        </p>
        <div className="flex space-x-2 sm:space-x-4 mt-2 overflow-x-auto">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                isDisabled() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className={`w-8 h-8 sm:w-10 sm:h-10 object-cover border border-[#DDE4F0] rounded-md ${
                  isDisabled() ? "cursor-not-allowed" : "cursor-pointer"
                } ${
                  isDisabled() ? "border-gray-300" : "hover:border-orange-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 sm:gap-8 mt-4">
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-900">
            Style: <span className="text-[#fd9639]">S22</span>
          </p>
          <ul className="flex flex-wrap gap-2 sm:gap-3 pt-3">
            <li
              className="border border-[#8C9EC5] p-1 text-sm rounded-md cursor-pointer opacity-50 text-center"
              title="S22 Ultra"
            >
              S22 Ultra
            </li>
            <li
              className="border border-[#fd9639] text-[#fd9639] p-1 text-sm rounded-md cursor-pointer text-center"
              title="S22"
            >
              S22
            </li>
            <li
              className="border border-[#8C9EC5] p-1 rounded-md text-xs cursor-pointer text-center"
              title="S22 + Standing Cover"
            >
              S22 + Standing Cover
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-900 mb-2">
            Size: <span className="text-[#fd9639]">128 GB</span>
          </p>
          <ul className="flex flex-wrap gap-2">
            <li
              className="border border-[#8C9EC5] p-1 text-sm rounded-md cursor-pointer opacity-50 text-center"
              title="1GB"
            >
              1GB
            </li>
            <li
              className="border border-[#fd9639] text-[#fd9639] p-1 rounded-md cursor-pointer text-center"
              title="512 GB"
            >
              512 GB
            </li>
            <li
              className="border border-[#8C9EC5] p-1 text-sm rounded-md cursor-pointer text-center"
              title="256 GB"
            >
              256 GB
            </li>
            <li
              className="border border-[#8C9EC5] p-1 rounded-md cursor-pointer text-center"
              title="128 GB"
            >
              128 GB
            </li>
            <li
              className="border border-[#8C9EC5] p-1 rounded-md cursor-pointer opacity-50 text-center"
              title="64GB"
            >
              64GB
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:mt-6">
  <p className="text-sm mb-2 text-[#425a8b]">Quantity</p>
  <div className="flex items-center space-x-4 sm:space-x-6">
    <div className="flex items-center space-x-2 border-b-4">
      <button
        className="p-2 text-gray-600 hover:text-gray-800"
        onClick={handleMinus}
      >
        <FaMinus />
      </button>
      <input
        type="text"
        value={count}
        className="w-8 sm:w-12 text-center text-lg sm:text-xl text-[#425a8b] focus:outline-none"
        readOnly
      />
      <button
        onClick={handleAdd}
        className={`p-2 ${
          isDisabled()
            ? "text-white opacity-50"
            : "text-[#425a8b] hover:text-gray-800"
        }`}
        disabled={isDisabled()}
      >
        <FaPlus />
      </button>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0">
      <button className="w-full sm:w-auto px-8 sm:px-12 py-1 text-[#425A8B] border border-[#425A8B] hover:bg-[#35426b] hover:text-white">
        <span>Buy Now</span>
      </button>
      <button className="w-full sm:w-auto px-8 sm:px-12 py-1 text-white bg-[#425A8B] hover:bg-white hover:text-[#425A8B]">
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>

      <div className="flex flex-wrap items-start justify-between gap-y-4 mt-8">
        <div className="w-full md:w-1/3">
          <p className="text-sm text-gray-500">
            <span className="text-[#425a8b] text-sm">Sku:</span> iphone12pro128
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-[#425a8b] text-sm">Category:</span>{" "}
            Smartphones
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-[#425a8b] text-sm">Tags:</span> Blue,
            Smartphone
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-sm text-gray-500">
            <span className="text-[#425a8b] text-sm">Availability:</span>{" "}
            Available for all locations.
          </p>
          <p className="text-sm text-gray-500">Delivery Options & Info</p>
        </div>
        <div className="w-full md:w-1/3 flex gap-2 mt-4 md:mt-9 items-baseline">
          <span className="text-[#425a8b] font-extrabold text-sm">Share:</span>
          <FaFacebookSquare className="text-[#425a8b] text-lg hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-[#425a8b] text-lg hover:text-blue-600 cursor-pointer" />
          <FaPinterest className="text-[#425a8b] text-lg hover:text-red-600 cursor-pointer" />
          <FaSquareInstagram className="text-[#425a8b] text-lg hover:text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
