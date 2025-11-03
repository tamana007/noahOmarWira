import React, { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import { section } from "../data/section";
import Header from "../components/Header/Header";
// import Milestone from "../components/Milestone";
import Milestone from "../components/Milestone";
import { useSelector,useDispatch } from "react-redux";
import yawning from '../assets/yawning.jpeg'
import AddMilestone from "../components/AddMilestone";
import {fetchMilestones} from '../store/slices/milestoneSlice.js'

function Milestones() {
  const dispatch=useDispatch();
  const {milestones,loading,error} = useSelector((state) => state.milestones);
  // const { milestones, loading, error } = useSelector((state) => state.milestones);

  console.log('milestones from millestone page',milestones);
  

  useEffect(()=>{
    console.log('Useeffect riggered');
    
    dispatch(fetchMilestones())
   
    
  },[dispatch])

  console.log('milestones:', milestones);
console.log('loading:', loading);
console.log('error:', error);

  return (
    <div className="milestonePage">
      <Header />
      {/* <Header/> */}
      <HeroSlider data={section} />
      <div className="milestoneWrapper">
        {
        milestones?.map((m) => (
          <Milestone
            id={m.id}
            title={m.title}
            description={m.description}
            img={m.img}
            highlight={m.highlight}
          />
        ))}
      </div>
        <AddMilestone img={yawning}/>
      {/* <div className="addMilestoneWrapper">
        <img src={yawning}/>
      </div> */}
      <div>Milestones component</div>
      {/* <Milestone/> */}

    </div>
  );
}

export default Milestones;
