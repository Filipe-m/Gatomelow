import React, { useState } from 'react'
import Search from './assets/search.svg'
import Logo from './assets/logo.svg'
import Cart from './assets/cart.svg'
import backIcon from './assets/backIcon.svg'
import SearchMobile from './assets/searchMobile.svg'

function NavBar({page}) {
  const [showSearchBar, setShowSearchBar] = useState(false)


  const forgot = () => {
    alert('O animal do autor não fez/esqueceu de fazer isso')
  }

  const show = () => {
    setShowSearchBar(true)
  }

  const close = () => {
    setShowSearchBar(false)
  }

  return (
    <React.Fragment>
      {showSearchBar && (
        <div className=" transition-all z-50 p-2 flex lg:hidden md:hidden fixed top-0 w-full gap-4 bg-white items-center justify-center">
          <button onClick={close}>
            <img src={backIcon} className="h-11" />
          </button>
          <input className="w-full h-11 text-2xl" type="search" />
          <button onClick={close}>
            <img src={SearchMobile} className="h-11" />
          </button>
        </div>
      )}
      <nav className="fixed top-0 w-full z-30 sm:max-h-48 max-h-36 pb-2 overflow-hidden bg-bg-black">
        <section className=" flex justify-between items-center mt-6 relative mx-4 ">
          <div className=" border-secundary-color/50 border-b-0 md:border-b-[1px] border-x-transparent border-t-transparent w-min flex p-2 max-h-14 rounded-md md:focus-within:border-x-secundary-color md:focus-within:border-t-secundary-color md:focus-within:border-secundary-color border-2 ">
            <input
              type="search"
              placeholder="Buscar"
              className=" bg-transparent lg:w-44 md:w-40 w-0 text-white text-base placeholder:opacity-50"
            />
            <button className="w-max opacity-100 " onClick={show}>
              <img className="lg:w-5 opacity-100 w-6" src={Search} />
            </button>
          </div>
          <div className="flex absolute left-[50%] top-0 translate-x-[-50%] ">
            <img src={Logo} className="lg:w-16 w-11" />
            <h1 className="text-main-color lg:text-6xl md:text-7xl text-4xl font-Tittle ">
              Gatomelow
            </h1>
          </div>
          <div className="flex items-center justify-center ">
            <ul className=" lg:flex text-sm md:flex hidden gap-2 text-secundary-color">
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
          <ul className="text-main-color lg:text-sm text-sm flex  justify-evenly items-center gap-6">
            <li className={` p-2 hover:opacity-50 hover:text-[#fff] ${page === "home" ? 'border-y-[1px] p-2':''}`}>
              <a href="/Gatomelow/">INÍCIO</a>
            </li>
            <li className={` p-2 hover:opacity-50 hover:text-[#fff] ${page === "produtos" ? 'border-y-[1px] p-2':''}`}>
              <a href="/Gatomelow/Produtos">
                PRODUTOS
              </a>
            </li>
            <li className={` p-2 hover:opacity-50 hover:text-[#fff] ${page === "contato" ? 'border-y-[1px] p-2':''}`}>
              <a href="#" onClick={forgot}>
                CONTATO
              </a>
            </li>
            <li className={` p-2 hover:opacity-50 hover:text-[#fff] ${page === "quem somos" ? 'border-y-[1px] p-2':''}`}>
              <a href="#" onClick={forgot}>
                QUEM SOMOS
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
