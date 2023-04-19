const store = require("../Redux-toolkit-demo/app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/iceCream/icecreamSlice").iceActions;
const fetchUsers = require("./features/Users/userSlics").fetchUsers;

// console.log("Initial State", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State", store.getState())
// );

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restored(3));

// store.dispatch(iceActions.iceOrder());
// store.dispatch(iceActions.iceOrder());
// store.dispatch(iceActions.iceOrder());
// store.dispatch(iceActions.refill(3));

store.dispatch(fetchUsers());
