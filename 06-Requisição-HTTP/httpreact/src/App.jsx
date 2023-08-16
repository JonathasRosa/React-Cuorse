/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from "react";
//4 - CustomHook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";

function App() {
  const [ products, setProducts ] = useState([]);
  //4 - CustomHook
  const { data: items, httpConfig, loading } = useFetch(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - Resgatando dados
  // eslint-disable-next-line react-hooks/exhaustive-deps
 // useEffect(() => {
   // async function fetchData(){
     // const res = await fetch(url);
     // const data = await res.json();
      //setProducts(data);
   // }
   // fetchData();
  //}, []);

  //2 - ADD de products
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    };
    //const res = await fetch(url, {
     // method: "POST",
     // headers: {
       // "Content-Type": "application/json"
     // },
      //body: JSON.stringify(product),
    //});
  };
  // 3 - Carregamento dinamico - entender melhor para aplicação.
  httpConfig(products, "POST");

  
  return (
    <>
      <h1>Lista de Produtos</h1>
      {/*6 - loading*/}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
        {items && items.map((product) =>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome: 
              <input 
              type='text' 
              value={name} 
              name='name'
              onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço: 
              <input 
              type='number' 
              value={price} 
              name='price'
              onChange={(e) => setPrice(e.target.value)} />
            </label>
            <button type='submit' value="criar">Criar</button>
          </form>
      </div>
    </>
  )
}

export default App
