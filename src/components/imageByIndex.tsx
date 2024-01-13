export const images: string[] = [
  "blacksessme.png",
  "chilly.png",
  "cinnamon.png",
  "elaichi.png",
  "fenugreek.png",
  "pimento.png",
  "saffron.png",
  "taj.png",
  "Fennelseeds.png"
  ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
