import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={handlePrev}>◀</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-btn" onClick={handleNext}>▶</button>
    </div>
  );
};

export default Carousel;
