/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
//1 - Config React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//2 - Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound'
//3 - Components
import Navbar from "./components/Navbar";
import SearchForm from './components/SearchForm';


function App() {
  return (
    <>
      <h1>React Route</h1>
      <BrowserRouter>
      {/* 2 - Links com React-Router*/}
      <Navbar />
      {/* 9 - Search*/}
      <SearchForm />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          {/*6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info/>} />
          {/*4 - Rota dinamica*/}
          <Route path="/products/:id" element={<Product/>} />
          {/*7 - No Match route*/}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
