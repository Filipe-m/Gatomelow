import { useState } from 'react'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import WhatsApp from './Components/WhatsApp';
import Products from './Components/Products';

function App() {
  return (
    <div className="bg-white dark:bg-bg-black h-[100vh] ">
      <NavBar />
      <Header />
      <Products />
      <WhatsApp />
    </div>
  );
}

export default App
