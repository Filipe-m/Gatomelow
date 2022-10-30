import React, { Component } from 'react'
import ZapLogo from './assets/zap.svg'

export class Zap extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Querendo meu zap? 😳 Esse precisamos de um pouco mais te intimdiade sabe 👉👈. Mas caso queira pagar meu café só me dar um trocado no pix:        fdd56a7c-5f5d-453d-9e6a-da3ce8ab4cdc'
    }
    this.alerta = this.alerta.bind(this)
  }

  alerta(){
    alert(this.state.message)
  }

  render() {
    return (
      <div className="fixed bottom-0 right-0 m-6 bg-white p-2 rounded-full">
        <img onClick={this.alerta} className="w-12" src={ZapLogo} alt="Whatsapp" />
      </div>
    )
  }
}

export default Zap