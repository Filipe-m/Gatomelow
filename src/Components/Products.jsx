import React from 'react'
import Data from './DataBase/Products.json'

function Products() {
  const product = Data.map(product => (
    <div className="Card text-center gap-2  lg:gap-2 text-[#f8dda4] w-[165px] lg:w-[200px] md:w-[200px] grid place-items-center">
      <img
        className=" rounded-lg h-[248px] w-[165px] lg:h-[300px] lg:w-full md:w-full md:h-[300px]  "
        src={product.image}
        alt={product.name}
      />
      <p className=" uppercase w-[80%] h-8 overflow-hidden lg:text-base lg:h-12 md:text-base md:h-12  line-clamp-2 font-ProductName text-xs ">
        {product.name}
      </p>
      <p className="font-ProductName font-bold text-base">R${product.price}</p>
      <p>
        <span className="font-bold">12</span>X de{' '}
        <span className="font-bold">
          R$
          {(parseFloat(product.price) / 12).toLocaleString('pt-BR', {
            maximumSignificantDigits: 3
          })}
        </span>
      </p>
    </div>
  ))

  return (
    <React.Fragment>
    <div className=" mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-items-center lg:mx-40 md:mx-40 mx-4 gap-x-0 gap-y-4 ">
      {product}
    </div>
    <div className='w-full grid place-items-center my-8 '>
      <button className=' bg-[#c3a343] text-white w-[85%] h-10 font-ProductName font-normal text-sm tracking-[2px] uppercase '>Ver todos os produtos</button>
    </div>
    </React.Fragment>
  )
}

export default Products
