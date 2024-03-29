import React from 'react'
import Data from '../DataBase/Products.json'
import { Link } from 'react-router-dom'

function Products() {

  const product = Data.map(product => (
    <Link
      to={`/Gatomelow/Produto/${product.id}`}
      href=""
      className="Card text-center gap-2  lg:gap-2 text-[#f8dda4] w-[165px] lg:w-[200px] md:w-[200px] grid place-items-center"
    >
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
    </Link>
  ))

  return (
    <React.Fragment>
      <div className=" mt-4 lg:mt-16 grid lg:grid-cols-4 grid-cols-2 place-items-center lg:mx-40 md:mx-40 mx-4 gap-x-4 lg:gap-x-0 gap-y-12 ">
        {product}
      </div>
      <div className="w-full grid place-items-center my-8 ">
        <Link to='/Gatomelow/Produtos' className=" bg-[#c3a343] grid place-items-center text-white w-[85%] md:w-[30%] h-10 font-ProductName font-normal text-sm tracking-[2px] uppercase ">
          Ver todos os produtos
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Products
