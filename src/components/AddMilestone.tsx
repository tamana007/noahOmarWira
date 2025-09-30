import React from "react";
import AddMilestoneForm from "./AddMilestoneForm";

function AddMilestone({ img }) {
  return (
    <div>
      
    <div className="addMilestoneWrapper">
      <img src={img} />
      <h1>Create Your Own Milestone</h1>
    </div>
      <AddMilestoneForm />
    </div>
  );
}

export default AddMilestone;
