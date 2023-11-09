import React from "react";
import "./SearchWeather.css";
import cloud from "./images/cloudy.png";

export default function SearchWeather() {
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
      <div className="col-4">
        <h1 className="city-input">Bogota, Colombia</h1>
        <ul>
          <li>Sunday 13:04</li>
          <li>Humidity: 55%</li>
          <li>Wind: 2 km/h</li>
          <li className="capitalize" id="description"></li>
        </ul>
      </div>
      <div className="col-8 text-center">
        <div className="clearfix weather-temperature">
        <img className="main_icon" src={cloud} alt="weather" />
          <span className="actual_number"> 18</span>
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