import "./App.css";
import { useState } from "react";
import logo from "../src/img/logo.png";
import Button from "./components/Button";

function App() {
  //je crée les variables color
  const violet = "#5c48d3";
  const white = "#ffffff";

  //je crée un état par interrupteur
  const [switch1, setSwitch1] = useState(false);
  // const [switch2, setSwitch2] = useState(false);
  // const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1>Ready to Go</h1>
      </header>

      <main>
        <div className="test">
          {switch1 ? (
            <div className="essai1">
              <Button
                onClick={() => {
                  setSwitch1(true);
                }}
                color={white}
                backGroud={violet}
                text="ON"
              />
              <Button
                onClick={() => {
                  setSwitch1(false);
                }}
                color={violet}
                backGroud={white}
                text="OFF"
              />
            </div>
          ) : (
            <div>
              <Button
                onClick={() => {
                  setSwitch1(true);
                }}
                color={violet}
                backGroud={white}
                text="ON"
              />
              <Button
                onClick={() => {
                  setSwitch1(false);
                }}
                color={white}
                backGroud={violet}
                text="OFF"
              />
            </div>
          )}
        </div>
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
