import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/Books/thunk/fetchBooks";
import BookCard from "./BookCard";

export default function AllBooks() {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.books);
  console.log(bookData);
  // middleware data fetch with thunk
  // useEffect(() => {
  //   dispatch(fetchBooks);
  // }, [dispatch])

  return (
    <>
      {
        bookData.map((book) => <BookCard key={book.id} book={book} />)
      }
    </>
  )
}