import React from 'react'
import HeroSlider from '../components/HeroSlider'
import {section} from '../data/section'

function Milestones() {
  return (
    <div className='milestonePage'>
<HeroSlider data={section}/>

<div>second wholeWidthSection</div>
<div>Milestones component</div>
    


    </div>
  )
}

export default Milestones