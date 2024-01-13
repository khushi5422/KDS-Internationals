import React, { useState } from "react";
import classes from "@/styles/Home.module.css";

export default function Slider() {
  const spicesimage = [
    "blackcardemon.png",
    "ginger.png",
    "staranise.png",
    "cinnamon.png","asafoetida.webp","garlic.png",
    "nutmeg.webp",
    "cumin.png",
    "blackpepper.png","clove.png","mustardseeds.png","bayleaf.png",
    "chilly.png","coriander.png","mace.png","poppyseeds.png",
    "greencardamom.png","greenchilly.png"
  ];

  const spiceNames = [
    "Black Cardamom",
    "Ginger",
    "Star Anise",
    "Cinnamon",
    "Asafoetida",
    "Garlic",
    "Nutmeg",
    "Cumin",
    "Black Pepper",
    "Clove",
    "Mustard Seeds",
    "Bay Leaf",
    "Chilly Pepper",
    "Coriander",
    "Mace",
    "Poppy Seeds",
    "Green Cardamon",
    "Green Chilly"
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
