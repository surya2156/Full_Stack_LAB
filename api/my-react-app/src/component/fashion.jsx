import React from 'react';
import './fashion.css'

function Fashion(props) {
  return (
    <div id="cards">
        <img src={props.imgsrc} alt="Fashion Image" height={100} width={100}/>
        <h1>Title: {props.title}</h1>
        <h4>Price: {props.price}</h4>
    </div>
  );
}
export default Fashion;