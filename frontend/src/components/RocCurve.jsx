import React from "react";
import matrixImage from "../assets/4.jpeg"; // ✅ import the image

export default function RocCurve() {
  return (
    <div className="card mb-4 p-3">
      <h5>📈 ROC Curve</h5>
      <img
        src={matrixImage}
        alt="ROC Curve"
        className="img-fluid rounded"
      />
    </div>
  );
}
