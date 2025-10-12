import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { edit } from "../store/slices/carouselSlice.js";
// import { useSelector } from "react-redux";

function MilestoneEditor({ gallaryItems }) {
  const{id}=useSelector((state)=>state.carousel.items[0].id)
  // const{id}=useSelector((state)=>state.carousel)
  // console.log('id from store 'id);
  
  const [editCaption, setEditCaption] = useState(null);
  // const [id,setId]=useState(null);
  const dispatch = useDispatch();

  return (
    <div className="detailsWrapper">
      <p>Details</p>
      <form
        className="ctrlBtns"
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(edit(editCaption));
          dispatch(edit({ id: gallaryItems[0].id, alt: editCaption }));

        }}
      >
        {/* <button>Edit {gallaryItems[current].alt}</button> */}
        <button>Edit Caption</button>
        {/* <input type="number" ></input> */}
        <input
          type="text"
          onChange={(e) => {
            setEditCaption(e.target.value); console.log("edit", editCaption);
          }}
        ></input>
        <button type="submit">sbmt</button>
      </form>
    </div>
  );
}

export default MilestoneEditor;
