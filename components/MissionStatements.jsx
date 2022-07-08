import React from "react";

export default function MissionStatements({ list }) {
  return (
    <div id="mission-statements">
      <h2 className="title">Mission Statements</h2>
      <ol className="list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
