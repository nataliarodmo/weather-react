import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
    <div className="row Current_weather">
      <div className="col-7">
        <h1 className="city-input">{props.data.city}, {props.data.country}</h1>
        <ul>
          <li><FormattedDate date={props.data.date} /></li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
          <li className="capitalize" id="description">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-5 text-center">
        <div className=" weather-temperature">
        <img className="main_icon" src={props.data.icon} alt={props.data.description} />
          <span className="actual_number"> {props.data.temperature}</span>
          <span className="units"> ºC </span>
        </div>
      </div>
    </div>      
      );
}