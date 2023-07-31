import './App.css';
import City from './assets/city.jpg';
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';
import ConditionalRender from '../components/ConditionalRender';
import ShowUserName from '../components/ShowUserName';
import CarDetails from '../components/CarDetails';
import Fragment from '../components/Fragment';
import Container from '../components/Container';
import ExecuteFunction from '../components/ExecuteFunction';
import Message from '../components/Message';
import ChangeMessageState from '../components/ChangeMessageState';

import { useState } from "react";


function App() {
  {/*const name = "Jonathas"*/}
  const [userName] = useState("Rosa");

  const cars = [
    {id:1, brand: "Ferrari", km: 0, color: "Vermelho", new: true},
    {id:2, brand: "BMW", km: 35684, color: "Branco", new: false},
    {id:3, brand: "Mercedes", km: 98000, color: "Prata", new: false}
  ]

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h2>Avançando com React</h2>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paissagem"/>
      </div>
      <div>
        {/* Imagem em Assets */}
        <img src={ City } alt="Cidade"/>
      </div>
      <ManageData /> 
      {/*Lists */}
      <ListRender /> 
      {/*Conditional */}
      <ConditionalRender />
      {/*Props */}
      <ShowUserName name={userName} />
      {/*Destructuring */}
      <CarDetails brand="Fiat" km={82000} color="Azul" newCar={false}/>
      {/*Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Branco"newCar={true}/>
      <CarDetails brand="Kia" km={55000} color="Vermelho"newCar={false}/>
      {/*Loop em array de objetos */}
      {cars.map((car) => (
        // eslint-disable-next-line react/jsx-key
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        km={car.km}
        color={car.color} 
        newCar={car.newCar}/>
      ))}
      <Fragment propFragment="Teste"/>
      {/* Children */}
      <Container myValue="Testando - 1">
        <p>Este é o conteúdo.</p>
      </Container>
      <Container myValue="Testando - 2">
        <h5>Testando o container!</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/><br></br>
      {/*State lift*/}
      <Message msg={message}/>
      <br></br>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}

export default App;
