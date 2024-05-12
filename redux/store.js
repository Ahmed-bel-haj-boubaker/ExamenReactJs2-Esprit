import { wishlistSlice } from "../redux/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: wishlistSlice.reducer,
});

export default store;
