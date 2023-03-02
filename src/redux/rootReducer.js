import { combineReducers } from "redux";
import booksReducer from './Books/reducer';
import filtersReducer from './filters/reducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

export default rootReducer;