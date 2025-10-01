import React, { useEffect, useState } from "react";
import CarouselThumnail from "./CarouselThumnail";
// import {gallaryItems} from '../data/gallary';

function Carousel({ gallaryItems }) {
  const [current, setCurrent] = useState(0);

  //nxt

  const nextSlide = () => {
    setCurrent((prev)=>(prev + 1) % gallaryItems.length);
    console.log("u r in next slide",current);
  };
  const prevSlide = () => {
    console.log("u r in prev slide",current);
    setCurrent((prev)=>(prev - 1 + gallaryItems.length) % gallaryItems.length);

  };
  useEffect(()=>{console.log('current changed',current);
  },[current])
  return (
    <div className="carouselWrapper">
      <div className="mainCrousel">
        <button className="prv" onClick={prevSlide}>{">"}</button>
        <img src={gallaryItems[current].img} alt="first" />
        <button className="nxt" onClick={nextSlide}>{"<"}</button>
      </div>
      <CarouselThumnail gallary={gallaryItems} current={current} setCurrent={setCurrent}/>
    </div>
  );
}

export default Carousel;
