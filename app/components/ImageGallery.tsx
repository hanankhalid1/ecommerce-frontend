// components/ProductImageGallery.tsx
"use client"
import Image from 'next/image';
import { useState } from 'react';

type Thumbnail = {
  src: string;
  alt: string;
};

type ProductImageGalleryProps = {
  thumbnails: Thumbnail[];
  mainImage: string;
  discountLabel?: string;
};

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  thumbnails,
  mainImage,
  discountLabel,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const handleThumbnailClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {/* Left Thumbnail Section for large screens */}
      <div className="hidden lg:flex lg:flex-col lg:space-y-4 lg:mr-8">
        {thumbnails.slice(0,5).map((thumb, index) => (
          <div key={index} className="w-24 h-22">
            <Image
              className="cursor-pointer border border-gray-200 rounded-md hover:border-orange-400 transition-all duration-300"
              src={thumb.src}
              alt={thumb.alt}
              width={100}
              height={100}
              onClick={() => handleThumbnailClick(thumb.src)}
            />
          </div>
        ))}
      </div>

      {/* Main Image Section */}
      <div className="relative border-2 border-gray-200 rounded-md py-20 px-2">
        {discountLabel && (
          <p className="absolute top-2 left-2 bg-orange-400 text-white text-sm rounded-full px-2 py-1">
            {discountLabel} 
          </p>
        )}
        <Image
          src={selectedImage}
          alt="Main Product Image"
          width={500}
          height={500}
          className="object-contain "
        />
      </div>

      {/* Bottom Thumbnail Section for small screens */}
      <div className="flex lg:hidden mt-4 space-x-2">
        {thumbnails.slice(0, 3).map((thumb, index) => (
          <div key={index} className="w-20 h-20">
            <Image
              className="cursor-pointer border border-gray-200 rounded-md hover:border-orange-400 transition-all duration-300"
              src={thumb.src}
              alt={thumb.alt}
              width={200}
              height={500}
              onClick={() => handleThumbnailClick(thumb.src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
