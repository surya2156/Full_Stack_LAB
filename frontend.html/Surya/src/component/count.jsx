import react,{ useState } from "react";

function Count() {
    const[count, setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return (
    <div>
        <h1>Count Component</h1>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </div>
    );
}

export default Count;