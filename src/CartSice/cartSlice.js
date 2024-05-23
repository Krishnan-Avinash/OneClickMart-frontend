import { createSlice } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalQuantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
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
