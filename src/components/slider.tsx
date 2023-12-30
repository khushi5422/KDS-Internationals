import React from "react";
import classes from "@/styles/Home.module.css";

export default function Slider() {
  const spicesimage = [
    "cardemon.jpg",
    "blackcardemon.png",
    "chillyflex.png",
    "cinnamon.png",
    "clove.png",
    "cubebpepper.jpg",
    "driedchillies.png",
    "driedginger.png",
    "fennel.png",
    "fenugreekseeds.png",
    "nutmeg.webp",
    "pimento.jpg",
    "pippalipepper.webp",
    "rosehips.png",
    "saffron.jpg",
    "turmeric.jpg",
    "whitepepper.jpg"

  ];
  return (
    <>
      <div className={`${classes.slider} mt-5 mb-4`}>
        <div className={`${classes.slide_track}`}>
          {spicesimage.map((imageUrl, index) => (
            <>
              <div className={`${classes.slide}`} key={index}>
                <img
                  className={`${classes.img}`}
                  src={imageUrl}
                  alt={`image${index + 1}`} height={300}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
