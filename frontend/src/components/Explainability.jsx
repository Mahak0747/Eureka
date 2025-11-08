import React from "react";
import matrixImage from "../assets/5.jpeg"; // ✅ import the image

export default function ConfusionMatrix() {
  return (
    <div className="card mb-4 p-3">
      <h5>ℹ️ About</h5>
      <img
        src={matrixImage} // ✅ use imported variable
        alt="Confusion Matrix"
        className="img-fluid rounded"
      />
      {/* <p>🧠 About the Project</p>
      <p>In today’s digital economy, online transactions are increasing at an unprecedented rate — and so are fraudulent activities. Detecting these frauds in real time is critical to protecting users and financial institutions.</p>
      <p>This project leverages Artificial Intelligence and Machine Learning to build an AI-powered Credit Card Fraud Detection System that identifies suspicious transactions with high accuracy. Using the XGBoost algorithm, the model analyzes transaction patterns across multiple features to determine the likelihood of fraud.</p>
      <p>To enhance interpretability, SHAP (SHapley Additive exPlanations) is integrated to explain model predictions — highlighting which transaction features most influence the model’s decision. This ensures transparency and trust in AI-driven outcomes.</p>
      <p>Our goal is to demonstrate how data-driven intelligence and web technologies can work together to create secure, transparent, and accessible fraud prevention solutions.</p> */}
    </div>
  );
}
