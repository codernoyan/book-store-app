import initialState from "./initialState";
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

    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);

    case UPDATEBOOK:
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            ...action.payload
          }
        }
      });

    case SEARCHBOOK:
      return state.filter((book) => {
        switch (book.name) {
          case action.payload:
            return book;
          default:
            return true;
        }
      })

    case EDITBOOK:
      return state.find((book) => book.id === action.payload);
    default:
      return state;
  }
};

export default reducer;