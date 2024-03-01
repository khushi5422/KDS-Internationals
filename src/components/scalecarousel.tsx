import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex, { name } from './imageByIndex'
import useEmblaCarousel from 'embla-carousel-react'
const autoplayOptions = {
    delay: 2000, // Delay between slides in milliseconds
  };
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}
const ScaleCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options , [Autoplay(autoplayOptions)])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
                <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScaleCarousel ;
