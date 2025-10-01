import React, { useRef, useState } from "react";

function CarouselThumnail({ gallary, current, setCurrent }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setContainerScrollLeft] = useState(false);
  const [canScrollRight, setContainerScrillRight] = useState(true);

  const nextThumb = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
    setCurrent((prev) => (prev + 1) % gallary.length);
  };
  //update btn visibility
  const updateScrollBtns=()=>{
    if(containerRef.current){
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setContainerScrollLeft(scrollLeft > 0);
      setContainerScrillRight(scrollLeft + clientWidth < scrollWidth);
    }
  }
  const scroll = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
      setTimeout(updateScrollBtns, 400); // re-check after scroll animation
    }
  };
  

  return (
    <div className="carouselThumbnailWrapper">
    <div
      className="thumbnailContainer"
      ref={containerRef}
      onScroll={updateScrollBtns}
    >
      {gallary.map((item, idx) => (
        <img key={idx} src={item.img} onClick={() => setCurrent(idx)}
        
        className={current === idx ? "active" : ""}
        />
      ))}
    </div>
  
    {canScrollLeft && (
      <button className="navBtn left" onClick={() => scroll(-150)}>{"<"}</button>
    )}
    {canScrollRight && (
      <button className="navBtn right" onClick={() => scroll(150)}>{">"}</button>
    )}
  </div>
  
  );
}

export default CarouselThumnail;
