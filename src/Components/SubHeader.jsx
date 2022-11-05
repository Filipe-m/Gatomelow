import React from 'react'
import { GrInstagram } from 'react-icons/gr'
import Subbanner1 from './assets/subheader1.jpg'
import Enviamos from './assets/Enviamos.png'
import Pague from './assets/Pague.png'
import Compre from './assets/Compre.png'
import Tudo from './assets/EnviarPagarComprar.png'
import { Carousel } from './Carousel/Carousel'

function SubHeader() {
  
  const slides = [Enviamos, Pague, Compre]

  return (
    <div>
      <div>
        <img className='w-full z-10 h-16 md:h-40 mt-16 md:mt-24' src={Subbanner1} alt="Banner Gatomelow" />
        <a href='https://www.instagram.com/filipe.m_/' className=' w-full mt-12 h-32 flex items-center justify-center bg-[#0b0705] ' >
          <span className='h-14 md:h-16  md:w-16 w-16 mx-2'>
            <GrInstagram className= ' h-full w-full fill-secundary-color' />
          </span>
          <div className='uppercase text-left block h-12 md:h-16 text-secundary-color'>
            <p className='font-normal text-base md:text-xl' >Siga-me no Instagram</p>
            <p className='font-bold  text-xl md:text-2xl'>@filipe.m_</p>
          </div>
        </a>
      </div>
      <div className='hidden h-48 lg:flex'>
        <img className='h-full w-full' src={Tudo} alt="" />
      </div>
      <div className='flex mt-10 lg:hidden'>
      <Carousel
        slides={slides}
        controls={true}
        indicators={true}
        interval={5000}
        autoPlay
        width={1400}
        color={'#ff0000'}
      />
      </div>
    </div>
  )
}

export default SubHeader