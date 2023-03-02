import initialState from "./initialState";
import { LOADBOOK, ADDBOOK, DELETEBOOK, EDITBOOK } from "./actionTypes";

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

    case EDITBOOK:
      const { name, price, author, featured, rating, thumbnail } = action.payload.editFormData;
      return state.map((book) => {
        if (book.id !== action.payload.bookId) {
          return book;
        }
        return {
          ...book,
          name: name,
          price: price,
          author: author,
          featured: featured,
          rating: rating,
          thumbnail: thumbnail,
        }
      })
    default:
      return state;
  }
};

export default reducer;