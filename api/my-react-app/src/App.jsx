import React ,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fashion from './component/fashion'

function App() {
const [books, setBooks] = useState([]);
useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>setBooks(data))
}, []);
  return (
    <>
      <div>{
        books.map((b,i)=>(
          <Fashion 
          key={i} props={b}
          imgsrc={b.image}
          title={b.title}
          price={b.price}
          />
        ))
        
        }
        <Fashion/>
  </div>
    </>
  )
}

export default App
