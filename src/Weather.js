import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import WeatherToday from "./WeatherToday";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "5a9b3c5051ae04b7172dded8be3de831";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="searchSection">
          <span className="searchForm">
            <form onSubmit={handleSubmit}>
              <span className="searchIcon">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Enter a City"
                autoComplete="off"
                className="searchBar"
                onChange={handleCityChange}
              />
            </form>
          </span>
          <span className="locationIcon">
            <MdLocationOn />
          </span>
        </div>
        <WeatherToday data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
