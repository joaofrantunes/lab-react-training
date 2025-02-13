import { useState } from "react";
import "./ClickablePicture.css"; 

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);
  const [clickPositions, setClickPositions] = useState([]);

  const handleClick = (event) => {
    setIsClicked(!isClicked);
    const { left, top } = event.target.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    setClickPositions([...clickPositions, { x, y }]);
  };

  return (
    <div className="clickstyle" onClick={handleClick}>
      <img 
        src={isClicked ? imgClicked : img} 
        alt="Clickable" 
        style={{ cursor: 'pointer', width: '200px', height: 'auto' }}
      />
      {clickPositions.map((pos, index) => (
        <div 
          key={index} 
          className="click-circle" 
          style={{ left: pos.x, top: pos.y }}
        />
      ))}
    </div>
  );
}

export default ClickablePicture;