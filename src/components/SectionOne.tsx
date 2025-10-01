import React from 'react'
import Carousel from './Carousel';
import { gallaryItems } from '../data/gallary';


function sectionOne() {
  return (
    <div className='sectionOnePage'>
      <div className='sectionOneWrapper'>
        <Carousel gallaryItems={gallaryItems}/>
        <div>right details</div>
      </div>
    </div>
  )
}

export default sectionOne