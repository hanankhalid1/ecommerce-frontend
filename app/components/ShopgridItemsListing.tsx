
"use client"

import React from 'react'
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const imagePool = [
    "assets/imgs/page/homepage1/imgsp3.png",
    "assets/imgs/page/homepage1/imgsp4.png",
    "assets/imgs/page/homepage1/imgsp5.png",
    "assets/imgs/page/homepage1/imgsp6.png",
    "assets/imgs/page/homepage1/imgsp7.png",
    "assets/imgs/page/homepage1/imgsp1.png",
    "assets/imgs/page/homepage1/imgsp.png",
];
const HeartIcon = () => (
    <img
        src="assets/imgs/template/icons/wishlist.svg"
        alt="Heart"
        className="w-6 h-6"
    />
);
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
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 2,
        category: "bestseller",
        brand: "Philips",
        name: "HP 24 All-in-One PC, Intel Core i3-1115G4",
        price: 154.3,
        originalPrice: 162.5,
        rating: 4,
        reviews: 65,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 3,
        category: "mostviewed",
        brand: "Apple",
        name: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13"',
        price: 2325.3,
        originalPrice: 2225.6,
        rating: 5,
        reviews: 65,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 4,
        category: "mostviewed",
        brand: "Apple",
        name: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
        price: 530.3,
        originalPrice: 560.6,
        rating: 5,
        reviews: 65,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
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
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 6,
        category: "bestseller",
        brand: "Sony",
        name: "Sony WH-1000XM4 Wireless Headphones",
        price: 348.0,
        originalPrice: 399.0,
        rating: 5,
        reviews: 120,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 7,
        category: "mostviewed",
        brand: "Samsung",
        name: "Samsung Galaxy S21 Ultra 5G",
        price: 1199.99,
        originalPrice: 1299.99,
        rating: 5,
        reviews: 210,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 8,
        category: "bestseller",
        brand: "Microsoft",
        name: "Microsoft Surface Laptop 4 15” Touch-Screen",
        price: 1699.99,
        originalPrice: 1799.99,
        rating: 4,
        reviews: 78,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 9,
        category: "topbrands",
        brand: "Dell",
        name: "Dell XPS 13 Laptop",
        price: 999.99,
        originalPrice: 1099.99,
        rating: 5,
        reviews: 134,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 10,
        category: "all",
        brand: "Canon",
        name: "Canon EOS R5 Full-Frame Mirrorless Camera",
        price: 3899.0,
        originalPrice: 3999.0,
        rating: 5,
        reviews: 98,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 11,
        category: "bestseller",
        brand: "Bose",
        name: `Gateway 23.8" All-in-one Desktop, Fully Adjustable`,
        price: 299.0,
        originalPrice: 349.0,
        rating: 4,
        reviews: 245,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 12,
        category: "mostviewed",
        brand: "HP",
        name: "HP Spectre x360 14 Convertible Laptop",
        price: 1499.99,
        originalPrice: 1599.99,
        rating: 5,
        reviews: 89,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 13,
        category: "topbrands",
        brand: "Apple",
        name: "Apple AirPods Pro with MagSafe Charging Case",
        price: 249.0,
        originalPrice: 279.0,
        rating: 5,
        reviews: 432,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 14,
        category: "bestseller",
        brand: "Logitech",
        name: "Logitech MX Master 3 Wireless Mouse",
        price: 99.99,
        originalPrice: 129.99,
        rating: 5,
        reviews: 98,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 15,
        category: "all",
        brand: "Sony",
        name: "Sony PlayStation 5 Console",
        price: 499.99,
        originalPrice: 499.99,
        rating: 5,
        reviews: 320,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 16,
        category: "mostviewed",
        brand: "Samsung",
        name: "Samsung Galaxy Tab S7+ Mystic Black",
        price: 849.99,
        originalPrice: 899.99,
        rating: 4,
        reviews: 65,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 17,
        category: "bestseller",
        brand: "Amazon",
        name: "Amazon Echo (4th Gen) Smart speaker with Alexa",
        price: 99.99,
        originalPrice: 129.99,
        rating: 4,
        reviews: 210,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 18,
        category: "topbrands",
        brand: "Nikon",
        name: "Nikon Z6 II FX-Format Mirrorless Camera Body",
        price: 1996.95,
        originalPrice: 2199.95,
        rating: 5,
        reviews: 77,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 19,
        category: "mostviewed",
        brand: "Dyson",
        name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
        price: 599.99,
        originalPrice: 649.99,
        rating: 5,
        reviews: 145,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 20,
        category: "bestseller",
        brand: "Samsung",
        name: "Samsung QN90A Neo QLED 4K Smart TV",
        price: 1899.99,
        originalPrice: 1999.99,
        rating: 5,
        reviews: 220,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    
];
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
type ShopgridItemsListingProps = {
    columns?: 4 | 5; // Accept 4 or 5 as possible values
  };

