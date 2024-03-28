import React, { useState, ChangeEvent } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState<number>(34);
  const [b, setB] = useState<number>(23);

  const handleInputChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(e.target.value));
  };

  const handleInputChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value));
  };

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a} onChange={handleInputChangeA} />
      <input type="number" value={b} onChange={handleInputChangeB} />
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
    </div>
  );
}

export default EncodingParametersInURLs;
