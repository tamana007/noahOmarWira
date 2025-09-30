import React, { useEffect, useState } from 'react';
import { gallaryItems } from '../data/gallary';
// import {gallaryItems} from '../data/gallary';


function Carousel() {
  const [current,setCurrent]=useState(0);

  useEffect((prev)=>{
    setCurrent((prev+1)%gallaryItems.length);
  },[])
  return (
    <div className='carouselWrapper'>
      <div className='mainCrousel'>
        <button>p</button>
        <p>img</p>
        <button>n</button>
      </div>
      <div className='crouselThumbnail'>Crousel Thumbnail</div>
    </div>
  )
}

export default Carousel