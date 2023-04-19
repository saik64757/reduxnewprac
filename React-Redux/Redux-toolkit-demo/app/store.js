const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/iceCream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceReducer,
  },
});

module.exports = store;
