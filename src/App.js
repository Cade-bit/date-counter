import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [multiCount, setMultiCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleAdd() {
    setCount((c) => c + multiCount);
  }

  function handleMinus() {
    setCount((c) => c - multiCount);
  }

  function handleMAdd() {
    setMultiCount((c) => c + 1);
  }

  function handleMMinus() {
    if (multiCount > 1) setMultiCount((c) => c - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleMMinus}> - </button>
        <span>Add by: {multiCount}'s</span>
        <button onClick={handleMAdd}> + </button>
      </div>
      <div>
        <button onClick={handleMinus}> - </button>
        <span>Count: {count}</span>
        <button onClick={handleAdd}> + </button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is"
            : count > 1
            ? `${count} days from now is`
            : count === 1
            ? `${count} day from now is`
            : `${Math.abs(count)} days ago was`}{" "}
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
}
