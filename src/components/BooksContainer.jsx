import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/Books/thunk/fetchBooks";
import { statusChange } from "../redux/filters/actions";
import AddBookForm from "./AddBookForm";
import BookCard from "./BookCard";

export default function BooksContainer() {
  // state for form toggle to edit data
  const [formToggle, setFormToggle] = useState(false)
  // edit form data
  const [editFormData, setEditFormData] = useState(
    {
      name: '',
      author: '',
      thumbnail: '',
      price: '',
      rating: '',
      featured: false,
    }
  );

  const bookData = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // filter data for toggle feature or all data
  const filteredByStatus = (book) => {
    const { status } = filters;
    switch (status) {
      case 'Featured':
        return book.featured;
      case 'All':
        return true;
      default:
        return true;
    }
  };

  // default fetch for get data from server
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch])

  // filter by name
  const filterByName = (book) => {
    const { bookName } = filters;
    if (book.name.toLowerCase().indexOf(bookName.toLowerCase()) === 0) {
      return true;
    } else if (bookName === '') {
      return true;
    }
    return false;
  }

  // toggle feature by all and featured
  const handleFeaturedStatus = (status) => {
    dispatch(statusChange(status))
  };

  // click to edit book book
  const handleEditBook = (id) => {
    const editBook = bookData.find((book) => book.id === id);
    console.log(editBook);
    setFormToggle(true);
    setEditFormData(editBook);
  }

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
              <button onClick={() => handleFeaturedStatus('All')} className={`filter-btn ${filters.status === 'All' && 'active-filter'}`} id="lws-filterAll">All</button>
              <button onClick={() => handleFeaturedStatus('Featured')} className={`filter-btn ${filters.status === 'Featured' && 'active-filter'}`} id="lws-filterFeatured">Featured</button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {/* <AllBooks /> */}
            {
              bookData
                .filter(filteredByStatus)
                .filter(filterByName)
                .map((book) => <BookCard key={book.id} book={book} handleEditBook={handleEditBook} />)
            }
          </div>
        </div>
        <div>
          <AddBookForm
            formToggle={formToggle}
            editFormData={editFormData}
            setFormToggle={setFormToggle}
            setEditFormData={setEditFormData}
          />
        </div>
      </div>
    </main>
  )
}

