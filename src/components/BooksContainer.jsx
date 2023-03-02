import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filters/actions";
import AddBookForm from "./AddBookForm";
import BookCard from "./BookCard";

export default function BooksContainer() {
  const [formToggle, setFormToggle] = useState(false)
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
  };

  console.log(filters.bookName)

  const filterByName = (book) => {
    const { bookName } = filters;
    if (book.name.toLowerCase().indexOf(bookName.toLowerCase()) === 0) {
      return true;
    } else if (bookName === '') {
      return true;
    }
    return false;
  }



  const handleFeaturedStatus = (status) => {
    dispatch(statusChange(status))
  };

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
          {/* Alll Books */}
          <div className="lws-bookContainer">
            {/* <AllBooks /> */}
            {
              bookData
                .filter(filteredByStatus)
                .filter(filterByName)
                .map((book) => <BookCard key={book.id} book={book} handleEditBook={handleEditBook} />)
            }

          </div>

          {/* Featured Books */}
          {/* <div className="lws-bookContainer">
            <FeaturedBooks />
          </div> */}
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

