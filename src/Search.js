import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setTemperature(
      <ul>
        <li>Temperature:{Math.round(response.data.main.temp)} ℃;</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>Humidity: {Math.round(response.data.main.humidity)} %</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather"
          />{" "}
        </li>
      </ul>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let appId = `ac4eabaa4e24a5a1b4be0fdf6adfaae8`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Name a city"
          className="search"
          onChange={changeCity}
        />{" "}
        {""}
        <input type="submit" value="search" className="button" />
      </form>
      <h2>{temperature}</h2>
    </div>
  );
}
