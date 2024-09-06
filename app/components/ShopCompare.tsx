import React from "react";
import page from "../shop-cart/page";
import Navbar from "./Navbar";
import { MdOutlineAutoDelete } from "react-icons/md";
import Topbar from "./TopBar";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import ShopCheckout from "./ShopCheckout";
import FeatureList from "./FeatureList";
import NewsLetterSection from "./NewsLetterSection";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import ShopCartSwiper from "./ShopCartSwiper";
import BestSellers from "../components/shopCartLikes";
import ShopCartLikes from "../components/shopCartLikes";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Compare", href: "#" },
];
const productData = [
  {
    name: "Dell Optiplex 9020 Small Form Business Desktop Tower PC",
    imgSrc: "assets/imgs/page/compare/img1.png",
    reviewCount: 65,
    screenSize: '42"',
    screenDefinition: "Full High Definition",
    productType: "LED LCDs",
    price: "$2786.5",
    stockStatus: "In Stock",
    buyLink: "shop-cart.html",
    buyButtonText: "Add to Cart",
    buyButtonClass: "bg-[#425a8b] border hover:border-[#425a8b] hover:text-[#425a8b] hover:bg-transparent",
  },
  {
    name: "HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM",
    imgSrc: "assets/imgs/page/compare/img2.png",
    reviewCount: 65,
    screenSize: '42"',
    screenDefinition: "Full High Definition",
    productType: "LED LCDs",
    price: "$2856.0",
    stockStatus: "Out of Stock",
    stockStatusClass: "bg-red-100 text-red-600",
    buyLink: "page-contact.html",
    buyButtonText: "Contact Us",
    buyButtonClass: "bg-white border hover:border-[#425a8b] text-[#425a8b]",
  },
  {
    name: "Logitech Brio 4K Webcam, Ultra 4K HD Video Calling",
    imgSrc: "assets/imgs/page/compare/img3.png",
    reviewCount: 65,
    screenSize: '42"',
    screenDefinition: "Full High Definition",
    productType: "LED LCDs",
    price: "$2950.0",
    stockStatus: "In Stock",
    stockStatusClass: "bg-green-100 text-green-600",
    buyLink: "shop-cart.html",
    buyButtonText: "Add to Cart",
    buyButtonClass: "bg-[#425a8b] border hover:border-[#425a8b] hover:text-[#425a8b] hover:bg-transparent",
  },
];

const ProductComparisonTable = () => {
  return (
    <section className="w-[100%] flex py-10">
      <div className="w-[8.33%]">
      </div>
      <div className=" w-[83%] ">
        <table className="min-w-full bg-white border border-gray-200 ">
          <tbody>
            <tr>
              <td className="text-[#425a8b] text-center text-sm  font-medium border border-gray-200">
                Products
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-4 py-1 border border-gray-200">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-64 h-auto mx-auto"
                  />
                  <h6 className="text-center ">
                    <a
                      className="text-[#425a8b] font-bold"
                      href={`shop-single-product-${index + 1}.html`}
                    >
                      {product.name}
                    </a>
                  </h6>
                </td>
              ))}
            </tr>
            <tr >
              <td className="text-center text-[#42528b] py-2 px-12  text-sm font-medium border border-gray-200">
                Review
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-4 py-1 text-sm text-[#425a8b] font-medium border border-gray-200">
                  <div className="flex justify-center items-center">
                    {Array(5)
                      .fill("")
                      .map((_, starIndex) => (
                        <img
                          key={starIndex}
                          src="assets/imgs/template/icons/star.svg"
                          alt="Star"
                          className="w-4 h-4"
                        />
                      ))}
                    <span className="ml-2  text-xs text-gray-500">
                      ({product.reviewCount})
                    </span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className=" text-[#425a8b] py-2 px-12 text-center text-sm font-medium border border-gray-200">
                Screen Size
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-4 py-1 text-center text-sm text-[#425a8b] font-medium border border-gray-200">
                  {product.screenSize}
                </td>
              ))}
            </tr>
            <tr>
              <td className=" text-[#425a8b] py-2 px-12 text-center text-sm font-medium border border-gray-200">
                Screen Definition
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-4 py-1 text-sm text-[#425a8b] font-medium text-center border border-gray-200">
                  {product.screenDefinition}
                </td>
              ))}
            </tr>
            <tr>
              <td className=" text-[#425a8b] py-2 px-12 text-center text-sm font-medium border border-gray-200">
                Product Type
              </td>
              {productData.map((product, index) => (
                <td key={index} className=" text-sm text-[#425a8b] font-medium px-4 py-1 text-center border border-gray-200">
                  {product.productType}
                </td>
              ))}
            </tr>
            <tr>
              <td className=" text-[#425a8b] py-2 px-12 text-center text-sm font-medium border border-gray-200">
                Connectivity
              </td>
              {productData.map((_, index) => (
                <td key={index} className="px-4 py-1 text-center border border-gray-200"></td>
              ))}
            </tr>
            <tr>
              <td className="py-2 px-12 text-[#425a8b] text-center text-sm font-medium border border-gray-200">
                Price
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-4 py-1 text-center font-bold text-[#425a8bs] border border-gray-200">
                  {product.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2 px-12 text-[#425a8b] text-center text-sm font-medium border border-gray-200">
                Stock status
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-12 py-4 border text-center">
                  <span className={`px-4 py-2 font-bold text-sm rounded-md ${index === 1
                    ? " bg-[#FFF3EA] text-[#F53658]"
                    : "bg-[#d5dfe4]  text-[#425A8B]"

                    }`}>
                    {product.stockStatus}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2 px-12 text-[#425a8b] text-center text-sm font-medium border border-gray-200">
                Buy now
              </td>
              {productData.map((product, index) => (
                <td key={index} className="px-12 py-4 text-center border border-gray-200">
                  <a
                    className={`px-4 py-2 font-bold text-sm rounded-md ${index === 1
                      ? " text-[#425a8b]  border-1 hover:border-[#425a8b] hover:bg-[#425a8b] hover:text-white "
                      : "bg-[#425a8b] border hover:border-[#425a8b] hover:text-[#425a8b] hover:bg-transparent  text-white"
                      }`}
                    href={product.buyLink}
                  >
                    {product.buyButtonText}
                  </a>
                </td>
              ))}
            </tr>

            <tr>
              <td className="py-2 px-12 text-[#425a8b] text-center text-sm font-medium border border-gray-200">
                Remove
              </td>
              {productData.map((_, index) => (
                <td key={index} className="px-4 py-1 text-center border border-gray-200">
                  <button className="text-[#425a8b]">
                    <MdOutlineAutoDelete className="text-xl" />
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
        <ProductComparisonTable />
        <div className='ml-4'>

          <div className=' border-b border-gray-300 mt-8 pb-14'>
            <ShopCartSwiper heading="Recenlty viewd items" />
          </div>
          <div className='border-b border-gray-300 my-14 '>
            <ShopCartLikes
            heading="You Also may like Products"
            backgroundColor="#fff"
          />
          </div>
          <div className='flex items-center justify-center my-14'>

          </div>
          <FeatureList />
          <NewsLetterSection />
          <Footer1 />
          <Footer2 />
        </div>
      </div>
    </div>
  </>
);

export default Page;
