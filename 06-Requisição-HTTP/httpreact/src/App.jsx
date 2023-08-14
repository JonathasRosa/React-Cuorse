/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [ products, setProducts ] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //1 - Resgatando dados
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  //2 - ADD de products
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
  };
  // 3 - Carregamento dinamico - entender melhor para aplicação.

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) =>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
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
