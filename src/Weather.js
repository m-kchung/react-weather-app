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
      country: response.data.sys.country,
      date: new Date(),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      iconNumber: Math.round(response.data.weather[0].icon.substring(0, 2)),
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "5a9b3c5051ae04b7172dded8be3de831";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;

    const apiKey = "5a9b3c5051ae04b7172dded8be3de831";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function background() {
    if (weatherData.iconNumber <= 2) {
      return "clearSky";
    }
    if (weatherData.iconNumber >= 3 && weatherData.iconNumber < 5) {
      return "cloudy";
    }
    if (weatherData.iconNumber > 5 && weatherData.iconNumber < 12) {
      return "rainy";
    }
    if (weatherData.iconNumber === 13) {
      return "snowy";
    }
    if (weatherData.iconNumber === 50) {
      return "misty";
    }
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className={background()}>
          <div className="weatherApp">
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
              <span className="locationIcon" onClick={currentLocation}>
                <MdLocationOn />
              </span>
            </div>
            <WeatherToday data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
