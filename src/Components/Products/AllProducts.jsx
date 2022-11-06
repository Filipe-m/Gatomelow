import React from 'react'
import Data from '../DataBase/Products.json'
import { Link } from 'react-router-dom'
import SubHeader from '../Home/SubHeader'
import NavBar from '../NavBar'

function AllProducts() {

  const toTop = () => window.scrollTo(0, 0)
  toTop()

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
      <NavBar page={"produtos"} />
      <div className=" mb-12 sm:mt-52 mt-36 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-items-center lg:mx-40 md:mx-40 mx-4 gap-x-0 gap-y-4 ">
        {product}
      </div>
      <SubHeader />
    </React.Fragment>
  )
}

export default AllProducts