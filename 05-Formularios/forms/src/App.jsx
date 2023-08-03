import './App.css'
import MyForm from './components/MyForm';

function App() {
  return (
    <>
    <h2>Forms</h2>
      <MyForm user={{name: "João", email: "joaorosa@gmail.com"}}/>
    </>
  )
}

export default App;
