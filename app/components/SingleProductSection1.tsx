import React from "react";
import ProductImageGallery from "./ImageGallery";
import ProductDetails from "./ProductDetails";

function SingleProductSection1() {
  const thumbnails = [
    { src: "/slider/img-gallery-1.jpg", alt: "Thumbnail 1" },
    { src: "/slider/img-gallery-2.jpg", alt: "Thumbnail 2" },
    { src: "/slider/img-gallery-3.jpg", alt: "Thumbnail 3" },
    { src: "/slider/img-gallery-4.jpg", alt: "Thumbnail 4" },
    { src: "/slider/img-gallery-5.jpg", alt: "Thumbnail 5" },
    { src: "/slider/img-gallery-6.jpg", alt: "Thumbnail 6" },
    { src: "/slider/img-gallery-7.jpg", alt: "Thumbnail 7" },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 mb-4 md:mb-0 mr-4">
          <ProductImageGallery
            thumbnails={thumbnails}
            mainImage={thumbnails[0].src}
            discountLabel="-17%"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <ProductDetails thumbnails={thumbnails} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
  <hr className="w-[92%] sm:w-[80%] md:w-[70%] lg:w-[92%] xl:w-[92%] border-gray-300 border-t" />
</div>


    </div>
  );
}

export default SingleProductSection1;
