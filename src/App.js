
import './App.css';
import {CounterDisplay} from "./CounterDisplay";

function App() {
  const count = 0;
  return (
    <div className="App">
      <CounterDisplay
        count={count}
      />
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
