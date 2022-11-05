
function CarouselIndicator( {slides, currentIndex, switchIndex, color}) {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] bottom-6 z-10 ">
      {slides.map((_, index)=>(
        <button className={`w-4 z-[999] h-4 border-white bg-[${color}] m-[0.2em] rounded-full cursor-pointer ${currentIndex === index ? '':'opacity-50'}`} onClick={()=> switchIndex(index)}>.</button>
      ))}
    </div>
  )
}

export default CarouselIndicator