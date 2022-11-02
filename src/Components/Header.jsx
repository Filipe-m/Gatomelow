import React from 'react'
import banner2 from './assets/banner-1.png'
import banner1 from './assets/banner-2.png'
import { Carousel } from './Carousel/Carousel'

function Header() {
  const slides = [banner1, banner2]
  return (
    <div className="Container mt-36 lg:mt-48 sm:mt-48 ">
      <Carousel
        slides={slides}
        controls
        indicators
        interval={5000}
        autoPlay
        width={1400}
      />
    </div>
  )
}

export default Header
