import React from 'react'
import Image from 'next/image'

interface Product {
  id: number;
  brand: string;
  img: string;
  alt: string;
  link: string;
  title: string;
  stars: number;
  ratingCount: number;
  price: string;
  oldPrice: string;
}

interface ShopCartSwiperProps {
  heading: string;
}

function ShopCartSwiper({ heading }: ShopCartSwiperProps) {
  const products: Product[] = [
    {
      id: 1,
      brand: "Logitech",
      img: "/assets/imgs/page/homepage1/imgsp1.png",
      alt: "Ecom",
      link: "shop-single-product-3.html",
      title: "Class 4K UHD (2160P) LED Roku Smart TV HDR",
      stars: 5,
      ratingCount: 65,
      price: "$2900",
      oldPrice: "$3200",
    },
    {
      id: 2,
      brand: "HP",
      img: "/assets/imgs/page/homepage1/imgsp2.png",
      alt: "Ecom",
      link: "shop-single-product-3.html",
      title: "HP 11.6\" Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      stars: 5,
      ratingCount: 65,
      price: "$160",
      oldPrice: "$168",
    },
    {
      id: 3,
      brand: "Logitech",
      img: "/assets/imgs/page/homepage2/airpod.png",
      alt: "Ecom",
      link: "shop-single-product-3.html",
      title: "Razer Power Up Gaming Bundle V2 - Cynosa",
      stars: 5,
      ratingCount: 65,
      price: "$325",
      oldPrice: "$392",
    },
    {
      id: 4,
      brand: "HP",
      img: "/assets/imgs/page/homepage2/cat-img-7.png",
      alt: "Ecom",
      link: "shop-single-product-3.html",
      title: "Razer Power Up Gaming Bundle V2 - Cynosa",
      stars: 5,
      ratingCount: 65,
      price: "$325",
      oldPrice: "$392",
    },
  ];

  return (
    <div>
    <h4 className="text-2xl font-bold text-[#425a8b] mb-12 p-4">{heading}</h4>
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-6'>
        {products.map((product) => (
          <div key={product.id} className='flex items-center rounded  hover:border-black transition-transform duration-300 transform hover:scale-105 '>
            <div className="flex justify-center mb-3  max-w-[150px]">
              <Image
                src={product.img}
                alt={product.alt}
                width={150}
                height={150}
                className=""
              />
            </div>

            <div className=" ml-4 flex-grow text-start w-full ">
              <div className='text-xs text-[#8c9ec5] mb-2'>
                {product.brand}
              </div>
              <a
                className="text-sm font-semibold text-[#42528b] block mb-2"
                href={product.link}
              >
                {product.title}
              </a>
              <div className="rating flex items-center mb-2">
                {[...Array(product.stars)].map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/imgs/template/icons/star.svg"
                    alt="Rating star"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                ))}
                <span className="text-xs text-[#8c9ec5]">({product.ratingCount})</span>
              </div>
              <div className="price flex items-center">
                <strong className="font-bold text-lg text-[#42528b] mr-2">
                  {product.price}
                </strong>
                <span className="text-[#8c9ec5] line-through">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ShopCartSwiper;
