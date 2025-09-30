import {createSlice} from '@reduxjs/toolkit';
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
const initialState={
  milestones:[
    {

      id:1,
      title:"newBorn",
      description:"The moment Noah arrived, our world felt complete",
      img:hospitaDischarge,
      highlight:"First Family Graphic"

    },
    {
      id:2,
      title:"first month",
      description:"Tiny yawns, gentle cuddles, and sleepless nights filled with love.",
      img:oneMonth,
      highlight:"One Months"



    },  {
      id:3,
      title:"two months",
      description:"Smiles that melt our hearts began to light up our days",
      img:twoMonth,
      highlight:"Two Months"


    },  {
      id:5,
      title:"three month",
      description:"Little giggles and curious eyes exploring everything around",
      img:threeMonths,
      highlight:"Three Months"


    },
    {
      id:4,
      title:"four month",
      description:"Every wobble forward felt like a leap of joy for us all",
      img:fourMonth,
      highlight:"Four Months"


    }, {
      id:55,
      title:"Five month",
      description:"Rolling, reaching, and grabbing everything within sight—so curious",
      img:fiveMonth,
      highlight:"Five Months"


    }, {
      id:25,
      title:"six month",
      description:"Playful giggles, stronger little hands, and a love for every new sound",
      img:sixMonths,
      highlight:"Six Months"


    }, {
      id:7,
      title:"seven month",
      description:"Cake in both hands at the park—our determined little foodie!",
      img:sevenMonths,
      highlight:"7 Months"


     }
    // , {
    //   id:2,
    //   title:"first month",
    //   description:"fkjsfl ljfls jflsj",
    //   img:threeMonths

    // }, {
    //   id:2,
    //   title:"first month",
    //   description:"fkjsfl ljfls jflsj",
    //   img:threeMonths

    // }

  ]
}
const milestoneSlice=createSlice({
  name:"milestones",
  initialState,
  reducers:{
    addMilestone:(state,action)=>{
      state.milestones.push(action.payload)
    },
    removeMilestone: (state, action) => {
      state.milestones = state.milestones.filter(
        (m) => m.id !== action.payload
      );
    }
    
    // removeMilestone:(state,action)=>{
    //   state.milestones.filter((m)=>m.id!=action.payload)
    // }
  }
});
export const {addMilestone}=milestoneSlice.actions;
export default milestoneSlice.reducer;
