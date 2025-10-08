import React, { useEffect, useState } from "react";
import CarouselThumnail from "./CarouselThumnail";
import CarouselDescription from "./CarouselDescription";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide ,setCuurentIndex} from "../store/slices/carouselSlice.js";

import withDolly from "../assets/withDolly.jpeg";

function Carousel({ gallaryItems }) {
  const dispatch = useDispatch();
  // const [current, setCurrent] = useState(0);
  const { currentIndex, items } = useSelector((state) => state.carousel);

console.log('item s from redux',items, 'current', currentIndex);


  //nxt

  // const nextSlide = () => {
  //   setCurrent((prev)=>(prev + 1) % gallaryItems.length);
  //   console.log("u r in next slide",current);
  // };
  // const prevSlide = () => {
  //   console.log("u r in prev slide",current);
  //   setCurrent((prev)=>(prev - 1 + gallaryItems.length) % gallaryItems.length);

  // };

  return (
    <div className="carouselWrapper">
      <div className="mainCrousel">
        <button
          className="prv"
          onClick={() => dispatch(prevSlide())}
        >
          {">"}
        </button>
        <img src={items[currentIndex].img}alt="first" />
        <button className="nxt" onClick={()=>dispatch(nextSlide())}>
          {"<"}
        </button>
      </div>
      <CarouselThumnail gallary={gallaryItems} current={currentIndex} setCurrent={setCuurentIndex}/> 
      <CarouselDescription 
        gallary={gallaryItems}
        withDolly={withDolly}
        current={currentIndex}
      />
    </div>
  );
}

export default Carousel;
