import { LOADBOOK, ADDBOOK, DELETEBOOK, EDITBOOK, SEARCHBOOK, UPDATEBOOK } from "./actionTypes";

// action creators

export const loadBook = (bookData) => {
  return {
    type: LOADBOOK,
    payload: bookData,
  }
};

export const addBook = (bookData) => {
  return {
    type: ADDBOOK,
    payload: bookData
  }
};

export const deleteBook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  }
};

export const editBook = (bookId) => {
  return {
    type: EDITBOOK,
    payload: bookId
  }
};

export const searchBook = (bookId) => {
  return {
    type: SEARCHBOOK,
    payload: bookId,
  }
};

export const updateBook = (bookId) => {
  return {
    type: UPDATEBOOK,
    payload: bookId
  }
};