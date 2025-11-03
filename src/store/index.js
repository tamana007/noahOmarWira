import { configureStore } from "@reduxjs/toolkit";
import milestoneReducer from './slices/milestoneSlice.js';
import carouselReducer from './slices/carouselSlice';

export const store=configureStore({
  reducer:{
    milestones:milestoneReducer,
    carousel:carouselReducer,
  }
})
export default store;