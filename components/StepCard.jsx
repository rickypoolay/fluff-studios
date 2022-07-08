import React from "react";

export default function StepCard({ step, desc }) {
  return (
    <div className="step-card">
      <h3>{step}</h3>
      <p>{desc}</p>
    </div>
  );
}
