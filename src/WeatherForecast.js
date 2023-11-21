import React, {useState} from "react";
import "./WeatherForecast.css";
import cloud from "./images/cloudy.png";
import axios from "axios";


export default function WeatherForecast(props){
let [loaded, setLoaded] =useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response){
    setForecast(response.data);
    setLoaded (true);
}

if (loaded){
    console.log(forecast);
    return (
        <div className="row weather-forecast" id="forecast">
          <div className="col text-center">
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
       </div> 
    )
}

else {
    
let key= "cf0o37c8aaf1022e4beeb7d4de3tca0a";
let city = (props.location);
let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
axios.get(url).then(handleResponse);
return null;
    
}
}