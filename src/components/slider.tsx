import React, { useState } from "react";
import classes from "@/styles/Home.module.css";

export default function Slider() {
  const spicesimage = [
    "blackcardemon.webp",
    "ginger.webp",
    "staranise.webp",
    "cinnamon.webp","asafoetida.webp","garlic.webp",
    "nutmeg.webp",
    "cumin.webp",
    "blackpepper.webp","clove.webp","mustardseeds.webp","bayleaf.webp",
    "chilly.webp","coriander.webp","mace.webp","poppyseeds.webp",
    "greencardamom.webp","greenchilly.webp"
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
