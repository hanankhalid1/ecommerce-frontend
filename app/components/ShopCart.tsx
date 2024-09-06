"use client"
import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdOutlineAutoDelete } from "react-icons/md";
import Topbar from "./TopBar";
import { GrUpdate } from "react-icons/gr";
import Sidebar from "./Sidebar";
import BestSellers from './shopCartLikes'
import Navigation from "./Navigation";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import ShopcartSwiper from '../components/ShopCartSwiper'
import Image from "next/image";
import BestSeller from "./BestSeller";
import SwiperProducts1 from "./Swipe1BestSeller";
import { Swiper } from "swiper/types";
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import NewsLetterSection from "./NewsLetterSection";
import FeatureList from "./FeatureList";
import ShopCartLikes from "./shopCartLikes";
const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Cart", href: "#" },
];
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    // any additional props
  }
interface WishlistItem {
    id: number;
    imageUrl: string;
    productName: string;
    rating: number;
    ratingCount: number;
    price: number;
    quantity: number;
}

const initialWishlistItems: WishlistItem[] = [
    {
        id: 1,
        imageUrl: "assets/imgs/page/product/img-sub2.png",
        productName: "HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 1.51,
        quantity: 1,
    },
    {
        id: 2,
        imageUrl: "assets/imgs/page/product/img-sub.png",
        productName: "Dell Optiplex 9020 Small Form Business Desktop Tower PC",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 2.51,
        quantity: 1,
    },
    {
        id: 3,
        imageUrl: "assets/imgs/page/product/img-sub3.png",
        productName: "Gateway 23.8\" All-in-one Desktop, Fully Adjustable Stand",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 3.51,
        quantity: 1,
    },
];

