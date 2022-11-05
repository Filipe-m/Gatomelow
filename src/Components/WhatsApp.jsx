import React, { Component } from 'react'
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

export default Whatsapp