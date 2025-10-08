import React from 'react'

function carouselDescription({gallary,withDolly,current}) {
  return (
    <div className="informationWrapper">
    <div className="descriptionWrapper">
      <img src={withDolly}></img>
      <div className='paragraphWrapper'>

      <p>{gallary[current].description}</p>
      <div>
<hr/>
      <p>{gallary[current].alt}</p>
      </div>
      </div>
    </div>
    <div className='finalContainer'>
      <div className='emjContainer'>👶
    </div>
    <div className='textContainer'>

      <div className='title'><p>  The laughter of a child</p>
        </div>
      <p>Life has a quiet rhythm that often goes unnoticed until we pause long enough to listen.</p>
    </div>
    </div>
  </div>
  )
}

export default carouselDescription