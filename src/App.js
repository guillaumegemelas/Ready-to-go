import "./App.css";
import { useState } from "react";
import logo1 from "../src/img/logo1.png";
import Button from "./components/Button";
import BigButton from "./components/BigButton";

function App() {
  //je crée les variables color
  const violet = "#5c48d3";
  const white = "#ffffff";
  const red = "#D34848";
  const green = "#46AC4A";

  //je crée un état par interrupteur
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <h1>Ready to Go</h1>
      </header>

      <main>
        {/* 1er bouton -----------------------*/}
        <section className="firstcol">
          <div className="test">
            <div className="essai1">
              {/* il faut voir cela comme si on avait un seul bouton avec deux valeurs true et 
            false */}
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
                textColor={!switch1 ? white : violet} //équivalent à {switch1? violet : white}
                backGround={!switch1 ? violet : white}
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
          {/* 4è bouton -----------------------*/}
        </section>
        <div className="secondcol">
          {/* il va falloir faire les conditions pour que le bouton change en fct° des clics 
          tous les switchs des boutons doivent être à true */}
          {!switch1 || !switch2 || !switch3 ? (
            <BigButton textColor={white} backGround={red} text="No Way!" />
          ) : (
            <BigButton textColor={white} backGround={green} text="Go!" />
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
