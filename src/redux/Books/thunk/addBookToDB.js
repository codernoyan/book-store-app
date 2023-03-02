import { addBook } from "../actions";

const addBookToDB = (bookData) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:9000/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ ...bookData })
    });
    const book = await response.json();

    dispatch(addBook(book));
  }
}

export default addBookToDB;