import { useDispatch, useSelector } from "react-redux";
import AddBookForm from "./AddBookForm";
import AllBooks from "./AllBooks";

export default function BooksContainer() {

  const bookData = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // const filterByFeatured = (bookData) => {
  //   const { featured } = state;
  //   switch (featured) {
  //     case true:
  //       return bookData.featured;
  //     case false:
  //       return !bookData.featured;
  //     default:
  //       return true;
  //   }
  // };

  // const handleFeaturedStatus = (status) => {
  //   dispatch(featuredStatus(status))
  // }
  
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
              <button className="filter-btn active-filter" id="lws-filterAll">All</button>
              <button className="filter-btn" id="lws-filterFeatured">Featured</button>
            </div>
          </div>
            {/* Alll Books */}
          <div className="lws-bookContainer">
            <AllBooks />
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