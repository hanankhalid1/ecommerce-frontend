import React from 'react'
import Image from 'next/image'

function Swipe2BestSeller() {
  const products = [
    {
      id: 1,
      image: {
        src: "/assets/imgs/page/homepage2/cat-img-8.png",
        alt: "Ecom"
      },
      link: "shop-single-product-3.html",
      title: "Lenovo Legion 5i 15.6\" Laptop, Intel Core i5",
      rating: {
        stars: [
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg"
        ],
        count: 65
      },
      price: {
        main: "$150",
        lineThrough: "$187"
      }
    },
    {
      id: 2,
      image: {
        src: "/assets/imgs/page/homepage2/cat-img-1.png",
        alt: "Ecom"
      },
      discountLabel: "-17%",
      link: "shop-single-product-3.html",
      title: "SAMSUNG Galaxy Tab A7 Lite, 8.7\" Tablet 32GB",
      rating: {
        stars: [
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg"
        ],
        count: 65
      },
      price: {
        main: "$2900",
        lineThrough: "$3200"
      }
    },
    {
      id: 3,
      image: {
        src: "/assets/imgs/page/homepage2/cat-img-2.png",
        alt: "Ecom"
      },
      link: "shop-single-product-3.html",
      title: "Apple AirPods Pro with MagSafe Charging",
      rating: {
        stars: [
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg"
        ],
        count: 65
      },
      price: {
        main: "$160",
        lineThrough: "$168"
      }
    },
    {
      id: 4,
      image: {
        src: "/assets/imgs/page/homepage2/cat-img-3.png",
        alt: "Ecom"
      },
      link: "shop-single-product-3.html",
      title: "Razer Power Up Gaming Bundle V2 - Cynosa",
      rating: {
        stars: [
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg",
          "/assets/imgs/template/icons/star.svg"
        ],
        count: 65
      },
      price: {
        main: "$325",
        lineThrough: "$392"
      }
    }
  ];

  return (
    <div className='w-full flex flex-row'>
      
      <div className='grid grid-cols-1 w-full gap-4 '>
        {products.map((product) => (
          <div key={product.id} className='flex  rounded overflow-hidden  hover:border-black duration-1000'>
            <div className="flex justify-center">
              <div className="flex items-center border p-3 border-gray-300 rounded-xl">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-grow ml-3">
              <a
                className="text-sm font-bold text-[#42528b] "
                href={product.link}
              >
                {product.title}
              </a>
              <div className="rating flex items-center mt-2">
                {product.rating.stars.map((star, index) => (
                  <Image
                    key={index}
                    src={star}
                    alt="Rating star"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                ))}
                <span className="text-xs text-[#8c9ec5]">({product.rating.count})</span>
              </div>
              <div className="price flex items-baseline mt-2">
                <strong className="text-sm  font-bold text-[#42528b] mr-2">
                  {product.price.main}
                </strong>
                <span className="text-[#8c9ec5] text-sm line-through">
                  {product.price.lineThrough}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Swipe2BestSeller;
