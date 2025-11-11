import React from "react";
import matrixImage from "../assets/4.jpeg"; // ✅ import the image
import matrixImage2 from "../assets/4.2.jpeg"; // ✅ import the image

export default function ROC() {
  return (
    <div className="card mb-4 p-3">
      <h5>📈 ROC Curve</h5>
      <img
        src={matrixImage}
        alt="ROC Curve"
        className="img-fluid rounded"
      />
      <h5>📈 PRC Curve</h5>
      <img
        src={matrixImage2}
        alt="PRC Curve"
        className="img-fluid rounded"
      />
    </div>
  );
}
