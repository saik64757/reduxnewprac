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
});

module.exports = iceCreamSlice.reducer;
module.exports.iceActions = iceCreamSlice.actions;
