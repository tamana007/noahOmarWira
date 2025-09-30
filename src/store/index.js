import { configureStore } from "@reduxjs/toolkit";
import milestoneReducer from './slices/milestoneSlice'

export const store=configureStore({
  reducer:{
    milestone:milestoneReducer,
  }
})
export default store;