const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Reduce Cakes",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Reduces Icecreams",
  };
}

// Lets assume initial State is

const CakeinitialState = { numberofCakes: 10 };
const IceinitialState = { numberoficecreams: 20 };

// Reducers (PrevState,action)=>newState
const cakeReducer = (state = CakeinitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberofCakes: state.numberofCakes - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = IceinitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberoficecreams: state.numberoficecreams - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
