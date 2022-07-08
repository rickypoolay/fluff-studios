import React from "react";

function SubHeadingDescription({ isList, info, title, spacing, bullet }) {
  return (
    <div id="sub-heading-description">
      <h4 className="title">{title}</h4>
      {isList && (
        <ul
          className={`list `}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${spacing ? spacing : "10px"}`,
            listStylePosition: "inside",
          }}
        >
          {info.map((listItem, index) => (
            <li key={index} className={`${bullet ? "bulleted" : ""}`}>
              {listItem}
            </li>
          ))}
        </ul>
      )}
      {!isList && <p>{info}</p>}
    </div>
  );
}

export default SubHeadingDescription;
