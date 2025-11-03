import React from 'react';


function Milestone({id,img,title,description,highlight}) {


  // const {error,loading,milestone}=useSelector((state)=>state.milestone)
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

export default Milestone;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMilestones } from "../store/slices/milestoneSlice.js";



// function Milestones() {
//   const dispatch = useDispatch();
//   const { milestones, loading, error } = useSelector(
//     (state) => state.milestones
//   );
// console.log('milestone from milestone component',milestones);


//   useEffect(() => {
//     dispatch(fetchMilestones());
//   }, [dispatch]);
//   useEffect(()=>{console.log('mildstone from tsx',milestones);
//   },[])

//   // if (loading) return <p>Loading milestones...</p>;
//   // if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Milestones</h2>
//       {milestones.map((m) => (
//         <div key={m.id} style={{ marginBottom: "1rem" }}>
//           <img
//             src={m.img}
//             alt={m.title}
//             style={{ width: "150px", borderRadius: "10px" }}
//           />
//           <h3>{m.title}</h3>
//           <p>{m.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Milestones;
