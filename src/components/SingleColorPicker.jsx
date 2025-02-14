import React from "react";
import "./SingleColorPicker.css";

function SingleColorPicker({ color, value, onChange }) {
  const handleChange = (e) => {
    let newValue = parseInt(e.target.value, 10) || 0; // Convert to number, avoid leading zeros
    newValue = Math.min(255, Math.max(0, newValue)); // Keep value between 0-255
    onChange(newValue);
  };

  const colorMap = {
    r: "red",
    g: "green",
    b: "blue", // ✅ FIX: Change from "black" to "blue"
  };

  return (
    <div className="single-color-picker">
      <div
        className="color-box"
        style={{ backgroundColor: colorMap[color] }}
      ></div>
      <label>
        {color.toUpperCase()}:
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default SingleColorPicker;
