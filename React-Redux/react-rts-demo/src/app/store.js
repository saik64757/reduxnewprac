// const reduxLogger = require("redux-logger");
// const configureStore = require("@reduxjs/toolkit").configureStore;
// const cakeReducer = require("../features/cake/cakeSlice");
// const iceReducer = require("../features/iceCream/icecreamSlice");
// const userReducer = require("../features/Users/userSlics");

import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/iceCream/icecreamSlice";
import userReducer from "../features/Users/userSlics";

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
