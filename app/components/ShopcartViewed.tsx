import React from 'react'
import Image from 'next/image'

function SwiperProducts1() {
  const products = [
    {
        id: 1,
        image: {
            src: "/assets/imgs/page/homepage2/camera.png",
            alt: "Ecom"
        },
        link: "shop-single-product-3.html",
        title: "Class 4K UHD (2160P) LED Roku Smart TV HDR",
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
        id: 2,
        image: {
            src: "/assets/imgs/page/homepage2/clock.png",
            alt: "Ecom"
        },
        link: "shop-single-product-3.html",
        title: "HP 11.6\" Chromebook, AMD A4, 4GB RAM, 32GB Storage",
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
        id: 3,
        image: {
            src: "/assets/imgs/page/homepage2/airpod.png",
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
    },
    {
        id: 4,
        image: {
            src: "/assets/imgs/page/homepage2/cat-img-7.png",
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
    <div className='grid grid-rows-4 w-full gap-4 '>
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

export default SwiperProducts1;
