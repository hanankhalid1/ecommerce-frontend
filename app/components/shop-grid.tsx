"use client"
import React, { useState } from "react";
import { FaSliders } from "react-icons/fa6";

import { IoCaretForwardOutline } from "react-icons/io5";
import Topbar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TopProducts from "../components/TopProducts";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const navigationItems = [
    { label: 'Home', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Cell Phone', href: '#' },
    { label: 'Accessories', href: '#' },
];
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1150,
    bgcolor: 'background.paper',
    border: "none",
    boxShadow: 24,
    p: 4,
};


import Image from "next/image";
import BestSllerShopGrid from "../components/BestSellerShopGrid";
import WatchImage from "../components/WatchImage";
import FilterBox from "./FilterBox";
import Navigation from "./Navigation";
import FeatureList from "./FeatureList";
import NewsLetterSection from "./NewsLetterSection";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import ShopgridItemsListing from "./ShopgridItemsListing";
import ModalFilters from "./ModalFilters";
const HeartIcon = () => (
    <img
        src="assets/imgs/template/icons/wishlist.svg"
        alt="Heart"
        className="w-6 h-6"
    />
);

const productTags = [
    "Games",
    "Electronics",
    "Video",
    "Cellphone",
    "Indoor",
    "VGA Card",
    "USB",
    "Lightning",
    "Camera",
    "Window",
    "Air Vent",
    "Bedroom",
    "Laptop",
    "Dashboard",
    "Keyboard",
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

const imagePool = [
    "assets/imgs/page/homepage1/imgsp3.png",
    "assets/imgs/page/homepage1/imgsp4.png",
    "assets/imgs/page/homepage1/imgsp5.png",
    "assets/imgs/page/homepage1/imgsp6.png",
    "assets/imgs/page/homepage1/imgsp7.png",
    "assets/imgs/page/homepage1/imgsp1.png",
    "assets/imgs/page/homepage1/imgsp.png",
];
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
    {
        id: 21,
        category: "topbrands",
        brand: "LG",
        name: "LG Alexa Built-In CX 55 4K Smart OLED TV",
        price: 1496.99,
        originalPrice: 1599.99,
        rating: 5,
        reviews: 140,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 22,
        category: "bestseller",
        brand: "Jabra",
        name: "Jabra Elite 75t True Wireless Earbuds",
        price: 149.99,
        originalPrice: 179.99,
        rating: 5,
        reviews: 110,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 23,
        category: "mostviewed",
        brand: "Razer",
        name: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
        price: 129.99,
        originalPrice: 149.99,
        rating: 4,
        reviews: 85,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 24,
        category: "topbrands",
        brand: "Corsair",
        name: "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200 C16",
        price: 79.99,
        originalPrice: 89.99,
        rating: 5,
        reviews: 95,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 25,
        category: "all",
        brand: "Asus",
        name: "Asus TUF Gaming A17 FA706IH 17.3” Laptop",
        price: 1199.99,
        originalPrice: 1299.99,
        rating: 4,
        reviews: 70,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 21,
        category: "topbrands",
        brand: "LG",
        name: "LG Alexa Built-In CX 55 4K Smart OLED TV",
        price: 1496.99,
        originalPrice: 1599.99,
        rating: 5,
        reviews: 140,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 22,
        category: "bestseller",
        brand: "Jabra",
        name: "Jabra Elite 75t True Wireless Earbuds",
        price: 149.99,
        originalPrice: 179.99,
        rating: 5,
        reviews: 110,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 26,
        category: "bestseller",
        brand: "Acer",
        name: "Acer Predator Helios 300 15.6” Gaming Laptop",
        price: 1399.99,
        originalPrice: 1499.99,
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
        id: 27,
        category: "mostviewed",
        brand: "Sony",
        name: "Sony A7 III Full-Frame Mirrorless Camera",
        price: 1998.0,
        originalPrice: 2199.0,
        rating: 5,
        reviews: 150,
        imageUrl: imagePool[2],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 28,
        category: "topbrands",
        brand: "HP",
        name: "HP Omen 25i Gaming Monitor",
        price: 249.99,
        originalPrice: 299.99,
        rating: 4,
        reviews: 60,
        imageUrl: imagePool[3],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 29,
        category: "all",
        brand: "Logitech",
        name: "Logitech C920 HD Pro Webcam",
        price: 79.99,
        originalPrice: 89.99,
        rating: 5,
        reviews: 100,
        imageUrl: imagePool[0],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
    {
        id: 30,
        category: "bestseller",
        brand: "Dyson",
        name: "Dyson Airwrap Complete Styler",
        price: 549.99,
        originalPrice: 599.99,
        rating: 5,
        reviews: 75,
        imageUrl: imagePool[1],
        features: [
            "27-inch (diagonal) Retina 5K display",
            "3.1GHz 6-core 10th-generation Intel Core i5",
            "AMD Radeon Pro 5300 graphics",
        ],
    },
];

const sidebarItems = [
    { name: "Computers & Laptop", count: 9, link: "shop-grid.html" },
    { name: "Electric accessories", count: 12, link: "shop-grid.html" },
    { name: "Mainboard & CPU", count: 24, link: "shop-grid.html" },
    { name: "Bluetooth devices", count: 34, link: "shop-grid.html" },
    { name: "Mouse & Keyboard", count: 65, link: "shop-grid.html" },
    { name: "Wired Headphone", count: 15, link: "shop-grid.html" },
    { name: "Gaming Gadgets", count: 76, link: "shop-grid.html" },
    { name: "Smart watches", count: 89, link: "shop-grid.html" },
    { name: "Cell Phones", count: 23, link: "shop-grid.html" },
    { name: "Headphone", count: 98, link: "shop-grid.html" },
    { name: "Home theater", count: 98, link: "shop-grid.html" },
    { name: "Cameras & drones", count: 124, link: "shop-grid.html" },
    { name: "PC gaming", count: 56, link: "shop-grid.html" },
    { name: "Smart home", count: 87, link: "shop-grid.html" },
    { name: "Networking", count: 36, link: "shop-grid.html" },
];


interface FilterItem {
    label: string;
    value: number;
    checked?: boolean;
}

const priceRanges: FilterItem[] = [
    { label: 'Free - $100', value: 145, checked: true },
    { label: '$100 - $200', value: 56 },
    { label: '$200 - $400', value: 23 },
    { label: '$400 - $600', value: 43 },
    { label: '$600 - $800', value: 65 },
    { label: 'Over $1000', value: 56 },
];

const brands: FilterItem[] = [
    { label: 'Apple', value: 12, checked: true },
    { label: 'Sony', value: 34 },
    { label: 'Toshiba', value: 56 },
    { label: 'Assus', value: 78 },
    { label: 'Samsung', value: 23 },
];

const colors = [
    { label: 'Red', className: 'color-red' },
    { label: 'Green', className: 'color-green' },
    { label: 'Blue', className: 'color-blue' },
    { label: 'Purple', className: 'color-purple' },
    { label: 'Black', className: 'color-black' },
    { label: 'Gray', className: 'color-gray' },
    { label: 'Pink', className: 'color-pink' },
    { label: 'Brown', className: 'color-brown' },
    { label: 'Yellow', className: 'color-yellow' },
];




const options = [
    { id: 'latest', label: 'Latest products' },
    { id: 'oldest', label: 'Oldest products' },
    { id: 'comments', label: 'Comments products' },
];


const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};


