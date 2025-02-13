import React from "react";
import "./CreditCard.css"; 

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardTypeLogo = type === "Visa" ? "/images/visa.png" : "/images/master-card.svg";
  const hiddenNumber = `••••   ••••   ••••   ${number.slice(-4)}`;
  const formattedMonth = expirationMonth.toString().padStart(2, "0");
  const formattedYear = expirationYear.toString().slice(-2);

  return (
    <div className="id-credit-card" style={cardStyle}>
      <div className="id-credit-card-logo">
        <img src={cardTypeLogo} alt={type} />
      </div>
      <div className="id-credit-card-number">{hiddenNumber}</div>
      <div className="id-credit-card-details">
        <span>Expires {formattedMonth}/{formattedYear}</span>
        <span>{bank}</span>
      </div>
      <div className="id-credit-card-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
