import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("Fahrenheit");

}
function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");

}
function fahrenheit (){
    return (Math.round((props.celsius * 9/5) +32)

    )
}

    if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
        <span className="actual_number"> {Math.round(props.celsius)}</span>
        <span className="units"> ºC | <a href="/" onClick={showFahrenheit}> ºF </a> </span>
        </div>
    );
}
else{
    return (
        <div className="WeatherTemperature">
        <span className="actual_number"> {fahrenheit()}</span>
        <span className="units"> <a href="/" onClick={showCelsius}>ºC </a> |  ºF </span>
        </div>
    )
}
}