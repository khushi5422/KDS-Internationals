export const images: string[] = [
  "blackcardemon.webp",
  "blackpepper.webp",
  "chilly.webp", 
  "coriander.webp",
  "cumin.webp",
  "Fennelseeds.webp",
  "garlic.webp",
  "ginger.webp",
  "greenchilly.webp",
  "poppyseeds.webp",
  "saffron.webp"
  ];

  export const name: string[] = [
    "Black Cardemon",
    "Black Pepper",
    "Chilly", 
    "Coriander",
    "Cumin",
    "Fennel Seeds",
    "Garlic",
    "Ginger",
    "Green Chilly",
    "Poppy Seeds",
    "Saffron"
    ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