const ShopGrid = () => {


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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const CloseButton = () => setOpen(false);


    return (
        <section className="flex flex-row pt-[68px] pl-[30px]">
            <div className="flex flex-col w-1/4 mr-6  ">
                <div className="border border-gray-300  font-bold p-5 text-[#425a8b]">Product Categories</div>

                <div className="sidebar-content border border-gray-300">
                    <ul className="list-nav-arrow my-6">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className="group  border-gray-200">
                                <a
                                    href={item.link}
                                    className="flex justify-between items-center py-2 px-4 transition-colors duration-300 group-hover:text-[#fd9636]"
                                >
                                    <span className="group-hover:text-orange-500 flex items-center space text-[#42518b] "><IoCaretForwardOutline className="space-x-2" />{item.name}</span>
                                    <span
                                        className="ml-2 border border-gray px-[6px] py-[1px] text-xs rounded-md text-[#42518b] bg-[#f0f3f8] group-hover:bg-[#fd9636] group-hover:text-white duration-700"
                                    >
                                        {item.count}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div className="collapse" id="moreMenu">
                        </div>
                        <a
                            className="link-see-more mt-5"
                            data-bs-toggle="collapse"
                            href="#moreMenu"
                            role="button"
                            aria-expanded="false"
                            aria-controls="moreMenu"
                        >
                            <span className="hover:text-[#fd9636] duration-500 flex items-center space  text-[11px] px-6 text-[#42518b] mb-2"><IoCaretForwardOutline />See More</span>

                        </a>
                    </div>
                </div>
                <div className="border border-gray-300  font-bold p-4 text-xl text-[#425a8b]">Product Filters</div>
                <div className="sidebar-content p-5  border border-gray-300 ">
                    <h6 className="text-[#425a8b] font-bold ">Price</h6>
                    <div className="py-3">
                        <input
                            type="range"
                            min={1}
                            max={100}
                            step={1}
                            className="w-full"

                        />
                    </div>

                    <div className="row">
                        <div className="col-lg-12 space-x-1">
                            <label className="lb-slider text-sm text-[#8c9ec5]">Price Range :</label>
                            <span className="min-value-money text-sm text-[#0e224d]">$0</span>
                            <label className="lb-slider text-sm font-medium text-[#0e224d]"></label>-
                            <span className="max-value-money text-sm font-medium text-[#0e224d]">$300</span>
                        </div>
                    </div>
                    <ul className="list-checkbox">
                        {priceRanges.map((range, index) => (
                            <li key={index} className=" py-2 flex justify-between items-center">
                                <label className="cb-container flex items-center">
                                    <input type="checkbox" checked={range.checked} />
                                    <span className="ml-2 ">{range.label}</span>
                                    <span className=""></span>
                                </label>
                                <span className=" ml-2 border border-gray px-[6px] py-[1px] text-xs rounded-md text-[#42518b] bg-[#f0f3f8]">{range.value}</span>
                            </li>
                        ))}
                    </ul>
                    <h6 className="text-[#425a8b] font-bold mt-10 mb-8">Brands</h6>
                    <ul className="list-checkbox">
                        {brands.map((brand, index) => (
                            <li key={index} className=" py-2 flex justify-between items-center">
                                <label className="cb-container flex items-center">
                                    <input type="checkbox" checked={brand.checked} />
                                    <span className="text-small ml-2 text-[#8c9ec5]">{brand.label}</span>
                                    <span className="checkmark"></span>
                                </label>
                                <span className=" ml-2 border border-gray px-[6px] py-[1px] text-xs rounded-md text-[#42518b] bg-[#f0f3f8]">{brand.value}</span>
                            </li>
                        ))}
                    </ul>
                    <h6 className="text-[#425a8b] font-bold tracking-wider mt-10 mb-10">Color</h6>
                    <ul className="flex flex-wrap justify-center gap-4">
                        {colors.map((color, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <a
                                    className="w-10 h-10 rounded-full"
                                    style={{ backgroundColor: color.label }}
                                    href="#"
                                ></a>
                                <span className="mt-2 text-gray-800">{color.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <button className="flex border border-gray-300 items-center p-2 text-[#425a8b] font-sm font-medium rounded-lg bg-gray-100" onClick={handleOpen}>
                            <FaSliders className="mr-2" />
                            All Filters
                        </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={CloseButton}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-description" >
                                        <FilterBox closeModal={CloseButton} />
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>

                </div>
                <div>
                    <BestSllerShopGrid />
                </div>
                <div>
                    <div className="products-tag my-12">
                        <h6 className="color-[#425a8b]  text-[#425a8b]  text-xl font-bold mb-2">Product Tags</h6>
                        <div className="grid grid-cols-3  gap-2">
                            {productTags.map((tag, index) => (
                                <a
                                    key={index}
                                    className="btn btn-border inline-block border rounded-md border-[#425a8b] text-[#425a8b] p-2 text-xs text-center hover:bg-[#7a8eb7] hover:text-white"
                                    href="#"
                                >
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" mt-10 w-full flex flex-col justify-between h-[470px] bg-topsell rounded py-[50px] px-[10px] mr-12">
                        <div className="banner-right text-center">
                            <span className="text-white bg-sky-400 rounded-lg   px-3">No.9</span>
                            <h5 className="text-xl text-[#425a8b] font-bold tracking-wider mt-1">
                                Sensitive Touch <br className="d-none d-lg-block" /> without fingerprint
                            </h5>
                            <p className="text-[#42528b] mt-1 tracking-wider   ">Smooth handle and accurate clicks</p>
                            <a href="" className="text-sky-500 text-xs">View Detail</a>
                        </div>
                    </div>
                </div>

                <div>
                </div>


            </div>
            <div className=" lg:mr-10 w-3/4">
                <div>
                    <Image
                        src={"/assets/imgs/page/shop/banner.png"}
                        alt="Banner13promax"
                        width={3000}
                        height={300}

                    />
                </div>
                <div className="container mx-auto">


                    <ModalFilters />
                    <div className="mb-10">
                        <hr className="border-gray-300 mb-4" />
                    </div>
                    <ShopgridItemsListing columns={4} />


                </div>
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
        </section>
    );
};

function Page() {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navigation items={navigationItems} />
                    <ShopGrid />
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
