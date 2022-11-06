import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { useState } from 'react'

function WhatsApp() {
  const [open, setopen] = useState(false)

  const openPopUp = () => setopen(true)
  const closePopUp = () => setopen(false)
  const copy = () =>{
    navigator.clipboard.writeText('fdd56a7c-5f5d-453d-9e6a-da3ce8ab4cdc');
    document.getElementById('copyBtn').innerHTML = 'Copiado!😊'
    document.getElementById('closeBtn').innerHTML = 'Fechar'

  }

  return (
    <React.Fragment>
      {open && (
        <div>
          <div className="text-black fixed z-[999] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border-purple-800 border-4 md:w-[50%] md:h-[40%] md:text-2xl h-[30%] w-[90%] border-double">
            <div className="h-full w-full flex items-center justify-between text-center opacity-100 flex-col">
              <h1 className="p-3">
                Querendo meu zap? 😳 Esse precisamos de um pouco mais de
                intimidade sabe 👉👈. Mas caso queira pagar meu café só me dar
                um trocado no pix:{' '}
                <span className="font-bold">
                  fdd56a7c-5f5d-453d-9e6a-da3ce8ab4cdc
                </span>
              </h1>
              <div className=" grid text-sm w-[70%] mx-auto  mb-4 font-ProductName gap-3 h-[40%] ">
                <button
                  className="w-[90%] font-normal text-center md:hover:scale-110 bg-secundary-color text-black"
                  onClick={closePopUp} id='closeBtn'
                >
                  Sou mal e não vou contribuir
                </button>
                <button id='copyBtn' className="w-[90%] text-xl text-center grid md:hover:scale-110 font-bold place-items-center bg-main-color text-black" onClick={copy}>
                  Copiar código
                </button>
              </div>
            </div>
          </div>
          <div className="custom" onClick={closePopUp}></div>
        </div>
      )}
      <button
        className="fixed bottom-0 right-0 m-4 cur bg-green-400 p-3 rounded-full"
        onClick={openPopUp}
      >
        <span>
          <BsWhatsapp className=" w-6 h-6 fill-white" />
        </span>
      </button>
    </React.Fragment>
  )
}

export default WhatsApp

/* import React, { Component } from 'react'
import { BsWhatsapp } from "react-icons/bs";

export class Whatsapp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Querendo meu zap? 😳 Esse precisamos de um pouco mais de intimidade sabe 👉👈. Mas caso queira pagar meu café só me dar um trocado no pix:        fdd56a7c-5f5d-453d-9e6a-da3ce8ab4cdc'
    }
    this.alerta = this.alerta.bind(this)
  }

  alerta(){
    alert(this.state.message)
  }

  render() {
    return (
      <button className="fixed bottom-0 right-0 m-4 cur bg-green-400 p-3 rounded-full" onClick={this.alerta}>
        <span><BsWhatsapp className=' w-6 h-6 fill-white' /></span>
      </button>
    )
  }
}

export default Whatsapp */
