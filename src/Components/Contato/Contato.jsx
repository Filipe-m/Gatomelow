import React from 'react'
import NavBar from '../NavBar'
import SubHeader from '../Home/SubHeader'
import Logo from '../assets/logo.svg'

function Contato() {
  return (
    <React.Fragment>
      <NavBar page='contato' />
      <div className="w-[80%] mt-44 sm:mt-48 h-[100vh] mx-auto  ">
        <h1 className=" font-ProductName text-secundary-color  ">
          Início / <span className="font-bold">Contato</span>
        </h1>
        <div className="w-full grid md:flex h-full ">
          <div className="w-[55%] md:flex md:flex-col mt-12 items-center hidden ">
            <img className=' h-[50vh]' src={Logo} alt="Logo" />
            <h1 className=' text-center text-main-color font-Tittle text-8xl'>Gatomelow</h1>
          </div>
          <div className="w-[45%] mt-12 ">
            <form className="font-ProductName text-secundary-color">
              <div className="flex flex-col gap-6">
                <div className="grid gap-1">
                  <label htmlFor="text">Nome completo</label>
                  <input className="text-black h-10 rounded-sm p-2 focus:outline-4 focus:outline-double  outline-blue-700" type="text" />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="email">E-mail</label>
                  <input className="text-black h-10 rounded-sm p-2 focus:outline-4 focus:outline-double  outline-blue-700" type="email" />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="tel">
                    Telefone <span className="text-xs">(opcional)</span>
                  </label>
                  <input className="text-black h-10 rounded-sm p-2 focus:outline-4 focus:outline-double  outline-blue-700" type="tel" />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="textarea">
                    Texto <span className="text-xs">(opcional)</span>
                  </label>
                  <textarea className='text-black focus:outline-4 focus:outline-double  outline-blue-700 p-2 h-32' />
                </div>
                <button className=' md:ml-auto my-auto md:my-0  bg-[#c3a343] text-2xl text-white w-full md:w-[40%] h-12 '>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SubHeader />
    </React.Fragment>
  )
}

export default Contato
