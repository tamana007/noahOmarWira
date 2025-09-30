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
      <div className="sliderWrapper">
        {data.map((item, idx) => (
          <img
            key={idx}
            className={`sliderImg ${idx === currentIndex ? "active" : ""}`}
            src={item.img}
            alt={`slide-${idx}`}
          />
        ))}
        <div className="sliderTextWrapper">
          <p className="imgCaption">{data[currentIndex].firstParagraph}</p>
        </div>
      </div>

      <div className="controls">
        <button onClick={prevSlide}>⬅️</button>
        <button onClick={nextSlide}>➡️</button>
      </div>
    </div>
  );
}

export default HeroSlider;
