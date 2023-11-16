import React, { useState } from "react";
import "./SearchWeather.css";
import cloud from "./images/cloudy.png";
import axios from "axios";

export default function SearchWeather() {
  
  let [weather, setWeather] = useState({loaded:false});

  function showTemperature(response){
    console.log(response);
    setWeather ({
      loaded: true,
      city: response.data.city,
      country: response.data.country,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url

    });
  }

  if (weather.loaded){
    return (
      <div className="Search">
        <form id="citySearch">
          <div className="row search-section">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                id="enterCity"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary me-md-2 w-100"
              />
            </div>
            <div className="col-3" id="current-location">
            <button className="btn btn-outline-primary w-100" type="Click">
              Current Location
            </button>
          </div>
          </div>
        </form>
        <div className="row Current_weather">
      <div className="col-7">
        <h1 className="city-input">{weather.city}, {weather.country}</h1>
        <ul>
          <li>Sunday 13:04</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li className="capitalize" id="description">{weather.description}</li>
        </ul>
      </div>
      <div className="col-5 text-center">
        <div className=" weather-temperature">
        <img className="main_icon" src={weather.icon} alt={weather.description} />
          <span className="actual_number"> {weather.temperature}</span>
          <span className="units"> ºC </span>
        </div>
      </div>
    </div>
    <div className="row weather-forecast" id="forecast">
      <div className="col-3 text-center">
        <div className="weather-forecast-day">
            Mon
        </div>
        <img
                className="sunny_forecast"
                src={cloud}
                alt="weather"
              />
        <div className="weather-forecast-temperature"> 
            <span className="weather-forecast-temperature-max">15º</span>
            <span className="weather-forecast-temperature-min">7º </span>
         </div>
      </div>
     <div className="col-3 text-center">
      <div className="weather-forecast-day">
            Tue
            </div>
            <img
                className="sunny_forecast"
                src={cloud}
                alt="weather"
              />
            <div className="weather-forecast-temperature"> 
              <span className="weather-forecast-temperature-max">15º</span>
              <span className="weather-forecast-temperature-min">7º </span>
            </div>
      </div>
      <div className="col-3 text-center">
        <div className="weather-forecast-day">
            Wed
            </div>
            <img
                className="sunny_forecast"
                src={cloud}
                alt="weather"
              />
            <div className="weather-forecast-temperature"> 
              <span className="weather-forecast-temperature-max">15º</span>
              <span className="weather-forecast-temperature-min">7º </span>
            </div>
       </div>
      <div className="col-3 text-center">
        <div className="weather-forecast-day">
            Thur
            </div>
            <img
                className="sunny_forecast"
                src={cloud}
                alt="weather"
              />
            <div className="weather-forecast-temperature"> 
              <span className="weather-forecast-temperature-max">15º</span>
              <span className="weather-forecast-temperature-min">7º </span>
            </div>
        </div>
      </div>
    </div>
    );

  }
  else {
    let key="cf0o37c8aaf1022e4beeb7d4de3tca0a";
let url=`https://api.shecodes.io/weather/v1/current?query=Bogota&key=${key}`;
axios.get(url).then(showTemperature);
return "Loading..."
  }    
  }