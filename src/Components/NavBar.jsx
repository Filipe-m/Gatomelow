import React, { useState } from 'react'
import Search from './assets/search.svg'
import Logo from './assets/logo.svg'
import Cart from './assets/cart.svg'
import backIcon from './assets/backIcon.svg'
import SearchMobile from './assets/searchMobile.svg'

function NavBar() {
  const [SearchBar, ShowSearch] = useState('hidden transition-all')
  const [Nav, BlurNav] = useState('blur-0 transition-all')

  const forgot = () => {
    alert('O animal do autor não fez/esqueceu de fazer isso')
  }

  const show = () => {
    ShowSearch('block transition-all')
    BlurNav('blur lg:blur-0 md:blur-0 transition-all')
  }

  const close = () => {
    ShowSearch('hidden transition-all')
    BlurNav('blur-0 transition-all')
  }

  return (
    <div>
      <div className={SearchBar}>
        <div className=" z-20 p-2 lg:hidden md:hidden fixed top-0 w-full flex gap-4 bg-white items-center justify-center">
          <button onClick={close}>
            <img src={backIcon} className="h-11" />
          </button>
          <input className="w-full h-11 text-2xl" type="search" name="" id="" />
          <button onClick={close}>
            <img src={SearchMobile} className="h-11" />
          </button>
        </div>
      </div>
      <div className={Nav}>
        <nav className="fixed  top-0 w-full z-10 max-h-48 pb-4 overflow-hidden bg-bg-black">
          <section className=" flex justify-between items-center mt-6 relative mx-4 ">
            <div className=" border-secundary-color lg:border-b-[1px] md:border-b-[1px] border-b0 w-min flex p-2 max-h-14 lg:focus-within:outline-2 outline-secundary-color outline-0 outline">
              <input
                type="search"
                placeholder="Buscar"
                className=" bg-transparent lg:w-44 md:w-40 w-0 text-white text-base placeholder:opacity-50"
              />
              <button className="w-max " onClick={show}>
                <img className="lg:w-5 w-6" src={Search} />
              </button>
            </div>
            <div className="flex absolute left-[50%] top-0 translate-x-[-50%] ">
              <img src={Logo} className="lg:w-20 w-11" />
              <h1 className="text-main-color lg:text-7xl md:text-7xl text-4xl font-Tittle ">
                Gatomelow
              </h1>
            </div>
            <div className="flex items-center justify-center ">
              <ul className=" lg:flex md:flex hidden gap-2 text-secundary-color">
                <li className=" border-r-[1px] border-secundary-color pr-2">
                  <a href="#" onClick={forgot}>
                    Cadastre-se
                  </a>
                </li>
                <li className="mr-2 ">
                  <a href="#" onClick={forgot}>
                    Iniciar sessão
                  </a>
                </li>
              </ul>
              <button>
                <img src={Cart} onClick={forgot} className="w-6" />
              </button>
            </div>
          </section>
          <section className="flex justify-center items-center w-full lg:mt-16 mt-6">
            <ul className="text-main-color lg:text-base text-sm flex  justify-evenly items-center gap-6">
              <li className="border-y-[1px] p-2 hover:opacity-50 hover:text-[#fff]">
                <a href="index.html">INÍCIO</a>
              </li>
              <li className="hover:opacity-50 hover:text-[#fff]">
                <a href="#" onClick={forgot}>
                  PRODUTOS
                </a>
              </li>
              <li className="hover:opacity-50 hover:text-[#fff]">
                <a href="#" onClick={forgot}>
                  CONTATO
                </a>
              </li>
              <li className="hover:opacity-50 hover:text-[#fff]">
                <a href="#" onClick={forgot}>
                  QUEM SOMOS
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
