import { useState } from 'react'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Zap from './Components/Zap';

function App() {
  return (
    <div className="bg-white dark:bg-bg-black ">
      <NavBar />
      <Header />
      <Zap />
    </div>
  );
}

export default App
