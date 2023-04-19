const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
      state.numberofIcecreams += action.payload;
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberofIcecreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceActions = iceCreamSlice.actions;
