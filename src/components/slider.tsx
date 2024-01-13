import React, { useState } from "react";
import classes from "@/styles/Home.module.css";

export default function Slider() {
  const spicesimage = [
    "blacksessme.png",
    "chilly.png",
    "cinnamon.png",
    "elaichi.png",
    "fenugreek.png",
    "pimento.png",
    "saffron.png",
    "taj.png",
    "Fennelseeds.png",
    "fenugreek.png",
    "pimento.png",
    "pippalipepper.png",
    "saffron.png"

    // "clove.png",
    // "cubebpepper.jpg",
    // "driedchillies.png",
    // "driedginger.png",
    // "fennel.png",
    // "nutmeg.webp",
    // "pippalipepper.webp",
    // "rosehips.png",
    // "turmeric.jpg",
    // "whitepepper.jpg"
  ];

  const spiceNames = [
    "Cardamom",
    "Black Cardamom",
    "Chilly Flex",
    "Cinnamon",
    "Clove",
    "Cubeb Pepper",
    "Dried Chillies",
    "Dried Ginger",
    "Fennel",
    "Fenugreek Seeds",
    "Nutmeg",
    "Pimento",
    "Pippali Pepper",
    "Rosehips",
    "Saffron",
    "Turmeric",
    "White Pepper"
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`${classes.slider} mt-5 mb-4`}>
        <div className={`${classes.slide_track} ${hoveredIndex !== null && classes.paused}`}>
          {spicesimage.map((imageUrl, index) => (
            <div
              className={`${classes.slide}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className={`${classes.img}`}
                src={imageUrl}
                alt={`image${index + 1}`}
                height={300}
              />
              {hoveredIndex === index && <div className={`${classes.name}`}>{spiceNames[index]}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
