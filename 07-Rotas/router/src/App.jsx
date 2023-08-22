/* eslint-disable no-unused-vars */
import './App.css'
//1 - Config React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//2 - Pages
import Home from './pages/Home';
import About from './pages/About';
//3 - Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>React Route</h1>
      <BrowserRouter>
      {/* 2 - Links com React-Router*/}
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
