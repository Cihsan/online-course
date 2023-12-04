import { configureStore } from "@reduxjs/toolkit";
import courseListReducer from "../redux/features/courseListSlice"

const store = configureStore({
  reducer: {
    courseList: courseListReducer,
  },
});

export default store