import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import next from "next";
import { Satisfy } from "next/font/google";
const satisfyfont = Satisfy({
  weight: '400',
  subsets: ["latin"],
  display: 'fallback',
})
const NextJsCarousel = () => {
  const images = [
    {
      src: "c1.webp",
      heading: " Herbs And Spices ",

    },
    {
      src: "c2.webp",
      heading: "The Choice Of Chefs",


    },
    {
      src: "c3.webp",
      heading: " All Organic Spices...",


    },
    {
      src: "c4.webp",
      heading: "We Provide Reliable & Fast Delivery",


    }
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageChange = (index: React.SetStateAction<number>) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <style>{`
   .hei{
    height :100vh;
    width : 100vw;
   }
    `}</style>
      <Carousel
  className="custom"
  selectedItem={selectedImageIndex}
  onChange={handleImageChange}
  showThumbs={false}
  showStatus={false}
  showArrows={false}
  autoPlay={true}
  infiniteLoop={true}
  interval={1500}
  stopOnHover={true}
>
  {images.map((image, index) => (
    <div key={index} className={`override carousel-slide slide${index + 1}`}>
      <img src={image.src} alt={`image${index + 1}`} height={0} className="hei" />
      <div
        className={`legend animated ${index === selectedImageIndex ? "slide-active" : ""}`}
        style={{ animationDelay: `${index * 0.5}s`, animationDuration: '2000ms' }}
      >
        <h2 className={satisfyfont.className}>{image.heading}</h2>
        {/* ... rest of your legend content */}
      </div>
    </div>
  ))}
</Carousel>
</>
  );
};

export default NextJsCarousel;
