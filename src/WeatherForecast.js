import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
let [loaded, setLoaded] =useState(false);
let [forecast, setForecast] = useState(null);

useEffect (()=>{setLoaded(false)},[props.coordinates]);

function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);

}
if (loaded){
    return (
        <div className="row weather-forecast" id="forecast">
          {forecast.map(function(dailyForecast, index){
            if (index >0 && index < 6){
              return (
              <div className="col text-center" key={index}>
                 <WeatherForecastDay data={dailyForecast}/>
              </div>
              );
            }
            return null 
           })}
        </div> 
    );
}

else {
    
let key= "cf0o37c8aaf1022e4beeb7d4de3tca0a";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${key}`;
axios.get(url).then(handleResponse);
return null;
    
}
}