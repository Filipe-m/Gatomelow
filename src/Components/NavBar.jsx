import React, { Component } from 'react'
import Search from './assets/search.svg'
import Logo from './assets/logo.svg'
import Cart from './assets/cart.svg'

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.forgot = this.forgot.bind(this)
  }

  forgot(){
    alert('O animal do autor não quis/esqueceu de fazer essa parte')
  }

  render() {
    return (
      <nav className="fixed top-0 w-full bg-bg-black">
        <section className=" flex justify-between items-center mt-6 relative mx-4 ">
          <div className=" border-secundary-color border-b-[1px] w-min flex p-2 max-h-14 focus-within:outline-2 outline-secundary-color outline-0 outline">
            <input
              type="search"
              placeholder="Buscar"
              className=" bg-transparent w-44 text-white text-base placeholder:opacity-50"
            />
            <button className="w-max ">
              <img className="w-5" src={Search} />
            </button>
          </div>
          <div className="flex absolute left-[50%] top-0 translate-x-[-50%] ">
            <img src={Logo} className="w-20" />
            <h1 className="text-main-color text-7xl font-Tittle ">Gatomelow</h1>
          </div>
          <div className="flex items-center justify-center ">
            <ul className="flex gap-2 text-secundary-color">
              <li className="border-r-[1px] border-secundary-color pr-2">
                Cadastre-se
              </li>
              <li className="mr-2">Iniciar sessão</li>
            </ul>
            <button>
              <img src={Cart} className="w-6" />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center mx-4 mt-16">
          <ul className="text-main-color flex justify-center items-center gap-6">
            <li className="border-y-[1px] p-2 hover:opacity-50 hover:text-[#fff]">
            <a href="index.html">INÍCIO</a>
            </li>
            <li className="hover:opacity-50 hover:text-[#fff]">
            <a href="#" onClick={this.forgot}>PRODUTOS</a>
            </li>
            <li className="hover:opacity-50 hover:text-[#fff]">
              <a href="#" onClick={this.forgot}>CONTATO</a>
            </li>
            <li className="hover:opacity-50 hover:text-[#fff]">
              <a href="#" onClick={this.forgot}>QUEM SOMOS</a>
            </li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default NavBar
