import { configureStore } from "@reduxjs/toolkit";
import applyNowSlice from "../features/home/redux/slice";

const store = configureStore({
  reducer: {
    applyNow: applyNowSlice.reducer,
  },
});

export default store;
