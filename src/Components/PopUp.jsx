import React from 'react'
import { useState } from 'react'

function popUp() {

  const [open, setopen] = useState(true)

  const continuar = () => setopen(false)

  return (
    <React.Fragment>
      {open && (
        <div>
        <div className='text-black fixed z-[999] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border-purple-800 border-4 md:w-[50%] md:h-[40%] md:text-2xl h-[30%] w-[90%] border-double'>
        <div className='h-full w-full flex items-center justify-between text-center opacity-100 flex-col'>
          <h1 className='p-3'>Este site é uma paródia de <a className='underline text-main-color font-bold ' href="https://www.usecaramelow.com.br/">Gatomelow™</a> , sendo a mesma detentora de todos os direitos de imagens e produtos utilizados</h1>
          <div className=' grid w-[70%]  mb-4 font-ProductName gap-3 h-[40%] '>
          <a className='w-[90%] grid md:hover:scale-110 place-items-center bg-main-color text-black' href="https://www.usecaramelow.com.br/">Ir para Caramelow</a>
          <button className='w-[90%] font-bold md:hover:scale-110 bg-secundary-color text-black' onClick={continuar}>Continuar</button>
          </div>
        </div>
      </div>
    <div className='custom'>
    </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default popUp