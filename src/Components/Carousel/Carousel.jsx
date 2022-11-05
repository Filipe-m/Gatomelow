import CarouselItem from './CarouselItem'
import { useState, useEffect, useRef } from 'react'
import CarouselControls from './CarouselControls'
import CarouselIndicator from './CarouselIndicator'

export const Carousel = ({ slides, interval = 5000, controls=false, indicators=false, autoPlay = true, width= 1000, color }) => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const slideInterval = useRef()

  const prev = () => {
    stopSlideTimer()
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
    setcurrentSlide(index)
  }

  const next = () => {
    stopSlideTimer()
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
    setcurrentSlide(index)
  }

  const startSlideTimer = () =>{
    if(autoPlay){
      stopSlideTimer()
       slideInterval.current = setInterval(() => {
        setcurrentSlide(currentSlide =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        )
      }, interval)
    }
  }

  const stopSlideTimer = () =>{
    if( autoPlay && slideInterval.current){
      clearInterval(slideInterval.current)
    }
  }

  const switchIndex = (index) =>{
    startSlideTimer()
    setcurrentSlide(index)
  }

  useEffect(() => {
    startSlideTimer()
    return () => stopSlideTimer()
  }, [])

  return (
    <div style={{maxWidth : width}} className="carousel relative mx-auto overflow-hidden">
      <div
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        className="whitespace-nowrap relative transition ease-in-out duration-500 carousel-inner  "
      >
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
        ))}
      </div>
      { indicators && <CarouselIndicator color={color} slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
     { controls && <CarouselControls prev={prev} next={next} />}
    </div>
  )
}
