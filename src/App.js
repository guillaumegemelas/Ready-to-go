import "./App.css";
import logo from "../src/img/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1>Ready to Go</h1>
      </header>

      <main></main>
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
