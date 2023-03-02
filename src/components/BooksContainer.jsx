import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filters/actions";
import AddBookForm from "./AddBookForm";
import BookCard from "./BookCard";

export default function BooksContainer() {

  const bookData = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const filteredByStatus = (book) => {
    const { status } = filters;
    // if (status === 'All') {
    //   return true;
    // }
    // return book.featured;
    switch (status) {
      case 'Featured':
        return book.featured;
      case 'All':
        return true;
      default:
        return true;
    }
  }

  const handleFeaturedStatus = (status) => {
    dispatch(statusChange(status))
  }

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
              <button onClick={() => handleFeaturedStatus('All')} className="filter-btn active-filter" id="lws-filterAll">All</button>
              <button onClick={() => handleFeaturedStatus('Featured')} className="filter-btn" id="lws-filterFeatured">Featured</button>
            </div>
          </div>
          {/* Alll Books */}
          <div className="lws-bookContainer">
            {/* <AllBooks /> */}
            {
              bookData
                .filter(filteredByStatus)
                .map((book) => <BookCard key={book.id} book={book} />)
            }

          </div>

          {/* Featured Books */}
          {/* <div className="lws-bookContainer">
            <FeaturedBooks />
          </div> */}
        </div>
        <div>
          <AddBookForm />
        </div>
      </div>
    </main>
  )
}

