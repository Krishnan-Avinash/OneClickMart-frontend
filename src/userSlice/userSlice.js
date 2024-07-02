import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: {} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      state.user = newUser;
    },
    removeUser(state, action) {
      state.user = {};
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
