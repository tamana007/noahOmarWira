import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
// import hospitaDischarge from '../../assets/AngryLook.jpeg'
import AngryLook from '../../assets/AngryLook.jpeg'
// import angryMan from '../../assets/angryMan.jpeg'
import fiveMonth from '../../assets/fiveMonth.jpeg'
import fiveMonths from '../../assets/fiveMonths.jpeg'
import fourMonth from '../../assets/fourMonth.jpeg'
import fourMonths from '../../assets/fourMonths.jpeg'
import holdingHand from '../../assets/holdingHand.jpeg'
import hospitaDischarge from '../../assets/hospitalDischarge.jpeg'
import miniCake from '../../assets/miniCake.jpeg'
import oneMonth from '../../assets/oneMonth.jpeg'
import sevenMonths from '../../assets/sevenMonths.jpeg'
import sevenMonthsNoah from '../../assets/sevenMonthsNoah.jpeg'
import sixMonths from '../../assets/sixMonths.jpeg'
import threemonth from '../../assets/threemonth.jpeg'
import threeMonths from '../../assets/threeMonths.jpeg'
import twoMonth from '../../assets/twoMonth.jpeg'
import twoMonths from '../../assets/twoMonths.jpeg'
import yawning from '../../assets/yawning.jpeg'

import NoahImg from '../../assets/noah.jpeg';
import familySelfie from '../../assets/familySelfie.jpeg';

//firt InitialState
// const initialStateStatic={
//   milestones:[
//     {

//       id:1,
//       title:"newBorn",
//       description:"The moment Noah arrived, our world felt complete",
//       img:hospitaDischarge,
//       highlight:"First Family Graphic"

//     },
//     {
//       id:2,
//       title:"first month",
//       description:"Tiny yawns, gentle cuddles, and sleepless nights filled with love.",
//       img:oneMonth,
//       highlight:"One Months"



//     },  {
//       id:3,
//       title:"two months",
//       description:"Smiles that melt our hearts began to light up our days",
//       img:twoMonth,
//       highlight:"Two Months"


//     },  {
//       id:5,
//       title:"three month",
//       description:"Little giggles and curious eyes exploring everything around",
//       img:threeMonths,
//       highlight:"Three Months"


//     },
//     {
//       id:4,
//       title:"four month",
//       description:"Every wobble forward felt like a leap of joy for us all",
//       img:fourMonth,
//       highlight:"Four Months"


//     }, {
//       id:55,
//       title:"Five month",
//       description:"Rolling, reaching, and grabbing everything within sight—so curious",
//       img:fiveMonth,
//       highlight:"Five Months"


//     }, {
//       id:25,
//       title:"six month",
//       description:"Playful giggles, stronger little hands, and a love for every new sound",
//       img:sixMonths,
//       highlight:"Six Months"


//     }, {
//       id:7,
//       title:"seven month",
//       description:"Cake in both hands at the park—our determined little foodie!",
//       img:sevenMonths,
//       highlight:"7 Months"


//      }
    

//   ]
// }
const BASE_URL = "http://localhost:3001/milestones";
// export const fetchMilestones=createAsyncThunk("milestone/fetchMilestones",async()=>{
//   const res=await axios.get(BASE_URL);
//   console.log('data from axios',res.data);
  
//   console.log('data from milestone',res.data);
//   return res.data;
  

// })

const imageMap = {
  hospitaDischarge,
  oneMonth,
  twoMonth,
  threeMonths,
  fourMonth,
  fiveMonth,
  sixMonths,
  sevenMonths
};


export const fetchMilestones = createAsyncThunk(
  "milestones/fetchMilestones",
  async (_, { rejectWithValue }) => {
    try {
      console.log("🔵 Fetching milestones from:", BASE_URL);
      const res = await axios.get(BASE_URL);
      const dataWithImg=res.data.map((m)=>({...m,img:imageMap[m.img]}))
      console.log("🟢 Response from server:", res.data);
      return dataWithImg;
    } catch (err) {
      console.error("🔴 Error fetching milestones:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// ✅ Add new milestone
export const addMilestone = createAsyncThunk(
  "milestones/addMilestone",
  async (newMilestone) => {
    const response = await axios.post(BASE_URL, newMilestone);
    return response.data;
  }
);


const milestoneSlice=createSlice({
  name:"milestones",
  initialState:{milestones:[],
    loading:false,
    error:null,
  },
  reducers:{

  },
  // extraReducers:(builder)=>{
  //   //get all milestones
  //   builder
  //   .addCase(fetchMilestones.pending,(state)=>state.loading=true)
  //   .addCase(fetchMilestones.fulfilled,(state,action)=>{state.loading=false;state.milestones=action.payload;})
  //   .addCase(fetchMilestones.rejected,(state,action)=>{state.loading=false;state.error=action.error.message})
  //   .addCase(addMilestone.fulfilled,(state,action)=>{state.milestones.push(action.payload)})
  // }


  extraReducers: (builder) => {
    builder
      // 🕓 Fetch milestones
      .addCase(fetchMilestones.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMilestones.fulfilled, (state, action) => {
        state.loading = false;
        state.milestones = action.payload; // ✅ mutate directly
        state.error = null;
      })
      .addCase(fetchMilestones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  
      // ➕ Add milestone
      .addCase(addMilestone.fulfilled, (state, action) => {
        state.milestones.push(action.payload); // ✅ mutate directly
      });
  }
  
  // reducers:{
  //   addMilestone:(state,action)=>{
  //     state.milestones.push(action.payload)
  //   },
  //   removeMilestone: (state, action) => {
  //     state.milestones = state.milestones.filter(
  //       (m) => m.id !== action.payload
  //     );
  //   }
    
    // removeMilestone:(state,action)=>{
    //   state.milestones.filter((m)=>m.id!=action.payload)
    // }
  // }
});
// export const {addMilestone}=milestoneSlice.actions;
// export  {fetchMilestone} milestoneSlice.actions;

export default milestoneSlice.reducer;
