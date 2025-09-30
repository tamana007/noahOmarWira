import React from "react";
import HeroSlider from "../components/HeroSlider";
import { section } from "../data/section";
import Header from "../components/Header/Header";
import Milestone from "../components/Milestone";
import { useSelector } from "react-redux";
import yawning from '../assets/yawning.jpeg'
import AddMilestone from "../components/AddMilestone";

function Milestones() {
  const milestone = useSelector((state) => state.milestone.milestones);

  return (
    <div className="milestonePage">
      <Header />
      {/* <Header/> */}
      <HeroSlider data={section} />
      <div className="milestoneWrapper">
        {milestone.map((m) => (
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
    </div>
  );
}

export default Milestones;
