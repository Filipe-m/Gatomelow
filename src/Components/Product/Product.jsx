import React from 'react'
import { useState } from 'react'
import Data from '../DataBase/Products.json'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'
import Pix from '../assets/pix.svg'
import SubHeader from '../Home/SubHeader'
import Related from './Related'

function Product() {
  const id = useParams()
  const productId = id.id - 1
  const data = Data[productId]
  const [size, setsize] = useState('M')

  const toTop = () => window.scrollTo(0, 0)
  toTop()

  return (
    <React.Fragment>
      <NavBar />
      <div className="sm:mt-48 mb-12 font-ProductName  mt-40 w-[80%] mx-auto  text-white">
        <h2 className="text-secundary-color mb-2">
          Inicío / Produtos /{' '}
          <span className=" uppercase font-bold ">{data['name']}</span>
        </h2>
        <div className=" md:flex mt-4 text-white">
          <img
            className="md:w-[40%] mx-auto md:mx-0 md:h-[35rem] mb-4 "
            src={data['image']}
            alt={data['name']}
          />
          <div className="md:w-[40%] mx-auto font-ProductName text-left text-secundary-color">
            <div className=" border-b-[1px] md:border-none border-secundary-color/50 pb-6 ">
              <h1 className="w-full md:mb-6 mb-2 md:text-4xl text-2xl font-normal">
                {data['name']}
              </h1>
              <h2 className="font-bold md:text-4xl text-2xl">
                R${data['price']}
              </h2>
            </div>
            <div className="py-6 grid gap-3 uppercase border-b-[1px] md:border-none border-secundary-color/50 pb-6">
              <h3 className="text-md">
                <span className="font-bold">4</span>x de{' '}
                <span className="font-bold">
                  R$
                  {(parseFloat(data['price']) / 4).toLocaleString('pt-BR', {
                    maximumSignificantDigits: 3
                  })}
                </span>
              </h3>
              <img className='w-16' src={Pix} alt="Pix" />
              <button className='text-left underline uppercase text-main-color text-sm w-fit'>Ver meios de pagamento</button>
            </div>
            <div className='py-6 grid gap-3 uppercase border-b-[1px] md:border-none border-secundary-color/50 pb-6'>
              <h2>Tamanho: <span className='font-bold'>{size}</span></h2>
              <div className='flex text-sm gap-4'>
                <button className={`border-2 px-2 border-main-color py-1 ${size == 'M' ? '': 'opacity-30'}`} onClick={()=> setsize('M')}>M</button>
                <button className={`border-2 px-2 border-main-color py-1 ${size == 'G' ? '': 'opacity-30'}`} onClick={()=> setsize('G')}>G</button>
                <button className={`border-2 px-2 border-main-color py-1 ${size == 'GG' ? '': 'opacity-30'}`} onClick={()=> setsize('GG')}>GG</button>
              </div>
            </div>
            <div className='py-6 flex items-center justify-between gap-3 uppercase border-b-[1px] md:border-none border-secundary-color/50 pb-6'>
              <h2 className='text-sm'>Quantidade:</h2>
              <input className='w-16 h-10 text-black flex text-center' type="number"/>
            </div>
            <button className='uppercase w-full h-12 mt-6 text-white flex justify-center items-center text-center py-6 bg-[#c3a343]'>Comprar</button>
          </div>
        </div>
      </div>
      <Related />
      <SubHeader />
    </React.Fragment>
  )
}

export default Product
