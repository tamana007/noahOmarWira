import { createSlice } from "@reduxjs/toolkit";
import { Autoplay } from "swiper/modules";

import momyPrince from "../../assets/momyPrince.jpeg";
import dadOffice from "../../assets/dadOffice.jpeg";
import wtf from "../../assets/wtf.jpeg";
import firtAttemp from "../../assets/firstAttempt.jpeg";
import spanishBeach from "../../assets/spanishBeach.jpeg";
import reducer from "./milestoneSlice";

const initialState = {
  currentIndex: 1,
  items: [
    {
      id: 1,
      img: momyPrince,
      alt: "Mom & Prince",
      description: "With mom at lab",
    },
    {
      id: 2,
      img: dadOffice,
      alt: "Dad Office",
      description: "Chilling at office",
    },
    {
      id: 3,
      img: wtf,
      alt: "Funny Face",
      description: "Silly little expression",
    },
    {
      id: 4,
      img: firtAttemp,
      alt: "First Try",
      description: "His very first attempt",
    },
    {
      id: 5,
      img: spanishBeach,
      alt: "Beach Day",
      description: "Sunny day at the beach",
    },
  ],
};
const carouselSlice = createSlice({
  initialState,
  name: "carousel",
  reducers: {
    setCuurentIndex:(state,action)=>{state.currentIndex=action.payload},
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.items.length;
    },
    prevSlide: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.items.length) % state.items.length;
    },
    edit: (state,action) => {
      const { id, alt } = action.payload;
      const item = state.items.find((i) => i.id = action.payload);
      if (item) item.alt =alt;
    },
  },
});
    // setCuurentIndex:(state)=>{state.currentIndex==action.payload},
    export const {setCuurentIndex, nextSlide, prevSlide, edit } = carouselSlice.actions;
export default carouselSlice.reducer;
