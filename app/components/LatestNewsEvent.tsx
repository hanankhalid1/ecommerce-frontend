"use client";
import React, { useState, useEffect } from "react";

const newsData = [
  {
    image: "assets/imgs/page/blog/blog-1.jpg",
    link: "blog-single-2.html",
    category: "Technology",
    categoryLink: "blog-list.html",
    title: "The latest technologies to be used for VR in 2022",
    date: "September 02, 2022",
    readTime: 4,
  },
  {
    image: "assets/imgs/page/blog/blog-2.jpg",
    link: "blog-single.html",
    category: "Technology",
    categoryLink: "blog-list.html",
    title: "How can Web 3.0 Bring Changes to the Gaming?",
    date: "August 30, 2022",
    readTime: 5,
  },
  {
    image: "assets/imgs/page/blog/blog-3.jpg",
    link: "blog-single-3.html",
    category: "Gaming",
    categoryLink: "blog-list.html",
    title: "NFT Blockchain Games That Might Take Off",
    date: "August 25, 2022",
    readTime: 3,
  },
  {
    image: "assets/imgs/page/blog/blog-4.jpg",
    link: "blog-single-2.html",
    category: "Blockchain",
    categoryLink: "blog-list.html",
    title: "Blockchain Gaming And Its Three Challenges",
    date: "August 15, 2022",
    readTime: 7,
  },
  {
    image: "assets/imgs/page/blog/blog-5.jpg",
    link: "blog-single-2.html",
    category: "Development",
    categoryLink: "blog-list.html",
    title: "HTML5 – The Future of Mobile App Development",
    date: "August 12, 2022",
    readTime: 9,
  },
];

const LatestNewsEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 1024) {
      setItemsToShow(4); // Large screens
    } else if (window.innerWidth >= 640) {
      setItemsToShow(2); // Medium screens
    } else {
      setItemsToShow(1); // Small screens
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      items.push(newsData[(currentIndex + i) % newsData.length]);
    }
    return items;
  };

  return (
    <section className="pt-12 mb-12 lg:mr-10 px-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-3">
          <div className="text-start">
            <h3 className="text-3xl font-bold mb-2 text-[#425A8B]">
              Latest News & Events
            </h3>
            <p className="text-[#425A8B]">From our blog, forum</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
              onClick={handleBack}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
              onClick={handleNext}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19l7-7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <hr className="mb-8" />
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleItems().map((item, index) => (
              <div
                key={index}
                className="card shadow-lg rounded-lg overflow-hidden mb-6"
              >
                <div className="image-box">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    className="text-sm text-blue-600 mb-2 block"
                    href={item.categoryLink}
                  >
                    <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold">
                      {item.category}
                    </span>
                  </a>
                  <a
                    className="text-[#425A8B] hover:text-blue-600 transition-colors duration-200"
                    href={item.link}
                  >
                    <h4
                      className="text-lg font-medium"
                      style={{ color: "#425A8B" }}
                    >
                      {item.title}
                    </h4>
                  </a>
                  <div className="mt-4 text-[#425A8B] text-sm flex justify-between">
                    <span style={{ color: "#425A8B" }}>{item.date}</span>
                    <span style={{ color: "#425A8B" }}>
                      {item.readTime} Mins read
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsEvents;
