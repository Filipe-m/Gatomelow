import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer'
import Whatsapp from './Components/WhatsApp'
import Product from './Components/Product/Product'
import AllProducts from './Components/Products/AllProducts'
import Contato from './Components/Contato/Contato'
import QuemSomos from './Components/QuemSomos/QuemSomos'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/Gatomelow/" element={<Home />} />
          <Route path="/Gatomelow/Produto/:id" element={<Product />} />
          <Route path="/Gatomelow/Produtos" element={<AllProducts />} />
          <Route path='/Gatomelow/Contato' element={<Contato />} />
          <Route path='/Gatomelow/Sobre' element={<QuemSomos />} />
        </Routes>
        <Footer />
        <Whatsapp />
      </Router>
    </React.Fragment>
  )
}

export default App
