import React from "react";
import "./NumbersTable.css";

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((num) => (
        <div
          key={num}
          className={`number-box ${num % 2 === 0 ? "even" : "odd"}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
