import React from 'react';
import './weather.css'

function Weather(props) {
  return (
    <div id="cards">
        <img src={props.imgsrc} alt="weatherImage" height={100} width={100}/>
        <h1>speed: {props.speed}</h1>
        <h4>aqi: {props.aqi}</h4>
    </div>
  );
}
export default weather;