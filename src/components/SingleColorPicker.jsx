import React from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorMap = {
    r: "red",
    g: "green",
    b: "blue",
  };

  return (
    <div className="single-color-picker">
      {/* Corrigido: Agora o background do retângulo usa a cor correta */}
      <div
        className="color-box"
        style={{ backgroundColor: colorMap[color] }}
      ></div>
      
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default SingleColorPicker;
