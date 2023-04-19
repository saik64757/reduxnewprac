import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numberofIcecreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    iceOrder: (state) => {
      state.numberofIcecreams--;
    },
    refill: (state, action) => {
      state.numberofIcecreams += Number(action.payload);
    },
  },
  // adding Extra reducers method 1
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numberofIcecreams--;
  //   },
  // },
  // adding Extra reducers method 2
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberofIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { iceOrder, refill } = iceCreamSlice.actions;
