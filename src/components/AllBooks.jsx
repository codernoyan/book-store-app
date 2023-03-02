import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/Books/thunk/fetchBooks";
import BookCard from "./BookCard";

export default function AllBooks() {
  const dispatch = useDispatch();
  const bookdata = useSelector((state) => state);
  console.log(bookdata);
  // middleware data fetch with thunk
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch])

  return (
    <div>
      <BookCard />
    </div>
  )
}