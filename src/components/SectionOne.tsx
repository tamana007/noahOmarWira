import React from 'react'
import Carousel from './Carousel';
import { gallaryItems } from '../data/gallary';
import MilestoneEditor from './MilestoneEditor';


function sectionOne() {
  return (
    <div className='sectionOnePage'>
      <div className='sectionOneWrapper'>
        <Carousel gallaryItems={gallaryItems}/>
        <MilestoneEditor gallaryItems={gallaryItems}/>
      </div>
    </div>
  )
}

export default sectionOne