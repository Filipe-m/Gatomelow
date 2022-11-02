 
function CarouselControls({prev, next}) {
  return (
    <div>
      <button className="carousel-control-left left-0 bg-[#030000ac] border-none absolute cursor-pointer text-white w-16 h-12 hidden lg:inline-block md:inline-block top-[50%] text-3xl translate-y-[-50%]" onClick={prev}> ⮜ </button>
      <button className="carousel-control-right right-0 bg-[#030000ac] border-none absolute cursor-pointer text-white w-16 h-12 hidden lg:inline-block md:inline-block top-[50%] text-3xl translate-y-[-50%]" onClick={next}>  ⮞  </button>
    </div>
  )
}

export default CarouselControls