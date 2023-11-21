import React from "react";


export default function WeatherForecastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}º`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
    }

    function day(){
        let date = new Date (props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
        return days[day];
    }

return (
    <div>
    <div className="weather-forecast-day">
    {day()}
    </div>
    <img
        className="sunny_forecast"
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
    <div className="weather-forecast-temperature"> 
      <span className="weather-forecast-temperature-max">{maxTemperature()}</span>
      <span className="weather-forecast-temperature-min"> {minTemperature()} </span>
    </div>
   </div>
);
}