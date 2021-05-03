import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        <a
          href="https://github.com/m-kchung/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Min Chung
      </footer>
    </div>
  );
}

export default App;
