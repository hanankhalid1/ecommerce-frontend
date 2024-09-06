"use client"
import React, { useState } from 'react';

interface ImageMagnifierProps {
  src:string // Image source URL or path
  alt?: string; // Optional alt text for the image
  width: number; // Width of the image
  height: number; // Height of the image
  zoom?: number; // Optional zoom factor, default is 1.7
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  alt = '',
  width,
  height,
  zoom = 1.7,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  console.log('Image Source:', src); // Debugging line

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          top: `${y - height / (zoom * 2)}px`,
          left: `${x - width / (zoom * 2)}px`,
          pointerEvents: 'none',
          height: `${height / zoom}px`,
          width: `${width / zoom}px`,
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoom}px ${imgHeight * zoom}px`,
          backgroundPositionX: `${-x * zoom + width / (zoom * 2)}px`,
          backgroundPositionY: `${-y * zoom + height / (zoom * 2)}px`,
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
