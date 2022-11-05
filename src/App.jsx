import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer'
import Whatsapp from './Components/WhatsApp'
import Product from './Components/Product/Product'
import AllProducts from './Components/Products/AllProducts'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/Gatomelow/" element={<Home />} />
          <Route path="/Gatomelow/Produto/:id" element={<Product />} />
          <Route path="/Gatomelow/Produtos" element={<AllProducts />} />
        </Routes>
        <Footer />
        <Whatsapp />
      </Router>
    </React.Fragment>
  )
}

export default App
