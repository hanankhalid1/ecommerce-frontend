"use client";
import React from "react";
import Image from "next/image";
const sale = [
  { src: "/product/sp1.png", alt: "Ecom 1" },
  { src: "/product/sp2.png", alt: "Ecom 2" },
  { src: "/product/sp3.png", alt: "Ecom 3" },
];
function SingleProductSection2() {
  return (
    <div>
      {" "}
      <div>
        <h4 className="text-[#425A8B] text-2xl font-semibold px-16 top-0 item-center my-4">
          Frequently Bought Together
        </h4>
        <div>
  <div className="flex flex-col md:flex-row md:justify-between md:px-16">
    {/* Sale Items */}
    <div className="flex flex-col md:flex-row md:justify-start items-center md:items-start">
      {sale.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center mx-2 my-2"
        >
          <Image
            src={item.src}
            alt={item.alt}
            height={200}
            className="border-4 border-[#DDE4F0] rounded-md"
            width={200}
          />
          {index < sale.length - 1 && (
            <span className="text-4xl text-[#425A8B] p-2 md:p-8">
              +
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Price and Add to Cart Button */}
    <div className="flex flex-col justify-center items-center md:items-start md:ml-8 mt-10 md:mt-0">
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl md:text-3xl font-bold text-[#425A8B] px-2">
          $2856.3{" "}
          <span className="text-lg md:text-xl text-[#425A8B] ml-2">
            (3)
          </span>
        </h3>
      </div>
      <div className="mt-3 mb-6">
        <button className=" md:px-2 lg:px-14 md:py-1 border border-[#425A8B] text-[#425A8B] bg-white hover:bg-[#35446B] hover:text-white rounded">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</div>


        <div>
  <div className="grid grid-flow-row pl-14 py-3 my-3">
    <label className="cb-container-2 flex items-center p-1 md:text-sm">
      <input
        type="checkbox"
        className="w-4 h-4 bg-white border-2 border-[#425A8B] text-gray-600 checked:bg-[#425A8B] checked:border-[#425A8B] focus:ring-[#425A8B] focus:ring-opacity-50 rounded"
      />
      <span className="ml-2 text-base text-[#425A8B]">
        <strong>This item:</strong> iPhone 12 Pro Max 128GB Pacific Blue - $1,099.00
      </span>
    </label>

    <label className="cb-container-2 flex items-center p-1 md:text-sm">
      <input
        type="checkbox"
        
        className="w-4 h-4 bg-white border-2 border-[#425A8B] text-gray-600 checked:bg-[#425A8B] checked:border-[#425A8B] focus:ring-[#425A8B] focus:ring-opacity-50 rounded"
      />
      <span className="ml-2 text-base text-[#425A8B]">
        Apple iMac 24: All-In-One Computer, Apple M1, 8GB RAM, 512GB SSD, macOS Big Sur, Green, MGPJ3LL/A - $1,599.00
      </span>
    </label>

    <label className="cb-container-2 flex items-center p-1 md:text-sm">
      <input
        type="checkbox"
       
        className="w-4 h-4 bg-white border-2 border-[#425A8B] text-gray-600 checked:bg-[#425A8B] checked:border-[#425A8B] focus:ring-[#425A8B] focus:ring-opacity-50 rounded"
      />
      <span className="ml-2 text-base text-[#425A8B]">
        Apple AirPods Pro: Active Noise Cancellation, Custom Fit - $197.00
      </span>
    </label>
  </div>
</div>

      </div>
    </div>
  );
}

export default SingleProductSection2;
