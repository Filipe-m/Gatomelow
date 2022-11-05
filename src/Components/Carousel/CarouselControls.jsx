import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

function CarouselControls({ prev, next }) {
  return (
    <div>
      <button
        className="carousel-control-left left-2 rounded-full bg-[#030000d5] border-none absolute cursor-pointer text-white w-12 h-12 hidden lg:flex items-center justify-center md:flex top-[50%] text-3xl translate-y-[-50%]"
        onClick={prev}
      >
        <TfiAngleLeft />
      </button>
      <button
        className="carousel-control-right right-2 rounded-full bg-[#030000d5] border-none absolute cursor-pointer text-white w-12 h-12 hidden lg:flex items-center justify-center md:flex top-[50%] text-3xl translate-y-[-50%]"
        onClick={next}
      >
        <TfiAngleRight />
      </button>
    </div>
  )
}

export default CarouselControls
