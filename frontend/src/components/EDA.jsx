import React from "react";
import matrixImage from "../assets/1.jpeg"; // ✅ import the image
import matrixImage2 from "../assets/1.1.jpeg"; // ✅ import the image
import matrixImage3 from "../assets/1.2.jpeg"; // ✅ import the image

export default function EDA() {
  return (
    <div className="card mb-4 p-3">
        <h5>Feature Distributions (EDA)</h5>
        <img
          src={matrixImage}
          alt="EDA Visualization"
          className="img-fluid rounded"
        />
        <img
          src={matrixImage2}
          alt="EDA Visualization2"
          className="img-fluid rounded"
        />
        <img
          src={matrixImage3}
          alt="EDA Visualization3"
          className="img-fluid rounded"
        />
    </div>    
  );
}