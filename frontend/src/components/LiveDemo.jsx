import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [inputs, setInputs] = useState({
    V1: "",
    V4: "",
    V12: "",
    V14: "",
    Amount: "",
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
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container" style={{ maxWidth: "650px" }}>
        {/* Header */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#007bff" }}>
          💳 Fraud Detection Dashboard
        </h2>

        {/* Main Form Box */}
        <div className="bg-white shadow rounded p-4">
          <h5 className="fw-semibold mb-3">Enter Transaction Details</h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Two-column layout */}
              {["V1", "V4", "V12", "V14"].map((v) => (
                <div className="col-md-6" key={v}>
                  <label className="form-label">{v}</label>
                  <input
                    type="number"
                    step="any"
                    name={v}
                    className="form-control"
                    placeholder={`Enter ${v}`}
                    value={inputs[v]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              {/* Full-width field */}
              <div className="col-12">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  step="any"
                  name="Amount"
                  className="form-control"
                  placeholder="Enter Amount"
                  value={inputs.Amount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Predict Button */}
            <button
              type="submit"
              className="btn w-100 mt-4 fw-semibold text-white"
              style={{
                background:
                  "linear-gradient(90deg, #007bff 0%, #0056d2 100%)",
              }}
            >
              🔍 Predict Transaction
            </button>
          </form>

          {/* Result Section */}
          {result && (
            <div
              className={`mt-4 text-center fw-semibold p-3 rounded ${
                result.includes("Fraudulent")
                  ? "bg-light text-danger border border-danger"
                  : "bg-light text-success border border-success"
              }`}
            >
              {result}
              {probability !== null && (
                <p className="mb-0 mt-1">💯 Fraud Probability: {probability}%</p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-muted mt-3 small">
          💡 Features used: V1, V4, V12, V14, and Amount — most influential for
          fraud detection.
        </p>
      </div>
    </div>
  );
}
