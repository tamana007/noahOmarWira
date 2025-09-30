import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addMilestone } from "../store/slices/milestoneSlice.js";
import {addMilestone} from '../store/slices/milestoneSlice.js';
import RestMilestones from "./RestMilestones.js";

function AddMilestoneForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

  const handleAddMilestone = (e) => {
    e.preventDefault();

    const newMilestone = {
      id: Date.now(),
      title,
      description: desc,
      img,
    };

    console.log("Adding milestone:", newMilestone);
    dispatch(addMilestone(newMilestone));

    setTitle("");
    setDesc("");
    setImg(null);
  };

  return (
    <form onSubmit={handleAddMilestone}>
      <div className="fieldWrapper">

      <input
        type="text"
        placeholder="Milestone Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) =>
          setImg(URL.createObjectURL(e.target.files[0]))
        }
      />
      <button type="submit">Create Milestone</button>

      <RestMilestones />
      </div>
    </form>
  );
}

export default AddMilestoneForm;
