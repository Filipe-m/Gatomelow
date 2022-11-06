import React from 'react'
import banner2 from '../assets/banner-1.png'
import banner1 from '../assets/banner-2.png'
import { Carousel } from '../Carousel/Carousel'

function Header() {
  const slides = [banner1, banner2]
  return (
    <div className="Container mt-44  sm:mt-52 ">
      <Carousel
        slides={slides}
        controls
        indicators
        interval={5000}
        autoPlay
        width={1400}
        color={'#030000ac'}
      />
    </div>
  )
}

export default Header
