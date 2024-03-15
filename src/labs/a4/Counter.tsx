import React, { useState } from "react";

function Counter() {
  const [count1, setCount] = useState(7);
  console.log(count1);
  
  return (
    <div>
      <h2>Counter: {count1}</h2>
      <button onClick={() => setCount(count1 + 1)} className="btn btn-primary">Up</button>
      <button onClick={() => setCount(count1 - 1)} className="btn btn-primary">Down</button>
    </div>
  );
}

export default Counter;

