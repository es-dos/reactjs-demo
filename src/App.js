
import './App.css';
import {CounterDisplay} from "./CounterDisplay";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterDisplay
        count={count}
      />
      <br />
      <button
        className="counter-button"
        onClick={() => {
          setCount(count + 1);
        }}
      >Click</button>
    </div>
  );
}

export default App;
