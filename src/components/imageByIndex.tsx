export const images: string[] = [
  "blackcardemon.png",
  "blackpepper.png",
  "chilly.png", 
  "coriander.png",
  "cumin.png",
  "Fennelseeds.png",
  "garlic.png",
  "ginger.png",
  "greenchilly.png",
  "poppyseeds.png",
  "saffron.png"
  ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
