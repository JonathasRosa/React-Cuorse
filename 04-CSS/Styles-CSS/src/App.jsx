import './App.css'
import MyComponent from './components/MyComponent';
import Title from './components/Title';

import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Jonathas");
  const redTitle = false;


  return (
    <>
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{
        color: "blue", 
        padding: "25px",
        borderTop: "2px solid red",
      }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{
        color: "magenta", 
        padding: "25px",
        borderTop: "2px solid red",
      }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*Dynamic Inline CSS*/}
      <h2 style={n < 10 ? {color: "purple"} : {color: "orange"}}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "orange"}}>CSS Dinâmico</h2>
      <h2 style={name === "Jonathas" ? {color: "green", backgroundColor: "black"} : {color: "orange"}}>CSS Dinâmico</h2>
      <h2 style={name !== "Jonathas" ? {color: "purple"} : null}>CSS Dinâmico</h2>
      {/*Class Dynamic CSS*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/*CSS modules*/}
      <Title />
      <h2 className="my_title">Testando</h2>
    </>
  )
}

export default App;
