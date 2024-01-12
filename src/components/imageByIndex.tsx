export const images: string[] = [
    '/corianderseeds.png',
    '/fennelseeds.png',
    '/greenpeppercorns.png',
    '/rosehip.png',
    '/saffron.png',
    '/sesme.png'
  ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
