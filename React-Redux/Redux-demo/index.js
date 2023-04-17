const redux = require("redux");
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.legacy_createStore;
const BindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
const logger = reduxLogger.createLogger();

// type of Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
// Action
// {
//   type: CAKE_ORDERED,
//   Payload: 1
// }

//Action Creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    Payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    Payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    Payload: qty,
  };
}

function restoredIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    Payload: qty,
  };
}

// Reducer Function
// (InitialState,action)=>NewState
const CakeInitialState = {
  numberOfCakes: 10,
};

const IcecreamInitialState = {
  numberOfIcecream: 20,
};

const Cakereducer = (state = CakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.Payload,
      };
    default:
      return state;
  }
};

const IceReducer = (state = IcecreamInitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - action.Payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + action.Payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: Cakereducer,
  ice: IceReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("Initial State", store.getState());
// const unSubscribe = store.subscribe(() =>
//   console.log("Updated State", store.getState())
// );

/* 1 way to dispatch the actions*/
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

const actions = BindActionCreators(
  { orderCake, restockCake, orderIcecream, restoredIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restoredIcecream(3);

// unSubscribe();
