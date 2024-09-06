import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'
import { MdOutlineAutoDelete } from 'react-icons/md'

interface WishlistItem {
    id: number;
    imageUrl: string;
    productName: string;
    rating: number;
    ratingCount: number;
    price: number;
    quantity: number;
}

const WishlistItem = [
    {
        id: 1,
        imageUrl: "assets/imgs/page/product/img-sub.png",
        productName: "HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 1.51,
        quantity: 1,
    },
    {
        id: 2,
        imageUrl: "assets/imgs/page/product/img-sub2.png",
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
    {
        id: 3,
        imageUrl: "assets/imgs/page/product/img-sub4.png",
        productName: "Gateway 23.8\" All-in-one Desktop, Fully Adjustable Stand",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 3.51,
        quantity: 1,
    },
    {
        id: 3,
        imageUrl: "assets/imgs/page/product/img-sub5.png",
        productName: "Gateway 23.8\" All-in-one Desktop, Fully Adjustable Stand",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 3.51,
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
    {
        id: 3,
        imageUrl: "assets/imgs/page/product/img-sub2.png",
        productName: "Gateway 23.8\" All-in-one Desktop, Fully Adjustable Stand",
        rating: 5, // Assuming 5 stars
        ratingCount: 65,
        price: 3.51,
        quantity: 1,
    },
];

function ProductListingWishlist() {
    return (
        <div className='px-14 py-4 '>
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
                    <h1 className="text-[#425a8b] font-bold">Stock</h1>
                </div>
                <div className="w-[15%]">
                    <h1 className="text-[#425a8b] font-bold">Action</h1>
                </div>
                <div className="w-[8%]">
                    <h1 className="text-[#425a8b] font-bold">Remove</h1>
                </div>
            </div>

            <div className=''>
                {WishlistItem.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center border border-gray-300 p-8 rounded-md my-4"
                    >
                        {/* Checkbox Column */}
                        <div className="w-[4%] flex items-start ">
                            <input type="checkbox" />
                        </div>
                        {/* Product Column */}
                        <div className="w-[52%] flex items-center">
                            <img
                                src={item.imageUrl}
                                alt={item.productName}
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-8 w-full">
                                <h2 className=" font-bold text-[#425a8b]">{item.productName}</h2>
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Image
                                            key={index}
                                            className="w-3 h-3 "
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
                        {/* Unit Price Column */}
                        <div className="w-[12%] text-center">
                            <h4 className="font-bold text-[#425a8b] text-2xl">${item.price.toFixed(2)}</h4>
                        </div>
                        {/* Quantity Column */}
                        <div className="w-[12%] flex justify-center text-center">
                            <span className=" ml-6 px-4 py-2 font-bold text-sm rounded-md bg-[#d5dfe4] text-[#425A8B]">
                                In Stock
                            </span>
                        </div>
                        {/* Subtotal Column */}
                        <div className="w-[15%] flex justify-center text-center">
                            <button className="ml-12 border border-[#425a8b] px-5 py-1 rounded-md text-[#42518b] font-semibold hover:bg-[#425a8b] hover:text-white">
                                Add to Cart
                            </button>
                        </div>
                        {/* Remove Column */}
                        <div className="w-[8%] flex justify-center">
                            <button  className=" items-center ml-12 text-[#425a8b]">
                                <MdOutlineAutoDelete className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListingWishlist
