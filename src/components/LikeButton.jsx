import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    
    const [leftLikes, setLeftLikes] = useState(0);
    const [rightLikes, setRightLikes] = useState(0);
    const [leftColorIndex, setLeftColorIndex] = useState(0);
    const [rightColorIndex, setRightColorIndex] = useState(0);
    const [leftBorderColor, setLeftBorderColor] = useState("white");
    const [rightBorderColor, setRightBorderColor] = useState("white");

    const handleLeftClick = () => {
        setLeftLikes(leftLikes + 1);
        setLeftColorIndex((leftColorIndex + 1) % colors.length);
        setLeftBorderColor("gray");
        setRightBorderColor("white");
    };

    const handleRightClick = () => {
        setRightLikes(rightLikes + 1);
        setRightColorIndex((rightColorIndex + 1) % colors.length);
        setRightBorderColor("gray");
        setLeftBorderColor("white");
    };

    return (
        <div className="likebutton">
            <button 
                onClick={handleLeftClick} 
                style={{ backgroundColor: colors[leftColorIndex], color: 'white', border: `5px solid ${leftBorderColor}` }}
                
            >
                {leftLikes} Likes
            </button>
            <button 
                onClick={handleRightClick} 
                style={{ backgroundColor: colors[rightColorIndex], color: 'white', border: `5px solid ${rightBorderColor}` }}
            >
                {rightLikes} Likes
            </button>
        </div>
    );
}

export default LikeButton;
