
function CarouselItem({slide, stopSlide, startSlide}) {
  return (
      <div className=" carousel-item inline-block w-full" >
        <img className="w-full" src={slide} />
      </div>
  )
}

export default CarouselItem

// Use onMouseEnter={stopSlide} onMouseOut={startSlide} on the div if want to stop sliding when hovering