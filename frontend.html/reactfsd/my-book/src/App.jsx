import './App.css'
import Navigation from './component/Link.jsx'
import Book from './component/book.jsx'

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Book />
      </div>
    </>
  )
}

export default App
