import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const btnStyle = {
    padding: "8px 20px",
    margin: "0 5px",
    cursor: "pointer",
    color: "white",
    border: "none",
    borderRadius: "6px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#4a00e0" }}>Counter App</h1>

      <h2 style={{ fontSize: "60px", color: count > 0 ? "green" : count < 0 ? "red" : "#333" }}>
        {count}
      </h2>

      <div>
        <button style={{ ...btnStyle, backgroundColor: "#4a00e0" }} onClick={handleIncrement}>+ Increment</button>
        <button style={{ ...btnStyle, backgroundColor: "#e03d00" }} onClick={handleDecrement}>− Decrement</button>
        <button style={{ ...btnStyle, backgroundColor: "#555" }} onClick={handleReset}>↺ Reset</button>
      </div>
    </div>
  );
};

export default App;