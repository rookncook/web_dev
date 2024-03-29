import React, { useEffect, useState } from "react";
import axios from "axios";
function Bro() {
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
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <div className="col">
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

      </div>
  );
}
export default Bro;