const ShopCart: React.FC = () => {

    const [selectedCountry, setSelectedCountry] = useState('USA');

    const handleChange = (event: any) => {
        setSelectedCountry(event.target.value);
    };


    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setWishlistItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const increaseQuantity = (id: number) => {
        setWishlistItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setWishlistItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const totalPrice = wishlistItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <section className="flex w-full p-6 gap-5">
                <div className="left w-3/4">
                    <div className="w-full bg-[#f0f3f8] p-2 rounded-md text-center flex items-center">
                        <div className="w-[4%]">
                            <input type="checkbox" />
                        </div>
                        <div className="w-[52%] text-start">
                            <h1 className="text-[#425a8b] font-bold">Product</h1>
                        </div>
                        <div className="w-[12%]">
                            <h1 className="text-[#425a8b] font-bold">Unit Price</h1>
                        </div>
                        <div className="w-[12%]">
                            <h1 className="text-[#425a8b] font-bold">Quantity</h1>
                        </div>
                        <div className="w-[15%]">
                            <h1 className="text-[#425a8b] font-bold">Subtotal</h1>
                        </div>
                        <div className="w-[8%]">
                            <h1 className="text-[#425a8b] font-bold">Remove</h1>
                        </div>
                    </div>

                    <div style={{ padding: "20px" }}>
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center border-b border-gray-300 py-2"
                            >
                                {/* Checkbox Column */}
                                <div className="w-[4%] flex items-center justify-center">
                                    <input type="checkbox" />
                                </div>
                                {/* Product Column */}
                                <div className="w-[52%] flex items-center">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.productName}
                                        className="w-24 h-24 object-cover" />
                                    <div className="mx-5">
                                        <h2 className="ml-2 font-bold text-[#425a8b]">{item.productName}</h2>
                                        <div className="flex items-center ">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image
                                                    key={index}
                                                    className="w-4 h-4"
                                                    src="/template/icons/star.svg"
                                                    alt="Star"
                                                    width={16}
                                                    height={16} />
                                            ))}
                                            <span className="text-[#8c9ec5] text-xs font-medium ml-2">(65 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Unit Price Column */}
                                <div className="w-[12%] text-center">
                                    <h4 className="font-bold text-[#425a8b] text-2xl">${item.price.toFixed(2)}</h4>
                                </div>
                                {/* Quantity Column */}
                                <div className="w-[12%]">
                                    <div className="flex items-center space-x-2 border-b-4 border-gray-300">
                                        <button
                                            className="p-2 text-gray-600 hover:text-gray-800"
                                        >
                                            <FaMinus />
                                        </button>
                                        <input
                                            type="text"
                                            value={item.quantity}
                                            className="w-12 text-center text-[#425a8b] text-2xl rounded"
                                            readOnly
                                        />
                                        <button
                                            className={`p-2 ${item.quantity >= 10 ? 'text-white opacity-50' : 'text-[#425a8b] hover:text-gray-800'}`}
                                            disabled={item.quantity >= 10}
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>

                                {/* Subtotal Column */}
                                <div className="w-[15%] text-center font-bold text-[#425a8b] text-2xl">
                                    <h4>${(item.price * item.quantity).toFixed(2)}</h4>
                                </div>
                                {/* Remove Column */}
                                <div className="w-[8%] text-center">
                                    <button className="text-red-500">
                                        <MdOutlineAutoDelete className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between space-x-4">
                        <button className="flex items-center bg-[#425a8b] px-4 py-1 rounded-lg font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
                            <IoMdArrowRoundBack className="mr-2" /> {/* Add margin-right for spacing */}
                            Continue Shopping
                        </button>
                        <button className="flex items-center bg-[#425a8b] px-4 py-1 rounded-lg font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
                            <GrUpdate className="mr-2" /> {/* Add margin-right for spacing */}
                            Update Cart
                        </button>
                    </div>
                    <div className="flex w-full flex-row w-ful gap-5 my-12">
                        <div className="w-1/2 border border-gray-300 p-4 rounded-md">
                            <h2 className="text-[#425a8b] font-bold ">Calculate shipping</h2>
                            <div className="flex space-x-2 my-2">
                                <span className="text-md text-[#8c9ec5] font-bold">Flat rate : </span>
                                <span className="font-bold text-[#425a8b]"> 5% </span>
                            </div>
                            <div>
                                <div>
                                    <select
                                        value={selectedCountry}
                                        onChange={handleChange}
                                        className=" py-2 w-full my-3 border rounded-md">
                                        <option value="USA" className="bg-sky-300 text-white" aria-placeholder="USA" >USA</option>
                                        <option value="Euro">Euro</option>
                                    </select>
                                </div>
                                <div className="flex row gap-6">
                                    <input type="text" placeholder="Stage / Country " className="border border-gray-300 p-2 rounded-md" />
                                    <input type="text" placeholder="PostalCode / ZIP" className="border border-gray-300 p-2 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2  p-4">
                            <h5 className="text-[#425a8b] font-bold " >Apply Coupon</h5>
                            <div className="my-2">
                                <span className="text-sm  text-[#8c9ec5] font-bold" >Using a promo code ? </span>
                            </div>
                            <div className="flex space-x-4 ">
                                <input type="text" placeholder="Enter your Coupon " className="border border-gray-300 p-2 rounded-md w-[100%]" />
                                <button className="flex items-center bg-[#425a8b] px-6 py-1 rounded-lg font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold text-[#425a8b]">You may also like</h4>

                </div>


                <div className="right w-1/4   h-auto">
                    <div className="border border-gray--300">
                        <div className="flex justify-between p-2 border-b border-gray-300">
                            <h1 className="text-[#8c9ec5] font-bold">Subtotal</h1>
                            <h4 className="text-[#425a8b] text-3xl font-extrabold">
                                ${totalPrice.toFixed(2)}
                            </h4>
                        </div>
                        <div className="flex justify-between p-2 border-b border-gray-300">
                            <h1 className="text-[#8c9ec5] font-bold">Delivery</h1>
                            <h4 className="text-[#425a8b] text-xl font-bold">Free</h4>
                        </div>
                        <div className="flex justify-between p-2 border-b border-gray-300">
                            <h1 className="text-[#8c9ec5] font-bold">Estimate For</h1>
                            <h4 className="text-[#425a8b] font-bold">United Kingdom</h4>
                        </div>
                        <div className="flex justify-between p-2 border-b border-gray-300">
                            <h1 className="text-[#8c9ec5] font-bold">Total</h1>
                            <h4 className="text-[#425a8b] font-bold text-2xl">
                                ${totalPrice.toFixed(2)}
                            </h4>
                        </div>
                        <div className="text-center p-3">
                            <button className="bg-[#425a8b] text-center px-4 py-1 rounded-lg font-semibold text-white hover:bg-white hover:text-[#425a8b] border hover:border-[#425a8b]">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </section>
            <div className="px-4">
            <ShopCartLikes
            heading="Related Prodcuts"
            backgroundColor="#fff"
          />
                <h4 className="text-2xl font-bold text-[#425a8b]">Recently viewed items</h4>
                <div className="my-14">
                    <ShopcartSwiper heading="You may also Like" />
                    <FeatureList />
                    <NewsLetterSection />
                    <Footer1 />
                    <Footer2 />

                </div>
            </div>
        </>
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
                    <ShopCart />
                </div>
            </div>
        </>
    );
}

export default Page;
