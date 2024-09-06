"use client";
import React from "react";
import SmallCard from "./smallCard";
import FeaturedCategories from "./FeaturedCategories";

const CardSection = () => {
  const cardData = [
    {
      imageSrc: "/assets/imgs/page/homepage1/smartphone.png",
      altText: "Ecom",
      category: "Smart Phone",
      links: [
        "Phone Accessories",
        "Phone Cases",
        "Postpaid Phones",
        "Refurbished Phones",
      ],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/television.png",
      altText: "Ecom",
      category: "Television",
      links: ["HD DVD Players", "Projection Screens", "Television Accessories"],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/computer.png",
      altText: "Ecom",
      category: "Computers",
      links: [
        "Computer Components",
        "Computer Accessories",
        "Desktops",
        "Monitors",
      ],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/electric.png",
      altText: "Ecom",
      category: "Electronics",
      links: [
        "Office Electronics",
        "Portable Audio & Video",
        "Washing Machine",
      ],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/laptop.png",
      altText: "Ecom",
      category: "Laptop & Tablet",
      links: ["Office laptop", "Gaming laptop", "Laptop accessories"],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/smartwatches.png",
      altText: "Ecom",
      category: "Smartwatches",
      links: ["Sport Watches", "Chronograph Watches", "Kids Watches"],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/gaming.png",
      altText: "Ecom",
      category: "Gaming",
      links: ["Game Controllers", "Gaming Keyboards", "PC Gaming Mice"],
    },
    {
      imageSrc: "/assets/imgs/page/homepage1/outdoor.png",
      altText: "Ecom",
      category: "Outdoor Camera",
      links: [
        "Security & Surveillance",
        "Surveillance DVR Kits",
        "Surveillance NVR Kits",
      ],
    },
  ];

  return (
    <section className="section-box lg:mr-10">
      <div className="container mx-auto px-4">
        <FeaturedCategories />
        <div className="mt-6">
          <div className="flex flex-wrap -mx-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="px-4 mb-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4"
              >
                <SmallCard
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  category={card.category}
                  links={card.links}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
