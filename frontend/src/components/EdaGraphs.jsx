import React from "react";
import matrixImage from "../assets/2.jpeg"; // ✅ import the image

export default function EdaGraphs() {
  return (
    <div className="card mb-4 p-3">
      <h5>📊 Feature Distributions (EDA)</h5>
      <img
        src={matrixImage}
        alt="EDA Graphs"
        className="img-fluid rounded"
      />
    </div>
  );
}
