import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showTemp(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }

  function handleSearch(event) {
    event.preventDefault();

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e638b8f1ff104d68004aac76a3021cf7&units=metric`;
    axios.get(api).then(showTemp);
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
        <h2> {weather.city} </h2>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
