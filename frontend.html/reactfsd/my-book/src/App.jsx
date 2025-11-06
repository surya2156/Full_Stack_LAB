import "./App.css";
import Navigation from "./component/Link.jsx";
import Book from "./component/book.jsx";
import Login from "./component/login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Book />} />
          <Route path="/" element={<Book />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

