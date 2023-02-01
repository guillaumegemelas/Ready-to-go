import "./App.css";
import { useState } from "react";
import logo from "../src/img/logo.png";

function App() {
  //je crée un état par interrupteur
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1>Ready to Go</h1>
      </header>

      <main>
        <button
          className="switch1"
          onClick={() => {
            setSwitch1(!switch1);
          }}
        >
          ON
        </button>
      </main>

      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by{" "}
          <span> Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
