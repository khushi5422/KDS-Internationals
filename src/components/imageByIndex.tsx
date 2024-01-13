export const images: string[] = [
  "blacksessme.png",
  "chilly.png",
  "cinnamon.png",
  "asafoetida.webp",
  "fenugreek.png",
  "pimento.png",
  "saffron.png",
  "staranise.png",
  "Fennelseeds.png"
  ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
