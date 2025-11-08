import React from "react";
import matrixImage from "../assets/3.jpeg"; // ✅ import the image

export default function ModelComparison() {
  return (
    <div className="card mb-4 p-3">
      <h5>⚖️ Model Comparison</h5>
      <img
        src={matrixImage}
        alt="Model Comparison"
        className="img-fluid rounded"
      />
    </div>
  );
}
