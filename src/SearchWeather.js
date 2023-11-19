import React, { useState } from "react";
import "./SearchWeather.css";
import WeatherInfo from "./WeatherInfo";
import cloud from "./images/cloudy.png";
import axios from "axios";


export default function SearchWeather(props) {
  
  let [weather, setWeather] = useState({loaded:false});
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response){
    setWeather ({
      loaded: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url

    });
  }

function search(){
  let key="cf0o37c8aaf1022e4beeb7d4de3tca0a";
let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
axios.get(url).then(showTemperature);

}

 function handleSubmit(event){
  event.preventDefault();
  search();
  // searh for a city//


 }
 function handleCityChange (event){
  setCity(event.target.value);
 }
  if (weather.loaded){
    return (
      <div className="Search">
        <form id="citySearch" onSubmit={handleSubmit}>
          <div className="row search-section">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                id="enterCity"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
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
        <WeatherInfo data={weather} />
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
    search();
return "Loading..."
  }
}