import React from "react";
import './book.css';
function Book(props) {
    return (
        <div id="book">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-suBokYMcH0MW9PH9OCJXG7DF6dA554tgA&s" alt=""widht={200} height={150}/>
            <h1>title:{props.title}</h1>
 <h1>price:{props.price}</h1>
          
     <div>
        <button onClick={increment}>+</button>
        <span >0</span>
        <button onClick={decrement}>-</button>
     </div>
     
        </div>
    );
}
export default Book;