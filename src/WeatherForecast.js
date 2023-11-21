import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
let [loaded, setLoaded] =useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response){
  console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);

}
if (loaded){
    return (
        <div className="row weather-forecast" id="forecast">
          <div className="col text-center">
          <WeatherForecastDay data={forecast[0]}/>
          </div>
       </div> 
    )
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