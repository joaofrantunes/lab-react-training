import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";
import "./RGBColorPicker.css";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="rgb-picker">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => setRValue(value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => setGValue(value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => setBValue(value)}
      />
      <div className="final-color-display">
        <div
          className="color-box"
          style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}
        ></div>
        <p>rgb({rValue},{gValue},{bValue})</p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
