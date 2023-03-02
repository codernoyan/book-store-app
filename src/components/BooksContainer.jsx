import AddBookForm from "./AddBookForm";
import AllBooks from "./AllBooks";
import BookCard from "./BookCard";
import FeaturedBooks from "./FeaturedBooks";

export default function BooksContainer() {
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