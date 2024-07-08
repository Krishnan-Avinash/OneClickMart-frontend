import { createSlice } from "@reduxjs/toolkit";

// import { useSelector } from "react-redux";
// const userDataOut = useSelector((state) => state.userR.user);
// console.log("userDataOut: ", userDataOut);

import axios from "axios";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
  user: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    async addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.itemList.push({
          name: action.payload.name,
          price: action.payload.price,
          totalPrice: action.payload.totalPrice,
          id: action.payload.id,
          img: action.payload.img,
          quantity: 1,
        });
      }
      state.totalQuantity++;
      console.log("action.payload.userid: ", action.payload.userId);
      console.log("action.payload.id: ", action.payload.id);
      await axios.post(
        "http://localhost:8080/api/oneClickMart/cart/addToCart",
        {
          userId: action.payload.userId,
          itemId: action.payload.id,
        }
      );
    },
    removeFromCart(state, action) {
      const findItem = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      if (findItem.quantity === 1) {
        state.itemList = state.itemList.filter(
          (item) => item.id != action.payload.id
        );
      } else {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
