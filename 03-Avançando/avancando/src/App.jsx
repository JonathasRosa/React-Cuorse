import './App.css';
import City from './assets/city.jpg';
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';
import ConditionalRender from '../components/ConditionalRender';

function App() {
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
      <ListRender/> 
      <ConditionalRender />
    </div>
  )
}

export default App
