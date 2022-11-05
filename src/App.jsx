import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer'
import Whatsapp from './Components/WhatsApp'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Gatomelow/" element={<Home />} />
        </Routes>
        <Footer />
        <Whatsapp />
      </Router>
    </React.Fragment>
  )
}

export default App
