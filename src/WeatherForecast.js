import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect (() =>{
setLoaded(false);
}, [props.coordinates]
);

function handleResponse(response){
console.log(response);
setForecast(response.data.daily);
setLoaded(true);
}
 
function load(){
    let longitude = "props.cordinates.longitude";
    let latitude = "props.cordinates.latitude";
    let apiKey = "2fa9eoc3fatafc440a3cdb74fa404f3e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  
}
 
if (loaded) {
    console.log(forecast);

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function(dailyForecast, index){
if (index < 6){
return (
  <div className="col" key={index}>
    <WeatherForecastDay data={dailyForecast} />
  </div>
);
}else {
    return null;
}
        })}

      </div>
    </div>
  );
} else {
  load();
    return null;
}
}