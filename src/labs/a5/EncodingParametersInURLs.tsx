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
      <h3>Path Parameters : Add and Subtract</h3>
      <a
        className="btn btn-primary m-2"
        href={`http://localhost:4000/a5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <h3>Query Parameters : Add and Subtract</h3>
      <a
        className="btn btn-primary m-2"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}
`}
      >
        Add {a} - {b}
      </a>

      <h3>Path Parameters : Mulitply and Divide</h3>
      <a
        className="btn btn-primary m-2"
        href={`http://localhost:4000/a5/multiply/${a}/${b}`}
      >
        Mulitply {a} * {b}
      </a>
      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>

      <h3>Query Parameters: Mulitply and Divide</h3>
      <a
        className="btn btn-primary m-2"
        href={`http://localhost:4000/a5/calculator_mulitply_divide?operation=multiply&a=${a}&b=${b}`}
      >
        Mulitply {a} * {b}
      </a>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator_mulitply_divide?operation=divide&a=${a}&b=${b}
`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}

export default EncodingParametersInURLs;
