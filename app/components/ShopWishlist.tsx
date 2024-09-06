import React from 'react'
import Topbar from './TopBar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import ProductListingWishlist from './ProductListingWishlist';
const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Cart", href: "#" },
];
const Wishlist = () => {
    return (
        <ProductListingWishlist />
    )
}

const Page: React.FC = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navigation items={navigationItems} />
                    <Wishlist />
                </div>
            </div>
        </>
    );
}

export default Page;
