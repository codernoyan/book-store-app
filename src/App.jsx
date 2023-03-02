import { Provider } from 'react-redux'
import './App.css'
import BooksContainer from './components/BooksContainer'
import Navbar from './components/Navbar'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <BooksContainer />
      </div>
    </Provider>
  )
}

export default App
