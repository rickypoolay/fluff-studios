import React from "react";

export default function Values({ list }) {
  return (
    <div id="values">
      {list.map((item, index) => (
        <div className="value-container" key={index + 1}>
          <h3 className="value-title">Value {index + 1}</h3>
          <p className="value-desc">{item}</p>
        </div>
      ))}
    </div>
  );
}
