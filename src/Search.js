import "./styles.css";
import CurrentDay from "./CurrentDay";
import React, { useState } from "react";
import TemperatureConvert from "./TemperatureConvert";
import axios from "axios";
import FiveDayForecast from "./FiveDayForecast";
export default function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setLoaded(true);
    
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSearch(event) {
    event.preventDefault();

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e638b8f1ff104d68004aac76a3021cf7&units=metric`;
    axios.get(api).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search "
        placeholder="Location"
        onChange={updateCity}
      ></input>
      <button type="submit">Search </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-7">
            <h2>
              {weather.city} {weather.temperature}
              <TemperatureConvert celcius={weather.temperature} />
              <img src={weather.iconUrl} width={60} alt="icon" />{" "}
              <small>
                <CurrentDay date={weather.date} />
              </small>
            </h2>
          </div>
          <div className="col-5">
            <ul>
              <li className="Capitalize">{weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-7">The rest of the week:</div>
          
          <FiveDayForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
