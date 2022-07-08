import React from "react";

function StatsPercent({ highlight, title, action, value }) {
  return (
    <div id="stats-percent">
      <p>{title}</p>
      <h3 className={`${highlight == true && "highlighted"}`}>{value}</h3>
      <p>{action}</p>
    </div>
  );
}

export default StatsPercent;
