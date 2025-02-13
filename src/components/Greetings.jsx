import React from "react";
import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  let greeting = "";

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <div className="greetings-card">
      {greeting} {children}
    </div>
  );
};

export default Greetings;
