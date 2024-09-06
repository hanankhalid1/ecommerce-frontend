"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerSection: React.FC = () => {
  const slides = [
    {
      head: "Hot Right Now",
      title: "Sale Up to 50% Off",
      subtitle: "Mobile Devices",
      description:
        "Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.",
      imageSrc: "/homepage/banner.png",
      buttonText: ["Shop now", "Learn more"],
      buttonLinks: ["shop-grid.html", "shop-grid.html"],
      backgroundColor: "#d4f7ff",
    },
    {
      head: "Trending Now",
      title: "Hot Collection",
      subtitle: "Virtual glasses",
      description:
        "Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.",
      imageSrc: "/homepage/banner-hero-3.png",
      buttonText: ["Shop now", "Learn more"],
      buttonLinks: ["shop-grid.html", "shop-grid.html"],
      backgroundColor: "#f7e5d5",
    },
    {
      head: "Top Sale This Month",
      title: "Big Sale 25%",
      subtitle: "Laptop & PC",
      description:
        "Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.",
      imageSrc: "/homepage/banner-hero-2.png",
      buttonText: ["Shop now", "Learn more"],
      buttonLinks: ["shop-grid.html", "shop-grid.html"],
      backgroundColor: "#dcf4e0",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="lg:my-12 lg:mr-14 lg:ml-6 rounded-2xl">
      <div className="relative flex flex-col lg:flex-row gap-6">
        {/* Left side with image and text */}
        <div
          className="relative w-full h-[510px] bg-gray-200"
          style={{
            backgroundColor: currentSlide.backgroundColor,
            backgroundImage: `url(${currentSlide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-1 flex flex-col justify-center p-6">
            <p className="my-4 text-sm text-[#42528b]">{currentSlide.head}</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-[#42528b]">
              {currentSlide.title}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#42528b]">
              {currentSlide.subtitle}
            </h1>
            <div className="flex flex-row w-[42%]">
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-[#42528b] py-4">{currentSlide.description}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                className="inline-block bg-[#fd9636] hover:bg-[#42528b] text-white font-semibold py-2 px-4 rounded"
                href={currentSlide.buttonLinks[0]}
              >
                {currentSlide.buttonText[0]}
              </a>
              <a
                className="inline-block text-[#42528b] bg-transparent hover:text-[#fd9636] font-semibold py-2 px-4"
                href={currentSlide.buttonLinks[1]}
              >
                {currentSlide.buttonText[1]}
              </a>
            </div>
            <div className="mt-32">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${index === currentSlideIndex ? "bg-[#fd9636]" : "bg-gray-300"}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side with additional content */}
        <div className="lg:w-2/5 flex flex-col gap-9">
          <div
            className="relative bg-cover bg-no-repeat bg-right-bottom rounded-lg p-4 h-[238px] bg-[#fff4f6]"
            style={{
              backgroundImage:
                "url('/assets/imgs/page/homepage1/banner-small-1.png')",
              backgroundSize: "40% auto",
            }}
          >
            <span className="block text-sm uppercase text-red-500 py-2">
              10%<span className="text-blue-500">Sale Off</span>
            </span>
            <h4 className="mt-2 mb-2 text-lg font-semibold text-[#42528b]">
              Apple Watch Serial 7
            </h4>
            <p className="text-xl text-[#42528b] py-2">
              Don&apos;t miss the last opportunity.
            </p>

            <a
              className="inline-block bg-[#42528b] hover:bg-[#fd9636] text-white font-semibold py-2 px-4 rounded"
              href="/shop-grid"
            >
              Shop now
            </a>
          </div>
          <div
            className="relative bg-cover bg-no-repeat bg-right-bottom rounded-lg p-4 h-[238px] bg-[#e0f2ee]"
            style={{
              backgroundImage:
                "url('/assets/imgs/page/homepage1/banner-small-2.png')",
              backgroundSize: "50% auto",
            }}
          >
            <span className="block text-sm uppercase text-red-500 py-1">
              LATEST COLLECTION
            </span>
            <h4 className="mt-2 text-lg font-semibold py-1 text-[#42528b]">
              Apple Devices & Software
            </h4>
            <p className="text-[#42528b] text-xl py-1">
              Don&apos;t miss the last opportunity.
            </p>

            <a
              className="inline-block bg-[#fd9636] hover:bg-[#42528b] text-white font-semibold py-2 px-4 rounded"
              href="/shop-grid"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
