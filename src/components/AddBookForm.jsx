import { useState } from "react"
import { useDispatch } from "react-redux";
import addBookToDB from "../redux/Books/thunk/addBookToDB";

export default function AddBookForm() {
  const dispatch = useDispatch();
  // initial form state
  const [input, setInput] = useState({
    bookName: '',
    author: '',
    imageUrl: '',
    price: '',
    rating: '',
    isFeatured: false,
  });

  // handle input form
  const handleAddBook = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch(addBookToDB(input));

    // form reset
    setInput({
      bookName: '',
      author: '',
      imageUrl: '',
      price: '',
      rating: '',
      isFeatured: false,
    })
  }

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form onSubmit={handleAddBook} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input onChange={(e) => setInput({ ...input, bookName: e.target.value })} required className="text-input" type="text" id="input-Bookname" name="name" value={input.bookName} />
        </div>
        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input onChange={(e) => setInput({ ...input, author: e.target.value })} required className="text-input" type="text" id="input-Bookauthor" name="author" value={input.author} />
        </div>
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input onChange={(e) => setInput({ ...input, imageUrl: e.target.value })} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" value={input.imageUrl} />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input onChange={(e) => setInput({ ...input, price: parseInt(e.target.value) })} required className="text-input" type="number" id="input-Bookprice" name="price" value={input.price} />
          </div>
          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input onChange={(e) => setInput({ ...input, rating: parseInt(e.target.value) })} required className="text-input" type="number" id="input-Bookrating" name="rating" min={1} max={5} value={input.rating} />
          </div>
        </div>
        <div className="flex items-center">
          <input onChange={(e) => setInput({ ...input, isFeatured: e.target.checked })} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" value={input.isFeatured} checked={input.isFeatured === true && true} />
          <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
        </div>
        <button type="submit" className="submit" id="submit">Add Book</button>
      </form>
    </div>
  )
}