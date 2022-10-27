import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";
import "./FiveDayForecast.css";

export default function FiveDayForecast(props) {
  let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

 function handleResponse(response) {
 setForecast(response.data.daily);
 setLoaded(true);
 }
if (loaded) {
  return (
    <div>
      <div className="row FiveDayForecast"></div>
      <div className=" col-xs-12 ">
        <div className="row temp ">
          <div className="col">
            <div className="ForecastDay">Mon</div>
            <Icon code="10d" size={30} />
            <div className="ForecastTemps">
              <span className="maximum-temp">{Math.round(forecast[0].temp.max)} </span>
              <span className="minimum-temp">{Math.round(forecast[0].temp.min)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3980a7c8f2a782241a093131b099f993&units=metric`;

 axios.get(apiUrl).then(handleResponse);

 return null;
} 
}
