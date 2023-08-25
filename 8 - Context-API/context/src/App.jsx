import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={ <About /> }/>
          <Route path='/products' element={ <Products /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
