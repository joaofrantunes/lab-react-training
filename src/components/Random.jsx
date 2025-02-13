import React from "react";
import "./Random.css"; // Importar o CSS para estilização

function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random-box">
      Random value between {min} and {max} =&gt; {randomValue}
    </div>
  );
}

export default Random;
