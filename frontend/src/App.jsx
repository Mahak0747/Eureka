import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";
import LiveDemo from "./components/LiveDemo";
import ConfusionMatrix from "./components/ConfusionMatrix";
import EDA from "./components/EDA";
import ModelComparison from "./components/ModelComparison";
import ROC from "./components/ROC";
import Explainability from "./components/Explainability";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LiveDemo />} />
          <Route path="ConfusionMatrix" element={<ConfusionMatrix />} />
          <Route path="EDA" element={<EDA />} />
          <Route path="ModelComparison" element={<ModelComparison />} />
          <Route path="ModelEvaluation" element={<ROC />} />
          <Route path="Explainability" element={<Explainability />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;