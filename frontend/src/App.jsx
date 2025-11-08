import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EdaGraphs from "./components/EdaGraphs";
import ModelComparison from "./components/ModelComparison";
import ConfusionMatrix from "./components/ConfusionMatrix";
import RocCurve from "./components/RocCurve";

export default function App() {
  const [inputs, setInputs] = useState({
    V1: "",
    V4: "",
    V12: "",
    V14: "",
    Amount: ""
  });
  const [result, setResult] = useState("");
  const [probability, setProbability] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Loading...");
    setProbability(null);

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    const data = await res.json();
    setResult(data.prediction || data.error);
    setProbability(data.probability || null);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">Fraud Detection Dashboard</h2>

      <div className="card p-4 shadow-sm mb-5">
        <h5>💳 Enter Transaction Details</h5>
        <form onSubmit={handleSubmit}>
          {["V1", "V4", "V12", "V14", "Amount"].map((v) => (
            <div key={v} className="mb-3">
              <label className="form-label">{v}</label>
              <input
                type="number"
                step="any"
                name={v}
                className="form-control"
                value={inputs[v]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="btn btn-primary w-100">Predict</button>
        </form>

        {result && (
          <div
            className={`alert mt-3 text-center ${
              result.includes("Fraudulent") ? "alert-danger" : "alert-success"
            }`}
          >
            <strong>{result}</strong>
            {probability !== null && (
              <p className="mb-0">💯 Fraud Probability: {probability}%</p>
            )}
          </div>
        )}
      </div>

      {/* Dashboard Tabs */}
      <EdaGraphs />
      <ModelComparison />
      <ConfusionMatrix />
      <RocCurve />

      <p className="text-muted mt-4 small">
        💡 Features used: V1, V4, V12, V14, and Amount — the most influential for fraud detection.
      </p>
    </div>
  );
}
