import React from "react";
import matrixImage from "../assets/1.jpeg"; // ✅ import the image

export default function ConfusionMatrix() {
  return (
    <div className="card mb-4 p-3">
      <h5>🔢 Confusion Matrix</h5>
      <img
        src={matrixImage} // ✅ use imported variable
        alt="Confusion Matrix"
        className="img-fluid rounded"
      />
    </div>
  );
}
