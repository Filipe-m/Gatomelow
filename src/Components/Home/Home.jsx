import React from 'react'
import NavBar from '../NavBar'
import Header from './Header'
import Products from './Products'
import SubHeader from './SubHeader'
import Footer from '../Footer'
import Whatsapp from '../WhatsApp'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Products />
      <SubHeader />
    </React.Fragment>
  )
}

export default Home