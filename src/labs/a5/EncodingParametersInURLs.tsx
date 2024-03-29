import React, { useState, ChangeEvent,useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {


  const handleInputChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(e.target.value));
  };

  const handleInputChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value));
  };

  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a} onChange={handleInputChangeA} />
      <input type="number" value={b} onChange={handleInputChangeB} />
      <div>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="row">
        <input
          className="form-control mb-2"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          type="number"
        />
      </div>
      <div className="row">
        <input
          className="form-control mb-2"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          type="number"
        />
      </div>
      <div className="row">
        <input className="form-control mb-2" value={result} type="number" readOnly />
      </div>
      <div className="row">
        <h3 className="mb-2">Fetch Result</h3>
      </div>
      <div className="row">
        <button className="btn btn-primary mb-2" onClick={() => fetchSum(a, b)}>
          Fetch Sum of {a} + {b}
        </button>
      </div>
      <div className="row">
        <button className="btn btn-danger mb-2" onClick={() => fetchSubtraction(a, b)}>
          Fetch Substraction of {a} - {b}
        </button>
      </div>
    </div>
    <div className="col-md-6">
      {/* Similarly add content for the second column here */}
    </div>
  </div>
</div>


      </div>
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
