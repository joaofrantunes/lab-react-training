import React from "react";
import "./DriverCard.css";

const DriverCard = ({ name, rating, img, car }) => {
  // Função para converter a nota em estrelas (arredondando corretamente)
  const getStars = (rating) => {
    const roundedRating = Math.round(rating);
    return "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);
  };

  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-img" />
      <div className="driver-info">
        <h2>{name}</h2>
        <p className="driver-rating">{getStars(rating)}</p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
