import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import imageByIndex from './imageByIndex'
import Autoplay from 'embla-carousel-autoplay';

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides?: number[]
  options?: EmblaOptionsType
}
const autoplayOptions = {
  delay: 4000, // Delay between slides in milliseconds
  stopOnInteraction: true,
   // Whether to stop autoplay on user interaction
  // ... other options
};
const EmblaCarousel: React.FC<PropType> = (props) => {
  const spiceNames = [
    "Black Cardamom",
    "Black Pepper",
    "Chilly Pepper",
    "Coriander",
    "Cumin",
    "Fennel Seeds",
    "Garlic",
    "Ginger",
    "Green Chilly",
    "Poppy Seeds",
    "Saffron"
    
  ];

  const { slides = [], options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
  const [tweenValues, setTweenValues] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
  
    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  
    // Explicitly return a function that returns void
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onScroll]);
  


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] })
              }}
            >
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
                loading="lazy"
              />
              <div
                className={`embla__slide__overlay ${
                  selectedIndex === index ? 'embla__slide__overlay--active' : ''
                }`}
              >
                {spiceNames[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
