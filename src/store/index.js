import { configureStore } from "@reduxjs/toolkit";
import milestoneReducer from './slices/milestoneSlice';
import carouselReducer from './slices/carouselSlice';

export const store=configureStore({
  reducer:{
    milestone:milestoneReducer,
    carousel:carouselReducer,
  }
})
export default store;