import React from 'react'
import NavBar from '../NavBar'
import Header from './Header'
import Products from './Products'
import SubHeader from './SubHeader'
import Footer from '../Footer'
import Whatsapp from '../WhatsApp'
import PopUp from '../PopUp'

function Home() {
  return (
    <React.Fragment>
      <NavBar page={'home'} />
      <Header />
      <Products />
      <SubHeader />
      <PopUp />
    </React.Fragment>
  )
}

export default Home
