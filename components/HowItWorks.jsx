import React from "react";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <div id="how-it-works">
      <h2>How it works</h2>
      <div className="steps-container">
        <StepCard
          step={"1"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali."
          }
        />
        <StepCard
          step={"2"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali."
          }
        />
        <StepCard
          step={"3"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali."
          }
        />
      </div>
      <button className="btn-filled">Learn more</button>
    </div>
  );
}
