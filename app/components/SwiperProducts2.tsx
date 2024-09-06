import React from 'react';
import Image from 'next/image';

function SwiperProducts2() {
  const baseImagePath = "/assets/imgs/page/homepage1/";

  const products = [
    {
      id: 7,
      category: "Apple",
      brand: "Apple",
      name: "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp7.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "Apple M1 Chip",
        "13-inch display",
      ],
    },
    {
      id: 5,
      category: "Apple",
      brand: "Apple",
      name: "2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp1.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "Retina 5K Display",
        "8GB RAM",
        "256GB SSD",
      ],
    },
    {
      id: 6,
      category: "Philips",
      brand: "Philips",
      name: "Philips H4205 On-Ear Wireless Headphones with 32mm",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp2.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "32mm drivers",
        "Wireless Bluetooth connectivity",
        "20 hours of playtime",
      ],
    },
    {
      id: 8,
      category: "Apple",
      brand: "Apple",
      name: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp3.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "GPS 45mm",
      ],
    },
    {
      id: 9,
      category: "Kami Tech",
      brand: "Kami Tech",
      name: "Kami by YI 4pc 1080p Home Security Cameras",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp4.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "1080p resolution",
        "Home security",
        "4 cameras",
      ],
    },
    {
      id: 10,
      category: "Kami Tech",
      brand: "Kami Tech",
      name: "Kami by YI 4pc 1080p Home Security Cameras",
      price: 2556.3,
      originalPrice: 3225.6,
      rating: 5,
      reviews: 65,
      mainImageUrl: `${baseImagePath}imgsp5.png`,
      ratingImageUrl: "/template/icons/star.svg",
      features: [
        "1080p resolution",
        "Home security",
        "4 cameras",
      ],
    },
  ];

  return (
    <div className=' w-full flex flex-row gap-5 sm:py-2 md:py-4 lg:py-6'>
      <div className='grid sm:grid-cols-4 md:grid-cols-2 gap-4 w-full'>
        {products.map((product) => (
          <div key={product.id} className='flex border rounded overflow-hidden hover:border-black duration-1000'>
            <div className="flex justify-center">
              <Image
                src={product.mainImageUrl}
                alt={product.name}
                width={250}
                height={300}
                className="object-contain md:object-contain sm:object-cover justify-center items-center"
              />
            </div>

            <div className="flex-grow p-4">
              <span className="text-xs text-gray-500">{product.category}</span>
              <br />
              <a
                className="text-sm font-semibold text-[#42528b] hover:underline"
                href="shop-single-product-2.html"
              >
                {product.name}
              </a>
              <div className="rating flex items-center mt-2">
                {Array(product.rating).fill(5).map((_, index) => (
                  <Image
                    key={index}
                    src={product.ratingImageUrl}
                    alt="Rating star"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                ))}
                <span className="text-xs text-[#8c9ec5]">({product.reviews})</span>
              </div>
              <div className="price flex items-baseline mt-2">
                <strong className="text-lg font-bold text-[#42528b] mr-2">
                  ${product.price.toFixed(2)}
                </strong>
                <span className="text-[#8c9ec5] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwiperProducts2;
