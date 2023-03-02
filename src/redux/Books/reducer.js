import { initialState } from "./initialState";
import { LOADBOOK, ADDBOOK, DELETEBOOK, EDITBOOK, SEARCHBOOK, UPDATEBOOK } from "./actionTypes";

// book reducer function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
};

export default reducer;