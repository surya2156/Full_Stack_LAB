import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './component/book.jsx'
import Navbar from './component/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (


    <>
    <div id= "book">
      <img src="" alt="">
    </div>
   <div>
    <Book/>
   </div>
    </>
  )
}

export default App
