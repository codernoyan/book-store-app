import { STATUSCHANGE, SEARCHBOOK } from "./actionTypes"

export const statusChange = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  }
}


export const searchBook = (bookName) => {
  return {
    type: SEARCHBOOK,
    payload: bookName,
  }
};
