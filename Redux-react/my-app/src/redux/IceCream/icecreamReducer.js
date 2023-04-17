import { BUY_ICE } from "./icecreamtypes";

const ice_initialState = {
  numberofIcecream: 20,
};

const iceReducer = (state = ice_initialState, action) => {
  switch (action.type) {
    case BUY_ICE: {
      return {
        ...state,
        numberofIcecream: state.numberofIcecream - 1,
      };
    }
    default:
      return state;
  }
};

export default iceReducer;
