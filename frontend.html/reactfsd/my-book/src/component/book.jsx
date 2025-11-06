import React, { useState } from "react";
import './book.css';

function Book(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(Math.max(0, count - 1));
    };

    return (
        <div id="book">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-suBokYMcH0MW9PH9OCJXG7DF6dA554tgA&s" 
                alt="Book cover"
                width={200} 
                height={150}
            />
            <h1>Title: {props.title || 'Sample Book'}</h1>
            <h1>Price: ${props.price || '9.99'}</h1>
            <div className="counter">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Book;