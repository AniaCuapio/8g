import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstName="Ania" lastName="Cuapio" />
        <ClassGreet firstName="Ania2" lastName="Carpio" />
      </header>
      {/* Crear un componente funcional que renderice una Card
haciendo referencia al post de un blog
Busquen referencias de blogs y la estructura de sus posts
Tips:
- Primero abstraigan el objeto post (esto es el componente y sus props)
- Utilicen reactstrap para pimpearlo */}
      <Layout />
    </div>
  );
}

export default App;
