import logo from "./logo.svg";
import "./App.css";
import Toy from "./Components/Toy/Toy.Component";
import React from "react";
import { MyContext } from "./Components/Context/MyContext.Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyContext>
          <Toy NameToy="bobi" />
        </MyContext>
      </header>
    </div>
  );
}

export default App;
