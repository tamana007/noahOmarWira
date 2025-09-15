import React, { useEffect, useState } from "react";

function HeroSlider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="heroSlider">
      <img
        className="sliderImg"
        src={data[currentIndex].img}
        alt={`slide-${currentIndex}`}
      />

      <div className="controls">
        <button onClick={prevSlide}>⬅️</button>
        <button onClick={nextSlide}>➡️</button>
      </div>
    </div>
  );
}

export default HeroSlider;
