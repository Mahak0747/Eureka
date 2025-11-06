import React, { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    const features = input.split(",").map((x) => parseFloat(x.trim()));
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/explain`, { features });
      setResult(res.data);
    } catch (err) {
      alert("Error calling backend — check console.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "auto" }}>
      <h1>💳 Fraud Detection App</h1>
      <p>Enter features (comma separated):</p>
      <textarea
        rows="4"
        style={{ width: "100%" }}
        placeholder="e.g. 0.1, -0.3, 1.5, ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h3>
            Prediction:{" "}
            {result.prediction === 1 ? "⚠️ Fraudulent" : "✅ Legitimate"}
          </h3>
          <p>
            Probability: {(result.probability * 100).toFixed(2)}%
          </p>

          {result.top_features && (
            <>
              <h4>Top contributing features</h4>
              <div style={{ height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={result.top_features}>
                    <XAxis dataKey="feature" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="impact" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
