import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <div className="color-preview">
        <div
          className="final-color"
          style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
        ></div>
        <p>rgb({rValue},{gValue},{bValue})</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
