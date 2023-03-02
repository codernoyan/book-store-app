import { initialState } from "./initialState";
import { LOADBOOK, ADDBOOK, DELETEBOOK, EDITBOOK, SEARCHBOOK, UPDATEBOOK } from "./actionTypes";

// generate id
const generateId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(maxId, book.id), 0);
  return maxId + 1;
};

// book reducer function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return [
        ...action.payload
      ]
    case ADDBOOK:
      return [
        ...state,
        {
          ...action.payload,
          id: generateId(state),
        }
      ]
    default:
      return state;
  }
};

export default reducer;