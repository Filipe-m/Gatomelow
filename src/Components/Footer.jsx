import React from 'react'
import Pix from './assets/pix.svg'
import { GrInstagram } from 'react-icons/gr'
import { TbSend } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <div className=" md:grid md:grid-cols-4 text-white font-ProductName p-4 md:px-16 px-5 bg-main-color w-full">
        <nav>
          <h2 className=" w-full font-bold">Navegação</h2>
          <ul className="w-full mt-2 text-sm gap-3 md:gap-1 grid grid-cols-2 md:grid-cols-1 font-normal">
            <li>
              <a href="#">Inicío</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Quem somos</a>
            </li>
          </ul>
        </nav>
        <div className='mt-6' >
          <h2 className=' w-full font-bold'>Formas de pagamento</h2>
          <div className='bg-white mt-2 w-fit p-2 rounded-md'>
          <img className=' w-24 ' src={Pix} alt="Pix" />
          </div>
        </div>
        <div className='mt-6'>
        <h2 className=' w-full font-bold'>Redes Sociais</h2>
        <div className=' w-8 h-8 mt-2 grid place-items-center rounded-full  bg-white'>
        <a href="https://www.instagram.com/filipe.m_/"><GrInstagram className='w-4 h-4 fill-main-color' /></a>
        </div>
        </div>
        <div className='mt-6'>
        <h2 className=' w-full font-bold'>Newsletter</h2>
        <div className='mt-2 text-black w-fit bg-secundary-color border-white border-2 flex'>
          <input className='rounded-sm w-full font-ProductName font-bold placeholder:font-normal text-white p-1 placeholder:text-white bg-main-color ' type="email" placeholder='E-mail' />
          <button className='outline-black bg-white z-50 '>
          <TbSend fill='red' className='h-full w-8 fill-none stroke-main-color p-1'/>
          </button>
        </div>
        </div>
      </div>
      <footer className=" flex items-center justify-end w-full bg-white">
        <p className="uppercase md:text-left text-center p-6 text-[11px] text-gray-700">
          Copyright Gatomelow - 2345678 - 2022. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Footer
