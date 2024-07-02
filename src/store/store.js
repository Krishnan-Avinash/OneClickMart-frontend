import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSice/cartSlice";
import userReducer from "../userSlice/userSlice";

export const store = configureStore({
  reducer: {
    reducer: cartReducer,
    userR: userReducer,
  },
});

export default store;
