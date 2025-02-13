import React from "react";
import "./BoxColor.css";

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r},${g},${b})`;
  const hexColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  // Define se o texto deve ser preto ou branco
  const textColorClass = r + g + b > 382 ? "light" : "dark";

  return (
    <div className={`box-color ${textColorClass}`} style={{ backgroundColor }}>
      <p>
        rgb({r},{g},{b}) <br /> {hexColor}
      </p>
    </div>
  );
};

export default BoxColor;
