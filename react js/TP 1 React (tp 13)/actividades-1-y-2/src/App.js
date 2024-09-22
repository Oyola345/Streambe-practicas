import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <div className="App">
      <Contador/>
      <div>
            <h1>Calculemos el cuadrado de tu número</h1>
            <Calculadora />
        </div>
    </div>
  );
}

export default App;
