import { BUY_ICECREAM } from "./iceCreamTypes";
const initialState = {
  numofIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCream: state.numofIceCream * 3,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
