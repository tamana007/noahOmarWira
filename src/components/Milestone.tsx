import React from 'react'

function Milestone({id,img,title,description,highlight}) {
  return (
    // <div className='milestoneWrapper'>

    <div className='singleWrapper'>
      <div className='cardWrapper'>
        <div className='tag'>{title}</div>
        {/* <div className='img'>imagea */}

          <img src={img}></img>
        {/* </div> */}
      </div>
      <div className='miniConsole'><p className='miniText'>Short Highlight</p>
        <p className='price'>{highlight}</p>
      </div>
      <div className='ideal'>{description}</div>
    </div>
    // </div>
  )
}

export default Milestone