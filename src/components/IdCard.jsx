import React from "react";
import "./IdCard.css"; // Importa o CSS

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} className="id-picture" />
      <div className="id-info">
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height / 100}m</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
