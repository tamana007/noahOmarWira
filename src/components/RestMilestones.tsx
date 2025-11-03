import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Milestone from './Milestone';

function RestMilestones() {
  // const restList=useSelector((state)=>state.Milestone.Milestones)
  const restList = useSelector((state) => state.milestones);
  // console.log('rwfskjfkd',restList);
  
  useEffect(()=>{
    // console.log(restList,'rest list logged');
    
  },[])
  return (
    <div>
      {/* {restList.map((list)=>{return <div>{list.title}</div>})} */}
    </div>
  )
}

export default RestMilestones