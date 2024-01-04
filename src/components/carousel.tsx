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
      src: "slider1.webp",
      heading: " Herbs And Spices ",
      description: "This is the first image description.",

    },
    {
      src: "slider2.jpg",
      heading: "The Choice Of Chefs",
      description: "This is the second image description.",

    },
    {
      src: "slider3.jpg",
      heading: " All Organic Spices...",
      description: "This is the third image description.",

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
        interval={2000}
        stopOnHover={true}
      >
        {images.map((image, index) => (
          <div key={index} className="override carousel-slide">
            <img src={image.src} alt={`image${index + 1}`} height={0} className="hei"/>
            <div
              className={`legend ${index === selectedImageIndex ? "slide-active" : ""}`}>
              <h1 className={satisfyfont.className}>{image.heading}</h1>
              <h2>
                {image.description}
              </h2>
              {/* <div className="details">{image.details}</div> */}
              {/* <button className="btn btn-warning">More</button> */}
              <div className="indicators">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`indicator ${i === selectedImageIndex ? "active" : ""
                      }`}
                    onClick={() => handleImageChange(i)}
                  ></span>
                ))}
              </div>
              <div className="pause-indicator">
                <span
                  className={`pause ${selectedImageIndex === index ? "active" : ""
                    }`}
                ></span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default NextJsCarousel;
