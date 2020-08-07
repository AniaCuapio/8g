import React from "react";
import "./App.css";

//Components
//import Clock from "./components/Clock";
import SwitchColor from "./components/SwitchColor/index";

//css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <SwitchColor />
    </div>
  );
}

export default App;
