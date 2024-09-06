"use client";

import React, { useState } from "react";

// Define the type for the component props
interface BestSellersProps {
  heading: string;
  subheading: string;
  backgroundColor: string;
}

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
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
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
      "Wireless Bluetooth connectivity",
      "20 hours of playtime",
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
      "Apple M1 chip",
      "8GB RAM, 256GB SSD",
    ],
  },
  {
    id: 4,
    category: "mostviewed",
    brand: "Apple",
    name: "Apple Watch Series 8 [GPS 45mm] premium Smart Watch ",
    price: 530.3,
    originalPrice: 560.6,
    rating: 5,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp6.png",
    features: ["45mm case", "GPS", "Blood oxygen sensor"],
  },
  {
    id: 5,
    category: "topbrands",
    brand: "Kami Tech",
    name: "Kami by YI 4pc 1080p Home Security Cameras with high resolution",
    price: 156.3,
    originalPrice: 250.6,
    rating: 4,
    reviews: 65,
    imageUrl: "assets/imgs/page/homepage1/imgsp7.png",
    features: ["1080p HD resolution", "Night vision", "Motion detection"],
  },
  // Add more product objects here for other categories
];


const categories = [
  { id: "all", label: "All" },
  { id: "bestseller", label: "Best seller" },
  { id: "mostviewed", label: "Most viewed" },
  { id: "topbrands", label: "Top Brands" },
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const BestSellers: React.FC<BestSellersProps> = ({ heading, subheading, backgroundColor }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [shuffledProducts, setShuffledProducts] = useState(products);

  const handleTabClick = (category: string) => {
    setActiveTab(category);

    const filteredProducts = products.filter(
      (product) => category === "all" || product.category === category
    );

    setShuffledProducts(shuffleArray(filteredProducts));
  };

  // Shuffle the products initially
  const filteredProducts = products.filter(
    (product) => activeTab === "all" || product.category === activeTab
  );
  const productsToDisplay = shuffleArray(filteredProducts);

  return (
    <section className="pt-12 mb-12 lg:mr-10 py-4" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#425A8B]">{heading}</h2>
        <div className="flex flex-wrap justify-between text-[#425A8B] items-center mb-4">
          <p className="text-[#425A8B] mb-2 w-full lg:w-auto">{subheading}</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category: any) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-[#425A8B] hover:text-[#425A8B] transition-colors ${activeTab === category.id ? "text-[#425A8B] font-semibold" : ""
                  }`}
                onClick={() => handleTabClick(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <hr className="border-gray-300 mb-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 ">
          {productsToDisplay.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-md p-2 relative group transition-transform transform hover:border-[#425A8B] bg-white"
            >
              <div className="absolute right-2 top-2 flex flex-col space-y-2 p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-white shadow">
                  <HeartIcon />
                </button>
                <button className="p-2 rounded-full bg-white shadow">
                  <CompareIcon />
                </button>
                <button className="p-2 rounded-full bg-white shadow">
                  <QuickViewIcon />
                </button>
                <button className="p-2 rounded-full bg-white shadow">
                  <TrendIcon />
                </button>
              </div>
              <div className="relative">
                <span className="bg-orange-400 text-white text-xs px-1 py-1 rounded-md absolute left-1 top-1">
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
                    className="w-[80%] h-30 object-cover"
                  />
                </a>
              </div>
              <div className="mt-4">
                <a className="text-xs text-[#425A8B] block" href="#">
                  {product.brand}
                </a>
                <a
                  className="text-base text-[#425A8B] font-bold block"
                  href="#"
                >
                  {product.name}
                </a>
                <div className="flex items-center mt-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <img
                      key={i}
                      src="assets/imgs/template/icons/star.svg"
                      alt="Rating"
                      className="w-4 h-4"
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
                  <span className="text-[#425A8B] line-through ml-2">
                    ${product.originalPrice}
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
                <div className="mt-5">
                  <ul className="list-disc pl-4">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="text-xs text-[#425A8B]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
