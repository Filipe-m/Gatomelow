import { useState } from 'react'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import WhatsApp from './Components/WhatsApp';
import Products from './Components/Products';
import SubHeader from './Components/SubHeader';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-bg-black h-[100vh] ">
      <NavBar />
      <Header />
      <Products />
      <SubHeader />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App
