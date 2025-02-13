import React, { useState } from 'react';
import './Dice.css';

const diceImages = [
    "/images/dice1.png",
    "/images/dice2.png",
    "/images/dice3.png",
    "/images/dice4.png",
    "/images/dice5.png",
    "/images/dice6.png"
];

const Dice = () => {
    const [dice, setDice] = useState("/images/dice-empty.png");

    const rollDice = () => {
        setDice("/images/dice-empty.png"); // Mostra o dado vazio antes de mudar
        setTimeout(() => {
            const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
            setDice(randomDice);
        }, 1000);
    };

    return (
        <div className="dice-container">
            <img 
                src={dice} 
                alt="Dice" 
                onClick={rollDice} 
                className="dice-image"
            />
        </div>
    );
};

export default Dice;
