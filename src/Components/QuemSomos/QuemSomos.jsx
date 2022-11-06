import React from 'react'
import NavBar from '../NavBar'
import SubHeader from '../Home/SubHeader'
import Manifesto from '../assets/manifesto.png'

function QuemSomos() {
  return (
    <React.Fragment>
      <NavBar page='quem somos' />
      <div className="w-[80%] flex mt-44 sm:mt-52 h-fit mx-auto ">
        <img className='rounded-md mx-auto md:w-[80%] md:max-h-[60rem] max-h-[35rem]' src={Manifesto} alt="" />
      </div>
      <SubHeader />
    </React.Fragment>
  )
}

export default QuemSomos