const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};
function ShopgridItemsListing({ columns=4 }) {
    const gridClass = columns === 5 ? 'grid-cols-5' : 'grid-cols-4';
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Latest products');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    }
    const [isQuantityDropdownOpen, setQuantityDropdownOpen] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState('30 items');


    const toggleQuantityDropdown = () => setQuantityDropdownOpen(!isQuantityDropdownOpen);
    const selectQuantity = (quantity: string) => {
        setSelectedQuantity(quantity);
        setQuantityDropdownOpen(false);
    };


    const [activeTab, setActiveTab] = useState("all");
    const [shuffledProducts, setShuffledProducts] = useState(products);

    const handleTabClick = (category: string) => {
        setActiveTab(category);

        const filteredProducts = products.filter(
            (product) => category === "all" || product.category === category
        );

        setShuffledProducts(shuffleArray(filteredProducts));
    };

    const filteredProducts = products.filter(
        (product) => activeTab === "all" || product.category === activeTab
    );
    const productsToDisplay = shuffleArray(filteredProducts);
    const [, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>  
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-4`}>
    {productsToDisplay.map((product) => (
        <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-md p-2 relative group transition-transform transform hover:border-[#425A8B] flex flex-col justify-between"
        >
            <div className="relative flex-grow">
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
                <div className="relative">
                    <span className="bg-orange-400 text-white px-1 py-0 rounded-xl left-1 top-0">
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
                <div className="mx-2">
                    <a className="text-xs text-[#425A8B] block" href="#">
                        {product.brand}
                    </a>
                    <a
                        className="text-base text-[#425A8B] font-bold block"
                        href="#"
                    >
                        {product.name}
                    </a>
                    <div className="inline-flex  mt-2">
                        {[...Array(product.rating)].map((_, i) => (
                            <img
                                key={i}
                                src="assets/imgs/template/icons/star.svg"
                                alt="Rating"
                                className="w-3 h-3"
                            />
                        ))}
                        <span className="text-xs text-[#425A8B] ml-1">
                            ({product.reviews})
                        </span>
                    </div>
                    <div className="mt-2">
                        <strong className="text-lg font-bold text-[#425A8B]">
                            ${product.price}
                        </strong>
                        <span className="text-[#8c9ec5] text-sm line-through ml-3">
                            ${product.originalPrice}
                        </span>
                    </div>
                </div>
            </div>
            <div className="items-center flex justify-center py-2">
                <a
                    className="bg-white text-[#425A8B] py-1 w-full  text-center font-bold
                 rounded border border-[#425A8B] hover:bg-[#425A8B] hover:text-white"
                    href="#"
                >
                    Add to cart
                </a>
            </div>
            <div className="m-2 text-xs flex-row justify-items-end items-center mt-auto">
                <ul className="list-disc pl-2 py-3">
                    {product.features.map((feature: string, index: number) => (
                        <li key={index} className="text-[#8c9ec5] text-[10px] ">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ))}
</div></div>
  )
}

export default ShopgridItemsListing