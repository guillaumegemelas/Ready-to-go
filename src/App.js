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
        {/* 1er bouton -----------------------*/}

        <div className="test">
          <div className="essai1">
            <Button
              onClick={() => {
                setSwitch1(true);
              }}
              textColor={switch1 ? white : violet}
              backGround={switch1 ? violet : white}
              text="ON"
            />
            <Button
              onClick={() => {
                setSwitch1(false);
              }}
              textColor={switch1 ? violet : white}
              backGround={switch1 ? white : violet}
              text="OFF"
            />
          </div>
        </div>

        {/* 2è bouton -----------------------*/}

        <div className="test">
          <div className="essai1">
            <Button
              onClick={() => {
                setSwitch2(true);
              }}
              textColor={switch2 ? white : violet}
              backGround={switch2 ? violet : white}
              text="ON"
            />
            <Button
              onClick={() => {
                setSwitch2(false);
              }}
              textColor={switch2 ? violet : white}
              backGround={switch2 ? white : violet}
              text="OFF"
            />
          </div>
        </div>

        {/* 3è bouton -----------------------*/}

        <div className="test">
          <div className="essai1">
            <Button
              onClick={() => {
                setSwitch3(true);
              }}
              textColor={switch3 ? white : violet}
              backGround={switch3 ? violet : white}
              text="ON"
            />
            <Button
              onClick={() => {
                setSwitch3(false);
              }}
              textColor={switch3 ? violet : white}
              backGround={switch3 ? white : violet}
              text="OFF"
            />
          </div>
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
