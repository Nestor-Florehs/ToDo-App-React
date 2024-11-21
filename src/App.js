import logo from './logo.svg';
import './App.css';
// ... existing code ...
import { default as Aside } from './Components/Aside';
import { default as Content } from './Components/Content';
// ... existing code ...

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <h1>Lista de Tareas</h1>
        <div className="principal">
          <Aside />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
