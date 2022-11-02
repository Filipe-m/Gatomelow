import React from 'react'
import Search from './assets/search.svg'

function MobileSearchBar(props) {
  if (props.show == 'true'){
    return (
      <div className='fixed w-full text-black  bg-white flex z-50'>
        <p>Back </p>
        <input type="search" name="" id="" placeholder='Pesquisar'/>
        <img src={Search} className='h-16' />
      </div>
    )
  }
}

export default MobileSearchBar