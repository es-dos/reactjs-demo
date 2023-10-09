
import './App.css';
import {CounterDisplay} from "./CounterDisplay";

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <br />
      <button
        className="counter-button"
        onClick={() => {
          window.alert("Clicked")
        }}
      >Click</button>
    </div>
  );
}

export default App;
