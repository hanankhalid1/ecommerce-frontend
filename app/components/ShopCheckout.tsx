"use client";
import React from "react";
import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Image from "next/image";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import NewsLetterSection from "./NewsLetterSection";
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import FeatureList from "./FeatureList";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "checkout", href: "#" },
];

const wishlistItems = [
  {
    id: 1,
    imageUrl: "/assets/imgs/page/product/img-sub.png",
    productName: "Gateway 23.8\" All-in-one Desktop, Fully Adjustable Stand",
    rating: 5,
    reviews: 65,
    quantity: 1,
    price: "$" + 2.51,
    productLink: "shop-single-product.html",
  },
  {
    id: 2,
    imageUrl: "/assets/imgs/page/product/img-sub2.png",
    productName: "HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM",
    rating: 5,
    reviews: 65,
    quantity: 1,
    price: "$" + 1.51,
    productLink: "shop-single-product.html",
  },
  {
    id: 3,
    imageUrl: "/assets/imgs/page/product/img-sub3.png",
    productName: "Dell Optiplex 9020 Small Form Business Desktop Tower PC",
    rating: 5,
    reviews: 65,
    quantity: 1,
    price: "$" + 3.51,
    productLink: "shop-single-product.html",
  },
];


const ShopCheckout: React.FC = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full p-4 pr-14 gap-5">
        <div className="w-full lg:w-1/2 p-4 rounded-lg">
          <div className="border p-4 rounded-lg ">
            <div className="flex items-start gap-3 w-full">
              <a href="" className="border px-1 w-[33%] border-gray-300  rounded-md flex items-start">
                <Image
                  src="assets/imgs/page/checkout/gpay.svg"
                  alt="G pay"
                  width={80}
                  height={100}
                  className="items-start"
                />
              </a>
              <a href="" className="border px-1 w-[33%] border-gray-300  rounded-md justify-start">
                <Image
                  src="assets/imgs/page/checkout/paypal.svg"
                  alt="Paypal"
                  width={100}
                  height={100}
                  className=""
                />
              </a>
              <a href="" className="border px-2 w-[33%]  border-gray-300 rounded-md flex justify-start">
                <Image
                  src="assets/imgs/page/checkout/amazon.svg"
                  alt="Amazon"
                  width={100}
                  height={100}
                  className=""
                />
              </a>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t-4 border-gray-300"></div>
              <span className="px-2 text-gray-600">Or</span>
              <div className="flex-grow border-t-4 border-gray-300"></div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[#425a8b] font-bold">Contact Information</h1>
              <div className="flex gap-1">
                <span className="text-[#425a8b] text-md">
                  Already have an account?
                </span>
                <Link href="" className="text-[#08a9ed]">
                  Login
                </Link>
              </div>
            </div>

            {/* Form section */}
            <form>
              <div className="flex flex-wrap">
                <div className="w-full mb-5">
                  <input
                    className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                    type="text"
                    placeholder="Email*"
                  />
                </div>
                <div className="w-full mb-1">
                  <label className="flex items-center text-sm text-brand-3">
                    <input
                      className="mr-2 "
                      id="checkboxOffers"
                      type="checkbox"
                    />
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>
                <div className="w-full mt-2">
                  <h5 className="font-bold text-lg text-[#425a8b] mt-3 mb-5">
                    Shipping address
                  </h5>
                </div>
                {/* Form inputs */}
                <div className="flex flex-wrap md:flex-nowrap w-full mb-5">
                  <div className="w-full md:w-1/2 md:pr-2">
                    <input
                      className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                      type="text"
                      placeholder="First name*"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2">
                    <input
                      className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                      type="text"
                      placeholder="Last name*"
                    />
                  </div>
                </div>
                <div className="w-full mb-5">
                  <input
                    className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                    type="text"
                    placeholder="Address 1*"
                  />
                </div>
                <div className="w-full mb-5">
                  <input
                    className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                    type="text"
                    placeholder="Address 2"
                  />
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full mb-5">
                  <div className="w-full md:w-1/2 md:pr-2">
                    <select className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md">
                      <option value="">Select an option...</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2">
                    <input
                      className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                      type="text"
                      placeholder="City*"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full mb-5">
                  <div className="w-full md:w-1/2 md:pr-2">
                    <input
                      className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                      type="text"
                      placeholder="PostCode / ZIP*"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-2">
                    <input
                      className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="w-full mb-5">
                  <input
                    className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                    type="text"
                    placeholder="Phone*"
                  />
                </div>
                <div className="w-full mb-5">
                  <textarea
                    className="form-control w-full text-sm border border-gray-300 p-2 placeholder:text-[#8c9ec5] font-semibold rounded-md"
                    placeholder="Additional Information"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </form>

            <div>
            </div>
          </div>
          <div className="flex justify-between my-5">
            <button className=" flex items-center text-[#0ba9ed] text-center py-1 rounded-md font-semibold  hover:text-[#425a8b]">
              <IoArrowBack className="mx-3" />  Return to cart
            </button>
            <button className=" flex items-center bg-[#425a8b] text-center px-4 py-1 rounded-md font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
              <IoArrowForward className="mx-3" /> Place an order
            </button>
          </div>
        </div>

        {/* Order section */}
        <div className="w-full lg:w-1/2 p-8 border border-gray-300 rounded-lg  ">
          <h5 className="text-[#425a8b]  text-l font-bold">Your Order</h5>
          {wishlistItems.map((items, index) => (
            <div key={index} className="flex w-full items-center border border-gray-300 p-5 gap-4 my-5 rounded-md">
              <div className=" w-[76%] flex items-center">
                <img
                  src={items.imageUrl}
                  alt={items.productName}
                  className="w-28 h-28 object-contain"
                />
                <div className="  ml-5 w-[50%]">
                  <h2 className="font-bold text-[#425a8b]">{items.productName}</h2>
                  <div className="flex">
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
                    <span className="text-[#8c9ec5] text-xs font-medium ml-2">(65 reviews)</span>
                  </div>
                </div>
              </div>



              <div className="w-[12%]">
                <h1 className="text-[#8c9ec5] font-bold text-xl">
                  <span className="text-[#8c9ec5]">x</span>
                  {items.quantity}
                </h1>
              </div>
              <div className="w-[12%] text-[#425a8b] text-xl font-bold">
                <h1>{items.price}</h1>
              </div>


            </div>

          ))}
          <div className="flex gap-4">
            <input type="text" className="w-full border border-gray-300 rounded-md focus:outline-gray-100" placeholder=" Enter your Coupon" />
            <button className="bg-[#425a8b] text-center px-4 py-1 rounded-md font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
              Apply
            </button>
          </div>
          <div className="flex  justify-between">
            <div><h1 className="text-[#425a8b] font-bold text-md my-4">Subtotal</h1></div>
            <div className="text-[#425a8b] font-bold my-4">$ 651</div>

          </div>
          <div className="border-b border-gray-300 flex justify-between">
            <div> <h1 className="text-[#425a8b] font-bold mb-2">Shipping</h1></div>
            <div className="text-[#425a8b] font-bold ">-</div>

          </div>
          <div className=" border-gray-300 flex justify-between" >
            <span className="text-[#425a8b] font-bold my-4">Total</span>
            <span className="text-[#425a8b] font-bold my-4">$651</span>
          </div>
        </div>

      </section >
    </>
  );
};

const Page: React.FC = () => (
  <>
    <Topbar />
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navigation items={navigationItems} />
        <ShopCheckout />
        <FeatureList />
        <NewsLetterSection />
        <Footer1 />
        <Footer2 />
      </div>
    </div>
  </>
);

export default Page;
